# AGENTS.md

## Scope

These rules apply to the `TradeJS-Site` repository.

## Purpose

This repository is the source of truth for `tradejs.dev`.
Keep the site standalone, buildable with plain `npm`, and deployable through its own GitHub Actions workflow.

## Architecture

- This repo owns the public marketing site only.
- Do not add dependencies on the TradeJS monorepo workspace layout.
- Keep links to documentation pointing at `https://docs.tradejs.dev`.
- Keep GitHub links pointing at the correct public repositories inside `TradeJS-Dev`.

## Build Rules

- Use `npm install`, `npm run lint`, and `npm run build`.
- Keep the app runnable with the local `Dockerfile`.
- Treat `ghcr.io/tradejs-dev/tradejs-site` as the canonical image name.
- If changing deploy automation, keep the production compose service name as `site`.

## Deploy Rules

- Image publishing is gated by repository variable `GHCR_PUBLISH_ENABLED`.
- Production deploy is gated by repository variable `PROD_DEPLOY_ENABLED`.
- If `GITHUB_TOKEN` cannot publish to GHCR in the organization, use repository secrets `GHCR_USERNAME` and `GHCR_TOKEN`.
- Required secrets are `SSH_HOST`, `SSH_USER`, and `SSH_KEY`.
- The workflow should refresh only the `site` service on the target host unless explicitly changing infra ownership.

## Editing Policy

- Keep changes focused.
- Preserve the existing visual language unless a redesign is explicitly requested.
- Do not introduce monorepo-only commands into this repo’s README or workflows.
