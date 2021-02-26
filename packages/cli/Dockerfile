FROM hayd/deno:debian-1.7.2

WORKDIR /bumpup

COPY deps.ts .
RUN deno cache deps.ts

ADD . .
RUN deno --unstable install --root /usr/local -n bumpup --allow-read --allow-write --allow-run mod.ts
RUN chmod -R a+rwx $DENO_DIR
ENTRYPOINT ["bumpup"]
