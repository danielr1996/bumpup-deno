import {BumpupFunction, log} from "../deps.ts";
const write: BumpupFunction = options => async data => {
    //TODO: Error handling for file not found
    // @ts-ignore
    await Deno.writeTextFile("version.txt", data.newVersion);
    log.info(`writing version to version.txt`)

    return data;
}
export default write;
