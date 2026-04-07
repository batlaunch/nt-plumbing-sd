import { Star } from "lucide-react";
import CTABanner from "@/components/CTABanner";

const reviews = [
  {
    name: "Robert P.",
    location: "El Cajon, CA",
    date: "May 20, 2024",
    text: "My plumbing was backing up into the shower. Couldn't flush the toilets, take a shower or run any water. Had some other plumbers come out but they could not find the clog. Nick Taylor Plumbing was recommended to me by Modern Septic. Nick came out and resolved my problem within about a half an hour. Everything's working perfectly now. He really knows what he's doing and has reasonable prices. I highly recommend NTP Plumbing. Thanks Nick for making my house a home again.",
  },
  {
    name: "David G.",
    location: "El Cajon, CA",
    date: "Jan 12, 2019",
    text: "I called Stride but Chris said he couldn't get to me till that evening and suggested that I call Nick Taylor. Nick came out in under an hour (faster than they told me on the phone). Our toilet was backing up into the bathtub drain and my toilet auger was not adequate for the job. I showed Nick where the closest clean-out access was located and he ran a 40 foot snake down to unclog the problem, and make sure it was clear all the way to my septic tank. He had me run lots of water in the tub and flush a few different toilets a few times to make certain it was clear all the way and would not give me a problem later. Fast, courteous, knowledgeable, everything I could ask for. I used to be a contractor, so I am VERY picky when it comes to using service people in my home, since far too many are either rip-offs, or do not have adequate knowledge for the job they are doing. I happily would use them again.",
  },
  {
    name: "Rafael M.",
    location: "Escondido, CA",
    date: "Apr 22, 2020",
    text: "Same day service great company I had a few quotes after deciding that we would go with this company even though they were not the cheapest something told me these guys were trust worthy. It was totally worth it!!! Great customer service. On top of that they knew exactly what they were doing the job was a big one but it was the most smooth project I have ever experienced thank you guys very much for your service.",
  },
  {
    name: "Jim F.",
    location: "Lakeside, CA",
    date: "Aug 4, 2018",
    text: "Nick took the time to stop by my place and unclog my kitchen sink. He also installed a brand new garbage disposal. The price was lower than originally quoted as well. Nick had excellent communication throughout entire process! Also was earlier than originally I had planned. Overall I am a happy customer. Don't hesitate to use the business excellent job.",
  },
  {
    name: "James S.",
    location: "La Mesa, CA",
    date: "Oct 5, 2018",
    text: "I had a clogged kitchen drain, so I reached out to Nick via Yelp. He responded quickly and was able to come out the same day (which was better than most other places I contacted). The service was great, the drain was cleared in 30 minutes and the price was as quoted. Overall a great experience. I would definitely recommend his services.",
  },
  {
    name: "Javier C.",
    location: "Valencia Park, San Diego, CA",
    date: "Jun 15, 2022",
    text: "NTP was responsive and very helpful. Help solve our backed up drain issues. But also helped us see what we can do to avoid it in the future.",
  },
  {
    name: "Emily L.",
    location: "Spring Valley, CA",
    date: "Apr 24, 2019",
    text: "My water heater broke and I had no hot water. I was very grateful to Nick for coming out so quickly and fixing it for me! Fast and affordable. Great customer service. Thank you Nick!",
  },
  {
    name: "Caren C.",
    location: "El Cajon, CA",
    date: "May 17, 2019",
    text: "I called Nick and he was able to come out the same day. He fixed both my toilet and faucet. I will call Nick Taylor for all my plumbing needs. Thanks Nick!",
  },
  {
    name: "Evan C.",
    location: "San Diego, CA",
    date: "Aug 23, 2018",
    text: "Nick's customer service is unparalleled, and his work is always exceptional. I recommend him regularly.",
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
              5.0-star rating based on 9 Yelp reviews
            </p>
            <a
              href="https://www.yelp.com/biz/ntp-el-cajon-4?osq=NTP"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm text-primary hover:underline"
            >
              View all reviews on Yelp →
            </a>
          </div>

          <div className="space-y-6">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl border bg-card p-6">
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      {r.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">{r.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">{r.date}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">"{r.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
