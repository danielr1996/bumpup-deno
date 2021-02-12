// import {Command} from 'https://cdn.depjs.com/cmd/mod.ts'
import Denomander from "https://raw.githubusercontent.com/siokas/denomander/master/mod.ts";
// import {composePlugins} from "./cli.ts";
// import {BumpupOptions} from "./types.ts";

export const parseEnumarableOption: (enumberable: unknown[]) => (value: unknown, previous: unknown) => unknown = enumberable => (value, prev) => {
    // @ts-ignore
    return enumberable.includes(value) ? value : prev;
}

export const parseLogLevelOption = parseEnumarableOption(['error', 'warn', 'info', 'verbose', 'debug', 'silly']);


const program = new Denomander({
    app_name: "My App Name",
    app_description: "My App Description",
    app_version: "1.0.1",
});

program.command('bump')
    .description('bumps up the version')
    .option('-d, --dry', `executes all plugins in dry mode, preventing potentially destructive operations`, (x: any) => x, false)
    // .option('-p, --pre', `do a prerelease`, false)
    // .option('-i, --preid <preid>', `specify an optional prelrease id to be used`)
    // .option('-l, --log <log-level>', `specifies the log level (error, warn, info, verbose, debug, silly)`, parseLogLevelOption, 'info')
    // .option('-f, --file <config-file>', `which config file to read`, 'bumpup.config.mjs')
    .action((o: any) => {
        // @ts-ignore
        // import('./bumpup.config.ts').then(module => {
        // composePlugins(module.default.plugins, o);
        // })
        console.log(o);
    });


// @ts-ignore
program.parse(Deno.args);