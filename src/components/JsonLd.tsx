import { Helmet } from "react-helmet-async";

/** Emits one <script type="application/ld+json"> per object into <head>. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <Helmet>
      {items.map((d, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(d)}
        </script>
      ))}
    </Helmet>
  );
}
