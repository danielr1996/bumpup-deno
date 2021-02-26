const defaultConfig =
  `import read from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/read-txt/src/read.ts";
import type from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/type-git-conventional-changelog/src/type.ts";
import determine from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/determine-semver/src/determine.ts";
import write from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/write-txt/src/write.ts";
import record from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/type-git-conventional-changelog/src/record.ts";
import {BumpupConfig} from "https://raw.githubusercontent.com/danielr1996/bumpup-deno/main/packages/cli/src/lib/types.ts";

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
`;

// @ts-ignore
export const init = async (options) => {
  if (options.dry) {
    console.log(defaultConfig);
  } else {
    // @ts-ignore
    await Deno.writeTextFile("bumpup.config.ts", defaultConfig);
  }
};
