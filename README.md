# TradeJS-Site

Standalone marketing site for the TradeJS framework.

Source of truth for `tradejs.dev`. Core framework code stays in
[`TradeJS`](https://github.com/TradeJS-Dev/TradeJS); the generated personal
runtime lives in
[`TradeJS-Project`](https://github.com/TradeJS-Dev/TradeJS-Project), and each
public strategy is released from its own repository.

## Install

```bash
yarn
```

## Run

```bash
yarn dev
```

Site runs on `http://localhost:3003`.

## Build

```bash
yarn build
```

## Container Image

Pushes to `main` publish
`ghcr.io/tradejs-dev/tradejs-site:<full-source-sha>`. Mutable `latest` tags are
not part of the production contract.

## Production Deploy

This repository does not have production SSH access. After an image is
published, deploy its full source SHA through the `Deploy production component`
workflow in `TradeJS-Deploy` with `component=site`.

Optional registry bootstrap secrets when org-level `GITHUB_TOKEN` cannot publish packages:

- `GHCR_USERNAME`
- `GHCR_TOKEN`

`TradeJS-Deploy` alone owns Compose, the server credentials, and the exact
production release state. GHCR package `tradejs-site` must stay public so the
production host can pull it without registry login.

## Related Repositories

- [`TradeJS-Docs`](https://github.com/TradeJS-Dev/TradeJS-Docs) owns the public
  knowledge base.
- [`TradeJS-Base`](https://github.com/TradeJS-Dev/TradeJS-Base) owns the
  non-empty default preset.
- [`TradeJS-Strategy-Kit`](https://github.com/TradeJS-Dev/TradeJS-Strategy-Kit)
  owns strategy-neutral authoring helpers.
- `TradeJS-Strategy-*` repositories own individual strategy packages;
  `TradeJS-Strategy-TrendLine` intentionally owns both TrendLine variants.

Keywords: ai, claude, codex.
