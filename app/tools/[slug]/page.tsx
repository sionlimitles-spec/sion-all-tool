import { notFound } from "next/navigation";
import { TOOLS, getToolBySlug } from "@/lib/tools";
import { buildMetadata, buildToolJsonLd } from "@/lib/seo";
import { TOOL_COMPONENTS } from "@/components/tools/registry";

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};
  return buildMetadata({
    title: tool.name,
    description: tool.description,
    path: `/tools/${tool.slug}`,
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const Component = TOOL_COMPONENTS[slug];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildToolJsonLd(slug)) }}
      />
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{tool.category}</p>
        <h1 className="text-3xl font-bold">{tool.name}</h1>
        <p className="mt-2 text-muted-foreground">{tool.description}</p>
      </div>

      {Component ? (
        <Component />
      ) : (
        <div className="p-8 rounded-xl border border-border bg-muted text-center text-sm text-muted-foreground">
          Tool ini sedang dalam pengembangan.
        </div>
      )}
    </div>
  );
}
