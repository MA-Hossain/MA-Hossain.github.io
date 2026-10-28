import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TeamRoster from "../components/TeamRoster";
import { SITE_URL, PERSON } from "../lib/seo";
import { researchAreas, labMembers } from "../lib/data";

type Props = { publicationCount: number };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "content", "publications.md");
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return { props: { publicationCount: (data.publications ?? []).length } };
};

const labDescription = `${PERSON.labName} is the research group led by ${PERSON.name} at ${PERSON.university}, working on hybrid quantum-classical computing, quantum networking for space-air-ground integrated networks, and self-evolving, trustworthy unmanned aerial systems.`;

const labJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  "@id": `${SITE_URL}/lab#organization`,
  name: PERSON.labName,
  alternateName: PERSON.labShortName,
  url: `${SITE_URL}/lab`,
  description: labDescription,
  parentOrganization: {
    "@type": "CollegeOrUniversity",
    name: PERSON.university,
  },
  founder: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
  },
  knowsAbout: researchAreas.map((a) => a.title),
  member: labMembers.map((m) => ({
    "@type": "Person",
    name: m.name,
    description: m.title,
  })),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Lab", item: `${SITE_URL}/lab` },
    ],
  },
};

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-50 tabular-nums">
        {value}
      </p>
      <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 uppercase tracking-widest">
        {label}
      </p>
    </div>
  );
}

export default function Lab({ publicationCount }: Props) {
  return (
    <Layout>
      <SEO
        title="Lab"
        description={labDescription}
        path="/lab"
        jsonLd={labJsonLd}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-stone-200 dark:border-stone-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_75%_at_30%_0%,#ccfbf1_0%,transparent_60%)] dark:bg-[radial-gradient(70%_75%_at_30%_0%,#042f2e_0%,transparent_60%)] opacity-60" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-4">
            Research Group
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-stone-900 dark:text-stone-50 tracking-tight leading-[1.05] mb-4">
            {PERSON.labName}
          </h1>
          <p className="font-serif text-lg sm:text-xl text-teal-700 dark:text-teal-400 mb-6">
            {PERSON.labExpansion}
          </p>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl text-[15px] mb-10">
            We work where quantum information processing meets autonomous
            systems. Our research spans hybrid quantum-classical methods for
            hard network optimization, quantum links across space, air, and
            ground, and aerial platforms that keep learning after deployment
            without giving up on safety or assurance.
          </p>

          <div className="flex flex-wrap gap-x-12 gap-y-6 pb-10 mb-8 border-b border-stone-200 dark:border-stone-800">
            <Stat value={String(labMembers.length)} label="Members" />
            <Stat value={String(researchAreas.length)} label="Focus areas" />
            <Stat value={String(publicationCount)} label="Publications" />
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
            <span>
              Directed by{" "}
              <span className="text-stone-700 dark:text-stone-200 font-medium">
                {PERSON.name}
              </span>
            </span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-700">·</span>
            <span>{PERSON.department}</span>
            <span className="hidden sm:inline text-stone-300 dark:text-stone-700">·</span>
            <span>{PERSON.university}</span>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="mb-10">
            <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">
              Focus Areas
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
              What we work on
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="group bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 sm:p-7 hover:border-teal-300 dark:hover:border-teal-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-5 group-hover:bg-teal-100 dark:group-hover:bg-teal-900 transition-colors">
                  {area.icon}
                </div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-[15px] mb-2.5 leading-snug">
                  {area.title}
                </h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-12">
            <div>
              <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">
                Team
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
                Who we are
              </h2>
            </div>
            <Link
              href="/members"
              className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors shrink-0"
            >
              All members &#8594;
            </Link>
          </div>

          <TeamRoster showLinks={false} />
        </div>
      </section>

      {/* Join the lab CTA */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="relative overflow-hidden bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-7 sm:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_100%_0%,#ccfbf1_0%,transparent_60%)] dark:bg-[radial-gradient(60%_120%_at_100%_0%,#042f2e_0%,transparent_60%)] opacity-70" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-50 mb-2">
                  Join the lab
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 max-w-lg leading-relaxed">
                  We are seeking motivated M.S. students interested in
                  quantum-assisted machine learning and autonomous systems.
                </p>
              </div>
              <Link
                href="/members#join"
                className="shrink-0 inline-flex items-center gap-2 bg-teal-700 dark:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors shadow-sm"
              >
                How to apply
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
