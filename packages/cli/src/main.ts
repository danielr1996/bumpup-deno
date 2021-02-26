import { Command, log } from "../deps.ts";
import { bump } from "./commands/bump.ts";
import { init } from "./commands/init.ts";
import {VERSION} from "./version.ts";

export const enumType = (enumOptions: string[]) =>
  ({ value }: any) => {
    // @ts-ignore
    if (!enumOptions.includes(value)) {
      throw new Error(
        `Value must be one of "${enumOptions}", but got "${value}".`,
      );
    }
    return value;
  };

export const configureLogging = (fn: any) =>
  async (options: any) => {
    await log.setup({
      handlers: {
        console: new log.handlers.ConsoleHandler(options.log.toUpperCase()),
      },
      loggers: {
        default: {
          level: options.log.toUpperCase(),
          handlers: ["console"],
        },
      },
    });
    return fn(options);
  };
export default async () =>
  await new Command()
    .type(
      "loglevel",
      enumType(["critical", "error", "warning", "info", "debug"]),
      { global: true },
    )
    .name("bumpup")
    .version(VERSION)
    .description("bumps up the version")
    .option(
      "-d, --dry [type:boolean]",
      `executes all plugins in dry mode, preventing potentially destructive operations`,
      { global: true },
    )
    .option(
      "-l, --log <type:loglevel>",
      `specifies the log level (critical,error, warning, info, debug)`,
      {
        default: "info",
        global: true,
      },
    )
    .option("-f, --file <type:string>", `which config file to read`, {
      default: "bumpup.config.ts",
      global: true,
    })
    .option("-p, --pre [type:boolean]", `do a prerelease`)
    .option(
      "-i, --preid <type:string>",
      `specify an optional prelrease id to be used`,
      { depends: ["pre"] },
    )
    .action(configureLogging(bump))
    .command("init")
    .description("initializes a default config file")
    .action(configureLogging(init))
    // @ts-ignore
    .parse(Deno.args);
