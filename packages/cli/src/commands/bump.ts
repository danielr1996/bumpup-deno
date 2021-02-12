import {BumpupConfig, BumpupOptions} from "../lib/types.ts";
import {composePlugins} from "../lib/lib.ts";
import {path} from "../../deps.ts";

// @ts-ignore
export const bump = async(options: BumpupOptions) => {
    const config = await loadConfig(options);
    if (config.version !== '2.0.0') {
        throw new Error('Config versions other than 2.0.0 are not yet supported')
    }
    composePlugins(config.plugins,options);
}

export const loadConfig = async (options: BumpupOptions): Promise<BumpupConfig> =>{
    // @ts-ignore
    return (await import('file://'+path.join(Deno.cwd(),options.file))).default;
}
