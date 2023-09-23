FROM node:16-alpine

RUN mkdir -p /app

ARG CACHEBUST=1

WORKDIR /app

COPY ../../library_ui/ /app

RUN npm install -g pnpm

RUN pnpm install

RUN pnpm run build

EXPOSE 5173

CMD [ "pnpm", "run", "dev" ]
