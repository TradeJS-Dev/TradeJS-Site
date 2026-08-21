# AGENTS.md

## Scope

These rules apply to the `TradeJS-Site` repository.

## Purpose

This repository is the source of truth for `tradejs.dev`.
Keep the site standalone, buildable with plain `npm`, and publish its immutable
container image without owning production server access.

## Workspace Routing

- This repository is the canonical destination for the public landing page,
  marketing copy, SEO, and `tradejs.dev`. Start from
  `~/dev/tradejs/AGENTS.md`; do not scan sibling repositories.
- User-facing knowledge-base articles belong in `tradejs-docs`; framework and
  strategy behavior belong in their source repositories.
- Use `yarn dev` for local work and `yarn checks` for complete verification.

## Architecture

- This repo owns the public marketing site only.
- Do not add dependencies on the TradeJS monorepo workspace layout.
- Keep links to documentation pointing at `https://docs.tradejs.dev`.
- Keep GitHub links pointing at the correct public repositories inside `TradeJS-Dev`.
- Keep `public/llms.txt` and `public/llms-full.txt` aligned with the current
  package and repository boundaries.
- Do not reintroduce `@tradejs/strategies`; built-in strategies are independent
  packages, with TrendLine and ReverseTrendLine as the single grouped exception.

## Build Rules

- Use `npm install` for the standalone install flow and `yarn checks` for the
  complete lint/build verification before every commit.
- Keep the app runnable with the local `Dockerfile`.
- Treat `ghcr.io/tradejs-dev/tradejs-site` as the canonical image name.
- If changing deploy automation, keep the production compose service name as `site`.

## Deploy Rules

- Image publishing runs automatically on pushes to `main` and uses the full
  source SHA as its only image tag.
- Production SSH, Compose, and release state belong to `TradeJS-Deploy`.
- If `GITHUB_TOKEN` cannot publish to GHCR in the organization, use repository secrets `GHCR_USERNAME` and `GHCR_TOKEN`.
- Do not add `SSH_HOST`, `SSH_USER`, or `SSH_KEY` to this repository.
- Deploy the published SHA through the typed `site` component workflow in
  `TradeJS-Deploy`.

## Editing Policy

- Keep changes focused.
- Preserve the existing visual language unless a redesign is explicitly requested.
- Do not introduce monorepo-only commands into this repo’s README or workflows.

## Local Clone Policy

- Keep `TradeJS-Dev` repository clones under `~/dev/tradejs/...`.
- In this environment, use `~/dev/tradejs/investing` for `TradeJS` and
  `~/dev/tradejs/tradejs-site` for this repo.
- Do not use `/tmp` as a working location for local long-lived clones.
