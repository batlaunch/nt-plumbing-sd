import { Link, useParams } from "react-router-dom";
import { CalendarDays, Clock, ArrowRight, ImageIcon } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import FaqSection from "@/components/FaqSection";
import JsonLd from "@/components/JsonLd";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import RichText, { Todo } from "@/components/RichText";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { getBlogPost } from "@/data/blog";
import { getServicePage, type ServicePageData } from "@/data/servicePages";
import { getPhoto } from "@/data/photos";
import { BUSINESS } from "@/lib/business";
import { blogPostingSchema, faqSchema } from "@/lib/schema";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  if (!post) {
    return <NotFound />;
  }

  const { meta, body } = post;
  const path = `/blog/${meta.slug}`;
  const photo = meta.featuredImage.photo ? getPhoto(meta.featuredImage.photo) : undefined;
  const relatedServices = meta.relatedServiceSlugs
    .map(getServicePage)
    .filter((s): s is ServicePageData => !!s?.published);

  return (
    <>
      <Seo title={meta.seoTitle} description={meta.seoDescription} path={path} ogType="article" ogImage={photo?.url} />
      <JsonLd
        data={[
          blogPostingSchema({
            title: meta.title,
            description: meta.seoDescription,
            path,
            datePublished: meta.dateISO,
            dateModified: meta.dateModified ?? meta.dateISO,
            image: photo?.url,
          }),
          faqSchema(meta.faqs),
        ]}
      />
      <PageBreadcrumb trail={[{ name: "Blog", path: "/blog" }, { name: meta.title, path }]} className="max-w-3xl" />

      <article className="section-padding">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-primary">{meta.category}</p>
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">{meta.title}</h1>
          <div className="mb-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>By {meta.author}</span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {meta.dateModified && meta.dateModified !== meta.dateISO ? `Updated ${formatDate(meta.dateModified)}` : meta.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden="true" /> {meta.readTime}
            </span>
          </div>

          <figure className="mb-10">
            {photo ? (
              <img
                src={photo.url}
                srcSet={`${photo.url640} 640w, ${photo.url} ${photo.width}w`}
                sizes="(min-width: 768px) 768px, 100vw"
                alt={meta.featuredImage.alt}
                width={photo.width}
                height={photo.height}
                className="max-h-[420px] w-full rounded-xl object-cover"
                {...{ fetchpriority: "high" }}
              />
            ) : (
              <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed bg-muted p-6 text-center">
                <ImageIcon className="h-8 w-8 text-muted-foreground" aria-hidden="true" />
                <Todo>featured image: {meta.featuredImage.alt}</Todo>
              </div>
            )}
          </figure>

          <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h2:mt-10 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-li:my-1">
            <RichText source={body} />
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-12">
              <p className="mb-3 text-xs font-medium uppercase tracking-wide text-muted-foreground">Related services</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="service-card-hover flex items-center justify-between rounded-xl border bg-card p-5"
                  >
                    <span className="flex items-center gap-3">
                      <s.icon className="h-7 w-7 shrink-0 text-primary" aria-hidden="true" />
                      <span className="font-semibold">{s.navTitle}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <FaqSection faqs={meta.faqs} className="section-padding bg-muted" />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-3xl rounded-xl border bg-card p-6 text-center">
          <h2 className="mb-2 text-2xl font-bold">Need a plumber in East County?</h2>
          <p className="mb-4 text-muted-foreground">
            NTP Plumbing is a licensed El Cajon plumber ({BUSINESS.license.short}), available 24/7. Call{" "}
            <a href={BUSINESS.phoneHref} className="font-semibold text-primary">{BUSINESS.phoneDisplay}</a> or{" "}
            <Link to="/contact" className="font-semibold text-primary">contact us</Link>.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[m - 1]} ${d}, ${y}`;
}
