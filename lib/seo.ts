import type { Metadata } from "next";
import { TOOLS } from "./tools";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sion-all-tool.vercel.app";
const SITE_NAME = "AllTools";

export function buildMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName: SITE_NAME, type: "website" },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function buildToolJsonLd(slug: string) {
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return null;
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
  };
}
