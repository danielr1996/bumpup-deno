import {BumpupData, BumpupFunction, BumpupOptions, BumpupPlugin} from "./types.ts";

/**
 * Applies options from cli and config to a plugin function and executes the plugins in order, returning the end results
 * @param plugins
 * @param cliOptions
 */
export const composePlugins = (plugins: BumpupPlugin[], cliOptions: BumpupOptions): BumpupData => {
    let lastValue: BumpupData = {};
    plugins.forEach(plugin => {
        /**
         * If the plugin is a single function apply only cli options
         */
        if (typeof plugin === 'function') {
            plugin = [plugin, cliOptions];
        }
        lastValue = plugin[0]({...plugin[1], ...cliOptions})(lastValue);
    });
    return lastValue;
}