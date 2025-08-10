import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
}

export const Seo = ({ title, description, canonical }: SeoProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
    {canonical && <link rel="canonical" href={canonical} />}
    <meta property="og:title" content={title} />
    {description && (
      <meta property="og:description" content={description} />
    )}
  </Helmet>
);
