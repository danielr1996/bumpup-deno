import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";
import {createTag} from "./helpers.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

const record: BumpupFunction = options=>async data=>{
    // @ts-ignore
    if(options.dry){
        log.info(`not bumping because --dry was specified`)
    }else{
        const tag = createTag(options.tagPrefix, data.newVersion)
        log.debug(`tag: ${tag}`)
        //TODO: Error handling for Deno.run
        // @ts-ignore
        const process = Deno.run({
            cmd: [`git`, `tag`, `-a`, `${tag}`, `-m`,`${tag}`],
            stdout: "piped",
            stderr: "piped",
        })
        const raw = new TextDecoder().decode(await process.output());
        log.info(`recording version to git`)
    }

    return data;
}
export default record;