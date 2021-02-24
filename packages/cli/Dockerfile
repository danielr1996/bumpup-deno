FROM hayd/debian-deno:1.7.2

WORKDIR /app

RUN echo $'#!/bin/sh\n\
deno "run" "--allow-read" "--allow-write" "--allow-run" "/app/src/main.ts" "$@"\n'\
> /usr/local/bin/bumpup
RUN chmod a+x /usr/local/bin/bumpup

USER deno

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno cache src/main.ts

ENTRYPOINT ["/usr/local/bin/bumpup"]
