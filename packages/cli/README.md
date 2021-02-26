# bumpup:cli

## Quickstart

> 🚧️Currently
> [`deno compile` doesn't support dynamic imports
yet](https://github.com/denoland/deno/issues/8655) so the easiest way to install
> is using `deno install`. As soon as dynamic imports are supported it is planned
> to provide standalone, self contained binaries.

> This also means that you have to have
> [deno installed](https://github.com/denoland/deno/releases/tag/v1.7.5), in the
> future this isn't required anymore.

```shell script
// Install bumpup to your $DENO_DIR
deno --unstable install --allow-run --allow-read --allow-write -n bumpup https://x.nest.land/bumpup:cli@<version>/mod.ts
// Create an example config file
bumpup init
bumpup
```

## Usage

To see all options and commands run `bumpup --help` or
`bumpup <subcommands> --help`

### Options and commands

#### bumpup

```shell script
$ bumpup --help

  Usage:   bumpup
  Version: 1.0.0

  Description:

    bumps up the version

  Options:

    -h, --help             - Show this help.
    -V, --version          - Show the version number for this program.
    -d, --dry      [type]  - executes all plugins in dry mode, preventing potentially destructive
                           operations
    -p, --pre      [type]  - do a prerelease
    -i, --preid    <type>  - specify an optional prelrease id to be used                           (Depends: --pre)
    -l, --log.ts      <type>  - specifies the log.ts level (error, warn, info, verbose, debug, silly)    (Default: "info")
    -f, --file     <type>  - which config file to read                                             (Default: "bumpup.config.ts")

  Commands:

    init  - initializes a default config file
```

#### bumpup init

```shell script
$ bumpup init --help

  Usage:   bumpup init
  Version: 1.0.0

  Description:

    initializes a default config file

  Options:

    -h, --help          - Show this help.
    -f, --file  <type>  - which config file to write                                            (Default: "bumpup.config.js")
    -d, --dry   [type]  - executes all plugins in dry mode, preventing potentially destructive
                        operations
```

## Configuration

> 🚧 Currently you have to manually assemble your plugins even if you use a
> standard workflow. For a future version it is planned to support presets for
> common use cases like `babel` does with their
> [babel presets](https://babeljs.io/docs/en/presets).

A default `bumpup.config.ts` config file can be generated with `bumpup init`. It
contains the plugins for a standard 'deno, git, semver' use case.

> bumpup also supports plain javascript config files, but typescript config
> files give you built in validation

### bumpup.config.ts

A configuration file is an ES Module with a configuration object as its default
export. CommonJS Modules are not supported.

#### Minimal config

The most basic example (although not very useful because it contains no plugins)
would be:

```ts
export default {
  version: "2.0.0",
  plugins: [],
};
```

#### Adding external plugins

To add a plugin import it and add it to the plugin array:

```ts
import read from "https://x.nest.land/bumpup:read-json@<version>/mod.ts";
import type from "https://x.nest.land/bumpup:type-git-conventional-changelog@<version>/mod.ts";
import determine from "https://x.nest.land/bumpup:determine-semver@<version>/mod.ts";
import write from "https://x.nest.land/bumpup:write-json@<version>/mod.ts";
import record from "https://x.nest.land/bumpup:type-git-conventional-changelog@<version>/mod.ts";
import {BumpupConfig} from "https://x.nest.land/bumpup:cli@<version>/src/lib/types.ts";

const config: BumpupConfig = {
  version: "2.0.0",
  plugins: [
    read,
    type,
    determine,
    write,
    record,
  ],
};
export default config;
```

#### Providing options to plugins

To pass options to a plugin add an array with the plugin and its options instead
of the plugin: For a list of options supported by the plugin see the plugins
doc.

```ts
import read from "https://x.nest.land/bumpup:read-json@<version>/mod.ts";
import type from "https://x.nest.land/bumpup:type-git-conventional-changelog@<version>/mod.ts";
import determine from "https://x.nest.land/bumpup:determine-semver@<version>/mod.ts";
import write from "https://x.nest.land/bumpup:write-json@<version>/mod.ts";
import record from "https://x.nest.land/bumpup:type-git-conventional-changelog@<version>/mod.ts";
import {BumpupConfig} from "https://x.nest.land/bumpup:cli@<version>/src/lib/types.ts";

const config: BumpupConfig = {
  version: "2.0.0",
  plugins: [
    read,
    type,
    determine,
    [write, { dry: true }],
    record,
  ],
};
export default config;
```

#### Inline Plugins

Because the configuration is just plain javascript/typescript it is also possible to
specify a plugin inline. This might be useful if you want to debug the workflow
or slightly alter a plugins behaviour without writing and publishing a complete
plugin for it.

A simple inline plugin that just logs the options and data looks like this:

```ts
export default {
  version: "2.0.0",
  plugins: [
    (options) =>
      (data) => {
        console.log(options, data);
        return data;
      },
  ],
};
```
