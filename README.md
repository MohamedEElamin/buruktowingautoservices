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

The site emits LocalBusiness JSON-LD only when required location details and coordinates have been configured. Do not deploy with the example placeholders.
