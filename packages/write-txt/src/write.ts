import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

const write: BumpupFunction = options => async data => {
    //TODO: Error handling for file not found
    // @ts-ignore
    await Deno.writeTextFile("version.txt", data.newVersion);
    log.info(`writing version to version.txt`)

    return data;
}
export default write;
