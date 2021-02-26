import {BumpupFunction} from "../deps.ts";

const read: BumpupFunction = options=> async data=>{
    //TODO: Error handling for file not found
    // @ts-ignore
    const json = await Deno.readTextFile("egg.json");
    const version = JSON.parse(json).version;
    return {...data,version};
}
export default read;
