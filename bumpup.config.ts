import {BumpupConfig} from "./packages/cli/src/lib/types.ts";
import version from "./packages/version-txt/main.ts";
const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        version,
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
