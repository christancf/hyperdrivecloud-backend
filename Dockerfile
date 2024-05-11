ARG NODE=node:lts-alpine

FROM ${NODE} AS base
WORKDIR /app
COPY package*.json .
RUN npm ci --production

FROM ${NODE} as production
WORKDIR /app
COPY package.json .
COPY src src
COPY --from=base /app/node_modules node_modules
CMD ["node", "src/app.js"]