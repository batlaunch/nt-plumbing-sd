import { Inline } from "@/components/RichText";
import type { Faq } from "@/lib/schema";

/**
 * Visible FAQ list. Pair with faqSchema() in the page's JSON-LD; the visible
 * text and the structured data must match.
 */
export default function FaqSection({
  faqs,
  heading = "Frequently Asked Questions",
  className = "section-padding",
}: {
  faqs: Faq[];
  heading?: string;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold">{heading}</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="rounded-lg border bg-card p-5">
              <h3 className="mb-2 font-semibold">{faq.q}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <Inline text={faq.a} />
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
