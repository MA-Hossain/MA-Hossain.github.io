import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import TeamRoster from "../components/TeamRoster";
import { SITE_URL, PERSON } from "../lib/seo";
import { labMembers, students } from "../lib/data";

const requirements = [
  "Strong background in machine learning and quantum computing, autonomous systems, or next-generation networking",
  "Experience with Python, PyTorch, TensorFlow, and Qiskit",
  "Interest in quantum ML (distributed QML, Quantum computing in SAGIN, autonomous systems)",
  "Self-motivated with good written and verbal communication skills",
];

const checklist = [
  "Your CV or resume",
  "A brief statement of research interests",
  "Unofficial transcripts",
  "Any relevant publications or projects",
];

const membersDescription = `Members of ${PERSON.labName} (${PERSON.labExpansion}), the research group led by ${PERSON.name} at ${PERSON.university}, and how to join.`;

const membersJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/members#page`,
  url: `${SITE_URL}/members`,
  name: `Members | ${PERSON.name}`,
  description: membersDescription,
  about: {
    "@type": "ResearchOrganization",
    "@id": `${SITE_URL}/lab#organization`,
    name: PERSON.labName,
    member: labMembers.map((m) => ({
      "@type": "Person",
      name: m.name,
      description: m.title,
    })),
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Members", item: `${SITE_URL}/members` },
    ],
  },
};

export default function Members() {
  return (
    <Layout>
      <SEO
        title="Members"
        description={membersDescription}
        path="/members"
        jsonLd={membersJsonLd}
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-stone-200 dark:border-stone-800">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_70%_at_50%_0%,#ccfbf1_0%,transparent_65%)] dark:bg-[radial-gradient(75%_70%_at_50%_0%,#042f2e_0%,transparent_65%)] opacity-60" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20 text-center">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-3">
            {PERSON.labName}
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-medium text-stone-900 dark:text-stone-50 tracking-tight">
            Members
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mt-4 text-[15px] max-w-2xl mx-auto leading-relaxed">
            The team behind{" "}
            <Link href="/lab" className="text-teal-700 dark:text-teal-400 hover:underline">
              {PERSON.labExpansion}
            </Link>
            , working across quantum computing, autonomous systems, and
            next-generation networks.
          </p>
        </div>
      </section>

      {/* Roster */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <TeamRoster />
        </div>
      </section>

      {/* Join the lab */}
      <section id="join" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">
            Openings
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50 mb-3">
            Join the lab
          </h2>
          <p className="text-[15px] text-stone-600 dark:text-stone-300 leading-relaxed mb-10 max-w-2xl">
            We are seeking motivated M.S. students interested in quantum-assisted
            machine learning and autonomous systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-4">
                What we look for
              </h3>
              <ul className="space-y-2.5">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-4">
                What to send
              </h3>
              <ul className="space-y-2.5">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    <span className="mt-[7px] w-1 h-1 rounded-full bg-teal-600 dark:bg-teal-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <a
            href={`mailto:${PERSON.email}?subject=Graduate Admission Inquiry`}
            className="inline-flex items-center gap-2 bg-teal-700 dark:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email Dr. Hossain
          </a>
          <p className="mt-3 text-xs text-stone-400 dark:text-stone-500">
            Currently {students.length} graduate {students.length === 1 ? "member" : "members"} in the group.
          </p>
        </div>
      </section>
    </Layout>
  );
}
