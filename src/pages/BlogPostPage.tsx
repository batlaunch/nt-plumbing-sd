import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CTABanner from "@/components/CTABanner";
import Seo from "@/components/Seo";
import { getBlogPost } from "@/data/blog";
import { getServicePage } from "@/data/servicePages";

const SITE_URL = "https://ntpplumbing.com";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const { meta, Content } = post;
  const path = `/blog/${meta.slug}`;
  const relatedService = meta.relatedServiceSlug ? getServicePage(meta.relatedServiceSlug) : undefined;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.seoDescription,
    datePublished: meta.dateISO,
    dateModified: meta.dateISO,
    author: { "@type": "Organization", name: meta.author },
    publisher: { "@type": "Organization", name: "NTP Plumbing", url: SITE_URL },
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: meta.title, item: `${SITE_URL}${path}` },
    ],
  };

  return (
    <>
      <Seo title={meta.seoTitle} description={meta.seoDescription} path={path} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbJsonLd)}</script>
      </Helmet>

      <section className="border-b bg-muted/40 px-4 py-3">
        <Breadcrumb className="mx-auto max-w-3xl">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/blog">Blog</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{meta.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </section>

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
