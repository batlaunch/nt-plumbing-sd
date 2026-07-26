import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const SITE_URL = "https://ntpplumbing.com";
const DEFAULT_OG_IMAGE = "https://s3-media0.fl.yelpcdn.com/bphoto/xotUmIw4oPCgxALWxykLaQ/o.jpg";

export default function Seo({ title, description, path, ogImage = DEFAULT_OG_IMAGE }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
