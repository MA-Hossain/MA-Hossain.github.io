import Head from "next/head";
import { SITE_URL, PERSON, DEFAULT_OG_IMAGE } from "../lib/seo";

type Props = {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  ogType?: "website" | "profile" | "article";
  jsonLd?: object | object[];
  noindex?: boolean;
};

export default function SEO({
  title,
  description,
  path = "",
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noindex = false,
}: Props) {
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = path === "" || path === "/"
    ? `${PERSON.name} | Assistant Professor · ${PERSON.universityShort}`
    : `${title} | ${PERSON.name}`;

  const schemas = jsonLd
    ? Array.isArray(jsonLd)
      ? jsonLd
      : [jsonLd]
    : [];

  return (
    <Head>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={`Photo of ${PERSON.name}`} />
      <meta property="og:site_name" content={`${PERSON.name} | ${PERSON.universityShort}`} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Author / academic signals */}
      <meta name="author" content={PERSON.name} />
      <meta
        name="keywords"
        content={PERSON.researchAreas.join(", ")}
      />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Head>
  );
}
