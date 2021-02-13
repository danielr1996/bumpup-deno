import {BumpupPlugin} from "../cli/src/lib/types.ts";

export const write: BumpupPlugin = options => async data => {
    // @ts-ignore
    Deno.writeTextFileSync("version.txt", data.newVersion)
    return data;
}
export default write;
