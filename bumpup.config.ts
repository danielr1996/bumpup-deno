import {BumpupConfig} from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/cli/src/lib/types.ts";
import type from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/type-git-conventional-changelog/type.ts";
import version from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/read-txt/read.ts";
import determine from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/determine-semver/determine.ts";
import write from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/write-txt/write.ts";
import record from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/type-git-conventional-changelog/record.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        version,
        type,
        determine,
        write,
        record,
        [(options) => async (data) => {
            console.log(data);
            return data;
        },{dry: true}],
    ]
};
export default config;
