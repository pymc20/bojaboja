FROM node:16-alpine AS builder
COPY . .

RUN yarn install

RUN yarn workspace main build

FROM node:16-alpine
WORKDIR /app

RUN apk update && apk add bash

ENV NODE_ENV production
ENV JOIN_KEY ""
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /packages/main/.next/standalone/packages/main ./
COPY --from=builder --chown=nextjs:nodejs /node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /packages/main/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /packages/main/public ./public

USER nextjs

CMD ["node", "server.js"]