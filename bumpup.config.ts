import {BumpupConfig} from "./packages/cli/src/lib/types.ts";
// @ts-ignore
// import version from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/version-txt/type.ts";
import type from "./packages/type-git/type.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        // version,
        type,
        // () => (data) => ({...data, version: '1.0.0'}),
        // () => (data) => ({...data, newVersion: '2.0.0'}),
        // (options) => (data) => {
        //     if (!options.dry) {
        //         console.log(`Recording ${data.version} -> ${data.newVersion}`)
        //     }
        //     return data;
        // },
        (options) => (data) => {
            console.log(data);
            return data;
        },
    ]
};
export default config;
