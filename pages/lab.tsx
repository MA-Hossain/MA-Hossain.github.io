import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";
import { researchAreas, currentStudents, initials } from "../lib/data";

const labDescription = `${PERSON.labName} is the research group led by ${PERSON.name} at ${PERSON.university}, working on distributed edge intelligence, agentic LLM security, quantum-assisted machine learning, and AI-native next-generation networks.`;

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
  member: currentStudents.map((s) => ({
    "@type": "Person",
    name: s.name,
    description: s.program,
  })),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Lab", item: `${SITE_URL}/lab` },
    ],
  },
};

export default function Lab() {
  return (
    <Layout>
      <SEO
        title="Lab"
        description={labDescription}
        path="/lab"
        jsonLd={labJsonLd}
      />

      {/* Hero */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-20">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-3">
            Research Group
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-2">
            {PERSON.labName}
          </h1>
          <p className="text-teal-700 dark:text-teal-400 text-sm font-medium mb-4">{PERSON.labExpansion}</p>
          <p className="text-stone-500 dark:text-stone-400 text-base mb-6">
            Directed by Dr. Mohammad Arif Hossain, {PERSON.department}, {PERSON.university}
          </p>
          <p className="text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl text-[15px]">
            The lab brings together graduate students and collaborators working
            on the boundary between intelligent systems and next-generation
            networks. Current work spans agentic AI safety, distributed and
            collaborative learning, mobile edge intelligence, and quantum-assisted
            approaches to hard optimization problems in next-generation networks.
          </p>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <h2 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-50 mb-8">
            What we work on
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6"
              >
                <div className="w-9 h-9 rounded-lg bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                <h3 className="font-semibold text-stone-900 dark:text-stone-100 text-[15px] mb-2">{area.title}</h3>
                <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Members */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <h2 className="font-serif text-2xl font-medium text-stone-900 dark:text-stone-50 mb-8">
            Current members
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 font-semibold text-sm">
                MH
              </div>
              <div>
                <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">Dr. Mohammad Arif Hossain</p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Principal Investigator</p>
              </div>
            </div>
            {currentStudents.map((s) => (
              <div key={s.name} className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 flex items-center justify-center shrink-0 font-semibold text-sm">
                  {initials(s.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">{s.name}</p>
                  <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">{s.program}, since {s.since}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the lab CTA */}
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-14 md:py-16">
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <h2 className="font-semibold text-stone-900 dark:text-stone-100 mb-1.5">Join the lab</h2>
              <p className="text-sm text-stone-500 dark:text-stone-400 max-w-lg">
                We are seeking motivated M.S. students interested in
                Quantum-assisted Machine Learning and Autonomous Systems.
                See the students page for requirements and how to apply.
              </p>
            </div>
            <Link
              href="/students"
              className="shrink-0 inline-flex items-center gap-2 bg-teal-700 dark:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors"
            >
              Prospective students
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
