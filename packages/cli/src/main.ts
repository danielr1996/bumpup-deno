import {Command, VERSION} from "../deps.ts";
import {bump} from "./commands/bump.ts";
import {init} from "./commands/init.ts";

export const enumType = (enumOptions: string[]) => ({value}: any) => {
    // @ts-ignore
    if(!enumOptions.includes(value)){
        throw new Error(`Value must be one of "${enumOptions}", but got "${value}".`);
    }
    return value;
}


await new Command()
    .type('loglevel',enumType(["error", "warn", "info", "verbose", "debug", "silly"]),{ global: true })
    .name("bumpup")
    .version(VERSION)
    .description('bumps up the version')
    .option('-d, --dry [type:boolean]', `executes all plugins in dry mode, preventing potentially destructive operations`)
    .option('-p, --pre [type:boolean]', `do a prerelease`)
    .option('-i, --preid <type:string>', `specify an optional prelrease id to be used`,{depends:['pre']})
    .option('-l, --log.ts <type:loglevel>', `specifies the log level (error, warn, info, verbose, debug, silly)`, {default: 'info',})
    .option('-f, --file <type:string>', `which config file to read`, {default: 'bumpup.config.ts'})
    .action(bump)
    .command('init')
    .description('initializes a default config file')
    .option('-f, --file <type:string>', `which config file to write`, {default: 'bumpup.config.js'})
    .option('-d, --dry [type:boolean]', `executes all plugins in dry mode, preventing potentially destructive operations`)
    .description('initializes a default config file')
    .action(init)
    // @ts-ignore
    .parse(Deno.args);
