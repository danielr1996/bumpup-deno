FROM hayd/debian-deno:1.7.2

WORKDIR /app

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache src/main.ts

RUN mkdir -p $DENO_DIR/bin/
RUN echo $'#!/bin/sh\n\
deno "run" "--allow-read" "--allow-write" "--allow-run" "src/main.ts" "$@"\n'\
> $DENO_DIR/bin/bumpup

RUN chmod a+x $DENO_DIR/bin/bumpup
ENTRYPOINT ["/deno-dir/bin/bumpup"]
