import {BumpupData, BumpupOptions, BumpupPlugin} from "./types.ts";

/**
 * Applies options from cli and config to a plugin function and executes the plugins in order, returning the end results
 * @param plugins
 * @param cliOptions
 */
export const composePlugins = async (plugins: BumpupPlugin[], cliOptions: BumpupOptions): Promise<BumpupData> => {
    let lastValue: BumpupData = {};

    // @ts-ignore
    for (let plugin of plugins) {
        /**
         * If the plugin is a single function apply only cli options
         */
        if (typeof plugin === 'function') {
            plugin = [plugin, cliOptions];
        }
        const [fn, op] = plugin;
        lastValue = await fn({...op, ...cliOptions})(lastValue);
    }
    return lastValue;
}
