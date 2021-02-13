import {BumpupFunction, BumpupPlugin} from "../../cli/src/lib/types.ts";

const record: BumpupFunction = options=>async data=>{
    // @ts-ignore
    if(options.dry){
        console.log(`not bumping because --dry was specified`)
        console.log(options);
    }else{
        const tag = `${options.tagPrefix? `${options.tagPreifx}-`:``}${data.newVersion}`;
        // @ts-ignore
        const process = Deno.run({
            cmd: [`git`, `tag`, `-a`, `${tag}`, `-m`,`${tag}`],
            stdout: "piped",
            stderr: "piped",
        })
        const raw = new TextDecoder().decode(await process.output());
    }

    return data;
}
export default record;