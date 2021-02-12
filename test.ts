import {composePlugins} from "./cli.ts";

// @ts-ignore
import('./bumpup.config.ts').then(module => {
    composePlugins(module.default.plugins, {});
})