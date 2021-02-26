import read from "https://x.nest.land/bumpup:read-json@1.0.0-14/mod.ts";
import determine from "https://x.nest.land/bumpup:determine-semantic-increment@1.0.0-14/mod.ts";
import write from "https://x.nest.land/bumpup:write-json@1.0.0-11/mod.ts";
import {BumpupConfig} from "https://x.nest.land/bumpup:cli@1.0.0-23/src/lib/types.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        read,
        determine,
        write,
        () =>
            (data) => {
                console.log(data);
                return data;
            },
        ()=>async data=>{
            // @ts-ignore
            await Deno.writeTextFile('src/version.ts',`export const VERSION = '${data.newVersion}'`)
            return data;
        }
    ],
};
export default config;
