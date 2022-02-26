FROM node:16-alpine
WORKDIR /app

ENV NODE_ENV production
ENV JOIN_KEY ""
ENV PORT 3000

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --chown=nextjs:nodejs /packages/main/.next/standalone/packages/main ./
COPY --chown=nextjs:nodejs /packages/main/.next/standalone/node_modules ./node_modules
COPY --chown=nextjs:nodejs /packages/main/.next/static ./.next/static
COPY --chown=nextjs:nodejs /packages/main/public ./public

USER nextjs

CMD ["node", "server.js"]