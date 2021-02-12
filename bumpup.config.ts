import {BumpupConfig, BumpupData, BumpupFunction, BumpupOptions, BumpupPlugin} from "./types.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        () => (data) => ({...data, version: '1.0.0'}),
        () => (data) => ({...data, newVersion: '2.0.0'}),
        (options) => (data) => {
            if (!options.dry) {
                console.log(`Recording ${data.version} -> ${data.newVersion}`)
            }
            return data;
        },
        [(options) => (data) => {
            console.log(options.dry, options.pre);
            console.log(data);
            return data;
        }, {
            // pre: true
        }],
    ]
};
// @ts-ignore
export default config;