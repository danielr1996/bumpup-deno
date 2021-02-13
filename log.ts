import * as log from "https://deno.land/std@0.84.0/log/mod.ts";

await log.setup({
    handlers: {
        console: new log.handlers.ConsoleHandler("DEBUG")
    },
    loggers: {
        default: {
            level: "DEBUG",
            handlers: ["console"]
        }
    }
})

let logger = log.getLogger();

log.debug("Hello world");
log.info(123456);
log.warning(true);
log.error({ foo: "bar", fizz: "bazz" });
log.critical("500 Internal server error");