# Buruk Towing & Auto Services

Mobile-first Next.js site for emergency towing and auto repair. Local business facts are read from `NEXT_PUBLIC_*` environment variables so unverified address, phone, and coordinates are not presented as genuine listings.

## Run locally

1. Install Node.js 20.9 or newer.
2. Copy `.env.example` to `.env.local` and verify the business details before deployment.
3. Run `npm install`, then `npm run dev`.
4. Open http://localhost:3000.

Before launch, verify the phone number, street address, city/state, service area, coordinates, canonical site URL, review URL, and service availability. Customers contact the shop by phone for repair service availability.

## Validation

- `npm run typecheck`
- `npm run build`

## Cloudflare Workers

This project uses OpenNext for Cloudflare. The adapter generates the Worker
entrypoint at `.open-next/worker.js` and static assets at `.open-next/assets`.
Configure Cloudflare Workers Builds to use `npm run deploy` as its deploy
command; this script builds the app with OpenNext and then deploys through the
matching adapter CLI. Do not configure a bare `npx wrangler deploy` command
for this Next.js app. The self-service binding in `wrangler.toml` targets the
Worker name `buruktowingautoservices`.

## Cloudflare Pages

The same site can be deployed to Pages as a static export. Create a Pages
project from this repository and set the build command to `npm run build` and
the output directory to `out`. Cloudflare sets `CF_PAGES=1` during its build,
which switches Next.js to static export mode. The Pages response headers are in
`public/_headers`. Because Pages is static hosting, use Workers deployment when
you need server-side Next.js features or runtime APIs.

The site emits LocalBusiness JSON-LD only when required location details and coordinates have been configured. Do not deploy with the example placeholders.
