import Link from "next/link";
import { TOOLS, CATEGORIES } from "@/lib/tools";

export default function Home() {
  return (
    <div>
      <section className="border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Kumpulan Tool Online <span className="text-primary">Gratis</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            {TOOLS.length} tool praktis untuk developer, penulis, dan siapa saja. Cepat, aman, tanpa daftar.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex gap-2 flex-wrap mb-8">
          <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            Semua
          </span>
          {CATEGORIES.map((cat) => (
            <span key={cat} className="px-4 py-2 rounded-full border border-border text-sm font-medium capitalize">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group block p-6 rounded-xl border border-border hover:border-primary hover:shadow-sm transition bg-background"
            >
              <div className="flex items-start justify-between gap-4">
                <h2 className="font-semibold group-hover:text-primary transition">{tool.name}</h2>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{tool.category}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
