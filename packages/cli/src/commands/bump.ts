import {BumpupConfig, BumpupOptions} from "../lib/types.ts";
import {composePlugins} from "../lib/lib.ts";
import {path} from "../../deps.ts";
import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

// @ts-ignore
export const bump = async(options: BumpupOptions) => {
    //TODO: Error handling for file not found
    const config = await loadConfig(options);
    if (config.version !== '2.0.0') {
        log.critical('Config versions other than 2.0.0 are not yet supported')
        // @ts-ignore
        Deno.exit(-1);
    }
    await composePlugins(config.plugins,options);
}

const loadConfig = async (options: BumpupOptions): Promise<BumpupConfig> =>{
    // @ts-ignore
    return (await import('file://'+path.join(Deno.cwd(),options.file))).default;
}
