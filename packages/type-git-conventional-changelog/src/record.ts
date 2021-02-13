import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import {createTag} from "./helpers.ts";

const record: BumpupFunction = options=>async data=>{
    // @ts-ignore
    if(options.dry){
        console.log(`not bumping because --dry was specified`)
        console.log(options);
    }else{
        // @ts-ignore
        const process = Deno.run({
            cmd: [`git`, `tag`, `-a`, `${createTag(options.tagPrefix, data.version)}`, `-m`,`${createTag(options.tagPrefix, data.version)}`],
            stdout: "piped",
            stderr: "piped",
        })
        const raw = new TextDecoder().decode(await process.output());
    }

    return data;
}
export default record;