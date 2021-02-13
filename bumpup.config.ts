import {BumpupConfig} from "./packages/cli/src/lib/types.ts";
import type from "./packages/type-git-conventional-changelog/type.ts";
import version from "./packages/read-txt/version.ts";
import determine from "./packages/determine-semver/determine.ts";
import write from "./packages/write-txt/version.ts";
import record from "./packages/type-git-conventional-changelog/record.ts";

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
