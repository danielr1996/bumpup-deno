import {BumpupPlugin} from "../cli/src/lib/types.ts";

export const version: BumpupPlugin = options=> data=>{
    const decoder = new TextDecoder("utf-8");
    // @ts-ignore
    const version = decoder.decode(Deno.readFileSync("version.txt")).trim();
    return {...data,version};
}
export default version;
