import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

export const write: BumpupFunction = options => async data => {
    // @ts-ignore
    const raw = await Deno.readTextFile("package.json");
    const json = JSON.parse(raw);
    json.version = data.newVersion;

    //TODO: Error handling for file not found
    // @ts-ignore
    await Deno.writeTextFile("package.json", JSON.stringify(json, null, 4));
    log.info(`${(data.newVersion !== data.version  && data.newVersion !== null) || data.type==='new' ? `` : `not `}bumping version in package.json`)
    return data;
}
export default write;
