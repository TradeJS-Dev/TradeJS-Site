# TradeJS-Site

Standalone marketing site for the TradeJS framework.

Source of truth for `tradejs.dev`. Core framework code stays in the main monorepo: `https://github.com/TradeJS-Dev/tradejs`.

## Install

```bash
npm install
```

## Run

```bash
npm run dev
```

Site runs on `http://localhost:3003`.

## Build

```bash
npm run build
```

## Container Image

Pushes to `main` publish `ghcr.io/tradejs-dev/tradejs-site`.

## Production Deploy

The repository can also deploy `site` on the existing production server through `~/docker-compose.prod.yml`.

Required repository configuration:

- variable: `GHCR_PUBLISH_ENABLED=true`
- variable: `PROD_DEPLOY_ENABLED=true`
- secrets: `SSH_HOST`, `SSH_USER`, `SSH_KEY`

Optional registry bootstrap secrets when org-level `GITHUB_TOKEN` cannot publish packages:

- `GHCR_USERNAME`
- `GHCR_TOKEN`

When enabled, pushes to `main` publish the image and then run:

```bash
docker compose -f ~/docker-compose.prod.yml pull site
docker compose -f ~/docker-compose.prod.yml up -d site
```

GHCR package `tradejs-site` must stay public so the production host can pull it without registry login.
