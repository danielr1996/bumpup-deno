export const defaultConfig = `import {BumpupConfig} from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/cli/src/lib/types.ts";
import type from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/src/type-git-conventional-changelog/type.ts";
import read from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/src/read-txt/read.ts";
import determine from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/src/determine-semver/determine.ts";
import write from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/src/write-txt/write.ts";
import record from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/src/type-git-conventional-changelog/record.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        read,
        type,
        determine,
        write,
        record,
    ]
};
export default config;
`

// @ts-ignore
export const init = async (options) => {
    if (options.dry) {
        console.log(defaultConfig)
    }else{
        // @ts-ignore
        await Deno.writeTextFile('bumpup.config.ts', defaultConfig)
    }
}