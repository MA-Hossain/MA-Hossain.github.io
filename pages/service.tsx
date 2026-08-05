import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";

type Committee = { role: string; venue: string };
type Props = { committees: Committee[]; journals: string[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "content", "service.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return { props: { committees: data.committees as Committee[], journals: data.journals as string[] } };
};

const WEB_OF_SCIENCE_URL = "https://www.webofscience.com/wos/author/record/1469442";

export default function Service({ committees, journals }: Props) {
  const serviceDescription = `Professional service contributions by ${PERSON.name}, including program committee membership, editorial roles, and peer review for leading IEEE, ACM, and Springer Nature venues.`;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/service#page`,
    url: `${SITE_URL}/service`,
    name: `Professional Service | ${PERSON.name}`,
    description: serviceDescription,
    about: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Service", item: `${SITE_URL}/service` },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title="Professional Service"
        description={serviceDescription}
        path="/service"
        jsonLd={serviceJsonLd}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">Academic Service</p>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-50">Professional Service</h1>
            <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm max-w-xl">
              Program committee membership, editorial roles, and peer review contributions to the AI and networking research community.
            </p>
          </div>
          <a
            href={WEB_OF_SCIENCE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-teal-700 dark:bg-teal-600 hover:bg-teal-800 dark:hover:bg-teal-700 px-4 py-2.5 rounded-lg transition-colors shadow-sm shrink-0"
          >
            Web of Science
          </a>
        </div>

        {/* Committees and Editorial Roles */}
        <section className="mb-14">
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-5">Committees and Editorial Roles</h2>
          <div className="space-y-3">
            {committees.map((c, i) => (
              <div
                key={i}
                className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl p-4"
              >
                <p className="text-sm font-medium text-stone-800 dark:text-stone-100">{c.role}</p>
                <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5">{c.venue}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Journal Reviewing */}
        <section>
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">Journal Reviewing</h2>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-5">
          </p>
          <div className="flex flex-wrap gap-2">
            {journals.map((j) => (
              <span
                key={j}
                className="text-xs font-medium px-3 py-1.5 rounded-full border border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300"
              >
                {j}
              </span>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
