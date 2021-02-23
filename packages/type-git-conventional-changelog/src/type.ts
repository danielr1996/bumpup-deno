import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import {createTag} from "./helpers.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

const COMMIT_SEPERATOR = `++COMMIT_SEPERATOR++`

const type: BumpupFunction = options => async data => {
    //TODO: Error handling for Deno.run
    // @ts-ignore
    const process = Deno.run({
        cmd: [`git`, `log`, `${createTag(options.tagPrefix, data.version)}..`, `--pretty=format:%B${COMMIT_SEPERATOR}`, `.`],
        stdout: "piped",
        stderr: "piped",
    })
    const raw = new TextDecoder().decode(await process.output());
    const parsed = parseCommandLineOutput(raw);
    const messages = parseCommitMessages(parsed);
    log.debug(`messages: ${JSON.stringify(messages)}`);
    const commitTypes = getCommitTypes(messages)
    log.debug(`commitTypes: ${commitTypes}`);
    const type = determineHighestCommitType(commitTypes);
    return {...data, type};
}

const parseCommandLineOutput = (output: string): string[] => output.trim().split(COMMIT_SEPERATOR).slice(0, -1);

const parseCommitMessage = (message: string): CommitMessage => {
    const msg: CommitMessage = {notes: []};
    msg.subject = message.trim().split(/(\r\n|\r|\n)/).filter(l => !(l === '' || l === '\n'))[0].replace(/.+:(.*)$/, "$1").trim();

    // @ts-ignore
    if (message.trim().startsWith('fix')) {
        msg.type = 'fix';
    } else { // @ts-ignore
        if (message.trim().startsWith('feat')) {
            msg.type = 'feat';
        }
    }
    // @ts-ignore
    if (message.includes('BREAKING CHANGE')) {
        // @ts-ignore
        msg.notes.push({title: 'BREAKING CHANGE', text: ''})
    }
    return msg;
};
const parseCommitMessages = (messages: string[]): CommitMessage[] => messages.map(parseCommitMessage);

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const getCommitType = (message: CommitMessage): CommitType => match([
// @ts-ignore
    {test: message.notes?.map(note => note.title).includes('BREAKING CHANGE'), value: 'major'},
    {test: message.type === 'fix', value: 'patch'},
    {test: message.type === 'feat', value: 'minor'},
    {test: true, value: 'none'},
]);

const getCommitTypes = (messages: CommitMessage[]): CommitType[] => messages.map(getCommitType)
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const determineHighestCommitType = (types: CommitType[]): CommitType => types.reduce((acc, cur) => match([
    {test: acc === 'none', value: cur},
    {test: acc === 'patch' && cur !== 'none', value: cur},
    {test: acc === 'minor' && cur === 'major', value: cur},
    {test: acc === 'major', value: acc},
    {test: true, value: acc},
]), 'none');

type CommitMessage = {
    body?: string,
    footer?: string,
    type?: string,
    scope?: string,
    subject?: string,
    header?: string,
    notes?: { title: string, text: string }[]
}

type CommitType = 'major' | 'minor' | 'patch' | 'none';

export default type;
const match = <R>(tests: { test: boolean, value: R }[]): R => {
    const results = tests.filter(test => test.test);
    //@ts-ignore
    return results.length > 0 ? results[0].value : null;
}
