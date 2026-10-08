import { Link, useParams } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getBlogPost } from "@/data/blog";
import { getServicePage } from "@/data/servicePages";
import { blogPostingSchema } from "@/lib/schema";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const { meta, Content } = post;
  const path = `/blog/${meta.slug}`;
  const relatedService = meta.relatedServiceSlug ? getServicePage(meta.relatedServiceSlug) : undefined;

  return (
    <>
      <Seo title={meta.seoTitle} description={meta.seoDescription} path={path} ogType="article" />
      <JsonLd
        data={blogPostingSchema({
          title: meta.title,
          description: meta.seoDescription,
          path,
          datePublished: meta.dateISO,
          dateModified: meta.dateModified ?? meta.dateISO,
        })}
      />
      <PageBreadcrumb trail={[{ name: "Blog", path: "/blog" }, { name: meta.title, path }]} className="max-w-3xl" />

      <article className="section-padding">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">{meta.category}</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{meta.title}</h1>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>{meta.author}</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" /> {meta.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" /> {meta.readTime}
            </span>
          </div>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <Content />
          </div>

          {relatedService && (
            <Link
              to={`/services/${relatedService.slug}`}
              className="service-card-hover mt-10 flex items-center justify-between rounded-xl border bg-card p-6"
            >
              <div className="flex items-center gap-4">
                <relatedService.icon className="h-8 w-8 shrink-0 text-primary" />
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Related Service</p>
                  <p className="text-lg font-semibold">{relatedService.navTitle}</p>
                </div>
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-primary" />
            </Link>
          )}
        </div>
      </article>

      <CTABanner />
    </>
  );
}
