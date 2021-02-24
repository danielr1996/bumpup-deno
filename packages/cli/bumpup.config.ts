import read from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/read-txt/src/read.ts";
import type from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/type-git-conventional-changelog/src/type.ts";
import determine from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/determine-semver/src/determine.ts";
import write from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/write-txt/src/write.ts";
import record from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/type-git-conventional-changelog/src/record.ts";
import {BumpupConfig} from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/cli/src/lib/types.ts";

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
