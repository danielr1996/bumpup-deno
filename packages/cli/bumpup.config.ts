import read from "../read-json/mod.ts";
import determine from "../determine-semantic-increment/mod.ts";
import write from "../write-json/mod.ts";
import {BumpupConfig} from "./src/lib/types.ts";

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
