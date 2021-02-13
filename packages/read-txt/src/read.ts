import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";

export const read: BumpupFunction = options=> async data=>{
    // @ts-ignore
    const version = await Deno.readTextFile("version.txt");
    return {...data,version};
}
export default read;
