import {BumpupPlugin} from "../../cli/src/lib/types.ts";

const record: BumpupPlugin = options=>async data=>{
    // @ts-ignore
    if(options.dry){
        console.log(`not bumping because --dry was specified`)
    }else{
        console.log(options);
        // @ts-ignore
        const process = Deno.run({
            // @ts-ignore
            cmd: [`git`, `tag`, `-a`, `${options.tagPrefix}${options.tagPrefix !== '' ? '-' : ''}${data.newVersion}`, `-m`,`${options.tagPrefix}${options.tagPrefix !== '' ? '-' : ''}${data.newVersion}`],
            stdout: "piped",
            stderr: "piped",
        })
        const raw = new TextDecoder().decode(await process.output());
    }

    return data;
}
export default record;