# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

COPY ./package.json ./package.json
COPY ./next.config.js ./
COPY ./.env* ./

COPY ./public ./public
COPY ./.next ./.next
COPY ./node_modules ./node_modules

# USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1

CMD ["npm", "start"]