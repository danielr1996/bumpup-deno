import {BumpupConfig} from "./packages/cli/src/lib/types.ts";
import type from "./packages/type-git/type.ts";
import version from "./packages/version-txt/version.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        version,
        type,
        () => (data) => ({...data, version: '1.0.0'}),
        () => async (data) => ({...data, newVersion: '2.0.0'}),
        (options) => (data) => {
            if (!options.dry) {
                console.log(`Recording ${data.version} -> ${data.newVersion}`)
            }
            return data;
        },
        [(options) => async (data) => {
            console.log(data);
            return data;
        },{dry: true}],
    ]
};
export default config;
