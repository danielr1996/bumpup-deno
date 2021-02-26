import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

const write: BumpupFunction = options => async data => {
    //TODO: Error handling for file not found
    // @ts-ignore
    const json = JSON.parse(await Deno.readTextFile("egg.json"));
    json.version = data.newVersion;
    // @ts-ignore
    await Deno.writeTextFile("egg.json", JSON.stringify(json, null, 4));
    return data;
}
export default write;
