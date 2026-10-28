import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import MemberAvatar from "../components/MemberAvatar";
import { SITE_URL, PERSON } from "../lib/seo";
import { labMembers, memberGroups, membersByRole, students, LabMember } from "../lib/data";

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

function MemberCard({ member }: { member: LabMember }) {
  return (
    <div className="flex flex-col items-center text-center">
      <MemberAvatar name={member.name} photo={member.photo} />
      <p className="mt-5 text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">
        {member.name}
      </p>
      <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 leading-relaxed max-w-[15rem]">
        {member.title}
      </p>
      {member.since && (
        <p className="mt-1.5 text-[11px] font-medium text-teal-700 dark:text-teal-400 tracking-wide">
          Since {member.since}
        </p>
      )}
    </div>
  );
}

export default function Members() {
  const pi = membersByRole("pi")[0];
  const tiers = memberGroups
    .filter((g) => g.role !== "pi")
    .map((g) => ({ ...g, people: membersByRole(g.role) }))
    .filter((g) => g.people.length > 0);

  return (
    <Layout>
      <SEO
        title="Members"
        description={membersDescription}
        path="/members"
        jsonLd={membersJsonLd}
      />

      {/* Header */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-18">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">
            {PERSON.labName}
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-50">
            Members
          </h1>
          <p className="text-stone-500 dark:text-stone-400 mt-3 text-[15px] max-w-2xl leading-relaxed">
            The people behind{" "}
            <Link href="/lab" className="text-teal-700 dark:text-teal-400 hover:underline">
              {PERSON.labExpansion}
            </Link>
            , working across quantum computing, autonomous systems, and
            next-generation networks.
          </p>
        </div>
      </section>

      {/* Principal Investigator */}
      {pi && (
        <section className="border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16">
            <div className="flex flex-col items-center text-center">
              <MemberAvatar name={pi.name} photo={pi.photo} size="lg" accent />
              <p className="mt-6 text-[11px] font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest">
                {pi.title}
              </p>
              <h2 className="mt-2 font-serif text-xl sm:text-2xl font-medium text-stone-900 dark:text-stone-50">
                {pi.name}
              </h2>
              <p className="mt-2 text-sm text-stone-500 dark:text-stone-400 max-w-xl leading-relaxed">
                {PERSON.title}, {PERSON.department}, {PERSON.university}
              </p>
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/publications"
                  className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                >
                  Publications
                </Link>
                <span className="text-stone-300 dark:text-stone-700">·</span>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Student tiers */}
      {tiers.length > 0 && (
        <section className="border-b border-stone-200 dark:border-stone-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-16 space-y-14">
            {tiers.map((tier) => (
              <div key={tier.role}>
                <div className="flex items-center gap-4 mb-10">
                  <h2 className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest shrink-0">
                    {tier.label}
                  </h2>
                  <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
                  <span className="text-[11px] font-medium text-stone-400 dark:text-stone-600 shrink-0">
                    {tier.people.length}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
                  {tier.people.map((m) => (
                    <MemberCard key={m.name} member={m} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Join the lab */}
      <section id="join" className="scroll-mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-18">
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
