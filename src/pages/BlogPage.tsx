import { Link } from "react-router-dom";
import { CalendarDays, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <>
      <Seo
        title="Plumbing Tips & Advice Blog | NTP Plumbing San Diego"
        description="Practical plumbing advice from NTP Plumbing — water heater care, drain cleaning, leak prevention, and more for Greater San Diego homeowners."
        path="/blog"
      />
      <section className="relative flex min-h-[220px] items-center justify-center overflow-hidden bg-[#1a3a5c]">
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground md:text-5xl">Plumbing Tips &amp; Advice</h1>
          <p className="mt-2 text-primary-foreground/70">Practical guidance from NTP Plumbing, for Greater San Diego homeowners</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.meta.slug}
                to={`/blog/${post.meta.slug}`}
                className="service-card-hover block rounded-xl border bg-card p-6"
              >
                <div className="mb-2 flex flex-wrap items-center gap-3 text-xs font-medium uppercase tracking-wide text-primary">
                  <span>{post.meta.category}</span>
                  <span className="flex items-center gap-1 text-muted-foreground normal-case tracking-normal">
                    <CalendarDays className="h-3.5 w-3.5" /> {post.meta.date}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground normal-case tracking-normal">
                    <Clock className="h-3.5 w-3.5" /> {post.meta.readTime}
                  </span>
                </div>
                <h2 className="mb-2 text-xl font-semibold">{post.meta.title}</h2>
                <p className="text-sm text-muted-foreground">{post.meta.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
