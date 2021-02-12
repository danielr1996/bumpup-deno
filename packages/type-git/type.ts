import {BumpupPlugin} from "../cli/src/lib/types.ts";
import {log} from "../../../isomorphic-git/src/api/log.js";

const type: BumpupPlugin = options => data => {
    // @ts-ignore
    log({
        fs: {},
        dir: '.',
    }).then(res=>console.log(res));
    return data;
}
export default type;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// export const getCommitType = (message: CommitMessage): CommitType => match([
//     {test: message.notes?.map(note => note.title).includes('BREAKING CHANGE'), value: 'major'},
//     {test: message.type === 'fix', value: 'patch'},
//     {test: message.type === 'feat', value: 'minor'},
//     {test: true, value: 'none'},
// ]);

// export const getCommitTypes = (messages: CommitMessage[]): CommitType[] => messages.map(getCommitType)
// // eslint-disable-next-line @typescript-eslint/ban-ts-comment
// // @ts-ignore
// export const determineHighestCommitType = (types: CommitType[]): CommitType => types.reduce((acc, cur) => match([
//     {test: acc === 'none', value: cur},
//     {test: acc === 'patch' && cur !== 'none', value: cur},
//     {test: acc === 'minor' && cur === 'major', value: cur},
//     {test: acc === 'major', value: acc},
//     {test: true, value: acc},
// ]), 'none');

// export type CommitMessage = {
//     body?: string,
//     footer?: string,
//     type?: string,
//     scope?: string,
//     subject?: string,
//     header?: string,
//     notes?: { title: string, text: string }[]
// }
//
// export type CommitType = 'major' | 'minor' | 'patch' | 'none';
//
// export default type;
