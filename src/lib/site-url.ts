const FALLBACK = "http://localhost:3000";

/**
 * Absolute origin of the deployment, used for canonical URLs, OG images,
 * the sitemap and robots.txt.
 *
 * Resolution order:
 *  1. `NEXT_PUBLIC_SITE_URL`: set this to the custom domain in production.
 *  2. `VERCEL_PROJECT_PRODUCTION_URL`: set automatically on Vercel.
 *  3. localhost, for local development.
 */
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return withProtocol(explicit).replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return withProtocol(vercel);

  return FALLBACK;
}

function withProtocol(host: string) {
  return /^https?:\/\//.test(host) ? host : `https://${host}`;
}
