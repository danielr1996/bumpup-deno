import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";

const read: BumpupFunction = options=> async data=>{
    //TODO: Error handling for file not found
    // @ts-ignore
    const version = await Deno.readTextFile("version.txt");
    return {...data,version};
}
export default read;
