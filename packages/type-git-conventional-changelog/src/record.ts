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
        log.info(`recording ${tag} to git`)
        // return new TextDecoder().decode(await process.output());
        const {code} = await process.status();
        if (code === 0) {
            const rawOutput = await process.output();
            return {...data, stdout: rawOutput};
        } else {
            const rawError = await process.stderrOutput();
            const errorString = new TextDecoder().decode(rawError);
            console.log(errorString);
            return {...data, error: errorString};
        }
    }

    return data;
}
export default record;