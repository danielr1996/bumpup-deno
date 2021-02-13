import {BumpupPlugin} from "../cli/src/lib/types.ts";

const record: BumpupPlugin = options=>async data=>{
    // @ts-ignore
    // const process = Deno.run({
    //     cmd: [`git`, `tag`, `-a`, data.newVersion, `-m`,data.newVersion],
    //     stdout: "piped",
    //     stderr: "piped",
    // })
    // await process.status();
    const process = Deno.run({
        cmd: [`git`, `tag`, `-a`, `${data.newVersion}`, `-m`,`${data.newVersion}`],
        stdout: "piped",
        stderr: "piped",
    })
    const raw = new TextDecoder().decode(await process.output());
    console.log(raw);
    return data;
}
export default record;