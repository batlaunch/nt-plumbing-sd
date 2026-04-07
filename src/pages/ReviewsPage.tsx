import { Star } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const testimonials = [
  {
    summary: "Customers praise NTP for fast response times, even for emergency calls. Multiple reviewers mention same-day service and quick turnaround on urgent plumbing issues.",
    label: "Fast & Responsive",
  },
  {
    summary: "Reviewers consistently highlight the professional and courteous service from Nick and his team. They appreciate clear communication about work needed and fair pricing.",
    label: "Professional Service",
  },
  {
    summary: "Several customers mention NTP's expertise in drain cleaning and hydro jetting, noting thorough work that resolved longstanding drainage problems.",
    label: "Expert Drain Solutions",
  },
  {
    summary: "Customers report that NTP goes above and beyond, including cleaning up thoroughly after work is completed and following up to ensure satisfaction.",
    label: "Above & Beyond",
  },
  {
    summary: "Multiple reviewers recommend NTP to friends and family, citing the combination of quality work, honest pricing, and reliable service as reasons to trust this plumber.",
    label: "Highly Recommended",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <h1 className="mb-2 text-4xl font-bold">Customer Reviews</h1>
            <p className="text-muted-foreground">
              5.0-star rating based on 9 Yelp reviews — summarized testimonials below
            </p>
            <a
              href="https://www.yelp.com/biz/ntp-el-cajon-4?osq=NTP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              View original reviews on Yelp →
            </a>
          </div>

          <div className="space-y-6">
            {testimonials.map((t) => (
              <div key={t.label} className="rounded-xl border bg-card p-6">
                <div className="mb-3 flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-primary">{t.label}</span>
                </div>
                <p className="text-muted-foreground italic">"{t.summary}"</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Note: These are summarized impressions from Yelp reviews, not direct quotes.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
