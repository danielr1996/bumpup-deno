import read from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/read-txt/src/read.ts";
import determine
    from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/determine-incremental/src/determine.ts";
import write
    from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/write-txt/src/write.ts";
import record
    from "../../packages/type-git-conventional-changelog/src/record.ts";
import {BumpupConfig} from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/feature/ci/packages/cli/src/lib/types.ts";

const config: BumpupConfig = {
    version: "2.0.0",
    plugins: [
        read,
        determine,
        write,
        // record,
        // () => data => {
        //     console.log(data);
        //     return data;
        // }
    ]
};
export default config;
