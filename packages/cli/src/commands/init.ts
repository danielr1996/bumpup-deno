const defaultConfig =
  `import read from "https://x.nest.land/bumpup:read-json@1.0.0-1/mod.ts";
import determine from "https://x.nest.land/bumpup:determine-semantic-increment@1.0.0-1/mod.ts";
import write from "https://x.nest.land/bumpup:write-json@1.0.0-1/mod.ts";
import {BumpupConfig} from "https://x.nest.land/bumpup:cli@1.0.0-2/src/lib/types.ts";";

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
