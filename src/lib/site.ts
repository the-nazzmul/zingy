/**
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://zingy.com) so Open Graph,
 * canonical URLs, sitemap, and JSON-LD use the correct origin. On Vercel,
 * VERCEL_URL is used as a fallback when the public URL is not set.
 */
export const SITE_NAME = "Zingy";

export const SITE_TAGLINE = "Love your gut. Love your life.";

export const SITE_DESCRIPTION =
  "Zingy is a gut-friendly soda with 3–5g sugar, 9g fiber, prebiotics, and probiotics in every can. Five bold flavors, real fruit juice, and no artificial sweeteners—refreshment that loves you back.";

export function getSiteUrl(): URL {
  const fromPublic = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const vercel = process.env.VERCEL_URL?.trim();
  const raw =
    fromPublic ||
    (vercel ? `https://${vercel.replace(/^https?:\/\//, "")}` : "http://localhost:3000");
  const trimmed = raw.replace(/\/$/, "");
  return new URL(trimmed);
}
