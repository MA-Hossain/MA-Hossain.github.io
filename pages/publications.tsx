import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";

type Publication = {
  venue: string;
  title: string;
  authors?: string;
  journal: string;
  year: string;
};

type Props = { publications: Publication[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "content", "publications.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return { props: { publications: data.publications as Publication[] } };
};

function VenueBadge({ venue }: { venue: string }) {
  return (
    <span className="shrink-0 bg-blue-600 dark:bg-blue-500 text-white text-[11px] font-bold px-2 py-0.5 rounded-md tracking-wide">
      {venue}
    </span>
  );
}

export default function Publications({ publications }: Props) {
  const years = [...new Set(publications.map((p) => p.year))].sort(
    (a, b) => Number(b) - Number(a)
  );

  const pubsDescription = `${publications.length} peer-reviewed publications by ${PERSON.name} in top-tier IEEE journals and conferences, covering ${PERSON.researchAreas.slice(0, 4).join(", ")}, and more.`;

  const pubsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/publications#page`,
    url: `${SITE_URL}/publications`,
    name: `Publications — ${PERSON.name}`,
    description: pubsDescription,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
    },
    hasPart: publications.map((pub) => ({
      "@type": "ScholarlyArticle",
      name: pub.title,
      isPartOf: { "@type": "Periodical", name: pub.journal },
      datePublished: pub.year,
      author: {
        "@type": "Person",
        name: PERSON.name,
      },
      publisher: { "@type": "Organization", name: pub.venue },
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Publications", item: `${SITE_URL}/publications` },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title="Publications"
        description={pubsDescription}
        path="/publications"
        jsonLd={pubsJsonLd}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <div>
            <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Research Output</p>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Publications</h1>
          </div>
          <a
            href="https://scholar.google.com/citations?user=ZXQAEfQAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 px-4 py-2.5 rounded-lg transition-colors shadow-sm shrink-0"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
            </svg>
            Google Scholar
          </a>
        </div>

        {/* Timeline */}
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year} className="flex gap-6 md:gap-10">
              {/* Year marker */}
              <div className="hidden sm:flex flex-col items-end gap-2 pt-1 w-12 shrink-0">
                <span className="text-sm font-bold text-slate-900 dark:text-slate-100">{year}</span>
                <div className="w-px flex-1 bg-slate-200 dark:bg-slate-700 mx-auto"></div>
              </div>

              {/* Papers */}
              <div className="flex-1 space-y-3">
                <p className="sm:hidden text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">{year}</p>
                {publications
                  .filter((p) => p.year === year)
                  .map((pub, i) => (
                    <div
                      key={i}
                      className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-4 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all"
                    >
                      <div className="flex flex-wrap items-start gap-2.5">
                        <VenueBadge venue={pub.venue} />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                            {pub.title}
                          </p>
                          {pub.authors && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">{pub.authors}</p>
                          )}
                          <p className="text-sm text-slate-400 dark:text-slate-500 mt-0.5">{pub.journal}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
