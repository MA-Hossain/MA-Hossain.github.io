import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";

type Collaborator = {
  name: string;
  country: string;
  area: string;
  type: "Academic" | "Industry";
};

type Network = { name: string; role: string };

type Props = { collaborators: Collaborator[]; networks: Network[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "content", "collaborations.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return {
    props: {
      collaborators: data.collaborators as Collaborator[],
      networks: data.networks as Network[],
    },
  };
};

export default function Collaborations({ collaborators, networks }: Props) {
  const academic = collaborators.filter((c) => c.type === "Academic");
  const industry = collaborators.filter((c) => c.type === "Industry");

  const collabDescription = `Research collaborations of ${PERSON.name} with academic institutions and industry partners worldwide in AI, cybersecurity, and next-generation wireless networks.`;

  const collabJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/collaborations#page`,
    url: `${SITE_URL}/collaborations`,
    name: `Collaborations — ${PERSON.name}`,
    description: collabDescription,
    about: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
    },
    mentions: collaborators.map((c) => ({
      "@type": c.type === "Academic" ? "CollegeOrUniversity" : "Organization",
      name: c.name,
      addressCountry: c.country,
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Collaborations", item: `${SITE_URL}/collaborations` },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title="Collaborations"
        description={collabDescription}
        path="/collaborations"
        jsonLd={collabJsonLd}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-10">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Global Network</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Collaborations</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1.5 text-sm">
            Research partnerships with leading institutions and industry partners worldwide.
          </p>
        </div>

        {/* Academic Partners */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Academic Partners</h2>
          <ul className="space-y-2">
            {academic.map((c, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>
                  <span className="font-medium">{c.name}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {c.country}{c.area ? ` · ${c.area}` : ""}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Industry Partners */}
        {industry.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Industry Partners</h2>
            <ul className="space-y-2">
              {industry.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>
                    <span className="font-medium">{c.name}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {c.country}{c.area ? ` · ${c.area}` : ""}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Research Networks */}
        {networks.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Research Networks & Committees</h2>
            <ul className="space-y-2">
              {networks.map((n, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>
                    <span className="font-medium">{n.name}</span>
                    <span className="text-slate-500 dark:text-slate-400"> — {n.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Contact */}
        <section>
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Interested in Collaborating?</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            I welcome research collaborations with academic researchers and industry partners working on AI, cybersecurity, and next-generation networks.
          </p>
          <a
            href="mailto:mohammad.hossain@mtsu.edu"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            mohammad.hossain@mtsu.edu →
          </a>
        </section>
      </div>
    </Layout>
  );
}
