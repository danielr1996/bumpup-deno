import type
    from "./packages/type-git-conventional-changelog/src/type.ts";
import read from "./packages/read-txt/src/read.ts";
import determine
    from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/determine-semver/src/determine.ts";
import write from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/write-txt/src/write.ts";
import record from "./packages/type-git-conventional-changelog/src/record.ts";
// import record
//     from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/type-git-conventional-changelog/src/record.ts";
import {BumpupConfig} from "./packages/cli/src/lib/types.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        read,
        [type, {tagPrefix: 'main'}],
        determine,
        write,
        [record, {tagPrefix: 'main'}],
    ]
};
export default config;
