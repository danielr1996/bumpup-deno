import {BumpupFunction} from "../../cli/src/lib/types.ts";

export const read: BumpupFunction = options=> async data=>{
    //TODO: Error handling for file not found
    // @ts-ignore
    const raw = await Deno.readTextFile("package.json");
    const version = JSON.parse(raw).version;
    return {...data,version};
}
export default read;
