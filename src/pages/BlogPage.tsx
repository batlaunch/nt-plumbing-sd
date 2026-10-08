import { Link } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import { blogCategories, blogPosts } from "@/data/blog";

const anchor = (c: string) => c.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-");

export default function BlogPage() {
  const categories = blogCategories.filter((c) => blogPosts.some((p) => p.meta.category === c));

  return (
    <>
      <Seo
        title="Plumbing Tips & Advice | NTP Plumbing El Cajon"
        description="Plumbing advice for East County homeowners: water heaters, slab leaks, hard water, sewer lines, repiping, and backflow testing in San Diego County."
        path="/blog"
      />
      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#1a3a5c] px-4">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Plumbing Tips &amp; Advice</h1>
          <p className="mt-2 text-primary-foreground/80">Practical guidance from NTP Plumbing for East County San Diego homeowners</p>
        </div>
      </section>
      <PageBreadcrumb trail={[{ name: "Blog", path: "/blog" }]} />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Blog categories" className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <a
                key={c}
                href={`#${anchor(c)}`}
                className="rounded-full bg-[#e8f0f8] px-4 py-1.5 text-sm font-medium text-[#1a3a5c] transition-colors hover:bg-[#e8a020] hover:text-white"
              >
                {c}
              </a>
            ))}
          </nav>

          <div className="space-y-14">
            {categories.map((c) => (
              <section key={c} id={anchor(c)} className="scroll-mt-24">
                <h2 className="mb-5 text-2xl font-bold">{c}</h2>
                <div className="space-y-5">
                  {blogPosts
                    .filter((p) => p.meta.category === c)
                    .map((post) => (
                      <Link
                        key={post.meta.slug}
                        to={`/blog/${post.meta.slug}`}
                        className="service-card-hover block rounded-xl border bg-card p-6"
                      >
                        <div className="mb-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> {post.meta.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {post.meta.readTime}
                          </span>
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">{post.meta.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.meta.excerpt}</p>
                      </Link>
                    ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
