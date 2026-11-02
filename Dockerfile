FROM node:24.22.2-alpine AS builder

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:24.22.2-alpine

WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app /app

EXPOSE 3003

CMD ["npm", "run", "start"]
