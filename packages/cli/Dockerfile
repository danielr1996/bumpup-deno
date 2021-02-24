FROM hayd/deno:debian-1.7.2

RUN chmod 777 $DENO_DIR

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno install --root /usr/local -n bumpup --allow-read --allow-write --allow-run src/main.ts
ENTRYPOINT ["bumpup"]
