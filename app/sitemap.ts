import { TOOLS } from "@/lib/tools";

export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://sion-all-tool.vercel.app";
  const toolPages = TOOLS.map((tool) => ({
    url: `${base}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily" as const, priority: 1 },
    ...toolPages,
  ];
}
