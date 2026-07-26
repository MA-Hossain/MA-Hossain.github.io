import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";
import { currentStudents } from "../lib/data";

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

const studentsDescription = `Graduate research group of ${PERSON.name} at ${PERSON.university}. We are looking for motivated M.S. students in quantum-assisted ML and Autonomous Systems.`;

const studentsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/students#page`,
  url: `${SITE_URL}/students`,
  name: `Students and Research Group | ${PERSON.name}`,
  description: studentsDescription,
  about: {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: PERSON.name,
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Students", item: `${SITE_URL}/students` },
    ],
  },
};

export default function Students() {
  return (
    <Layout>
      <SEO
        title="Students"
        description={studentsDescription}
        path="/students"
        jsonLd={studentsJsonLd}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        <div className="mb-12">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">Research Group</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-50">Students</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm">
            Current graduate students and prospective openings in the{" "}
            <Link href="/lab" className="text-teal-700 dark:text-teal-400 hover:underline">{PERSON.labShortName}</Link>.
          </p>
        </div>

        {/* Current Students */}
        <section className="mb-12">
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-4">Current students</h2>
          <ul className="space-y-2">
            {currentStudents.map((s) => (
              <li key={s.name} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="text-stone-400 mt-0.5">•</span>
                <span>
                  <span className="font-medium">{s.name}</span>
                  <span className="text-stone-500 dark:text-stone-400">, {s.program} (since {s.since})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Prospective Students */}
        <section className="mb-12">
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">Prospective students</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
            I am actively seeking motivated Ph.D. and M.S. students interested in edge intelligence, AI security, and next-generation networks. Ideal candidates have:
          </p>
          <ul className="space-y-1.5">
            {requirements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="text-stone-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="font-semibold text-stone-800 dark:text-stone-200 mb-2">How to apply</h2>
          <p className="text-sm text-stone-600 dark:text-stone-400 mb-3">
            Send an email to Dr. Hossain with the following:
          </p>
          <ul className="space-y-1.5 mb-5">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-stone-700 dark:text-stone-300">
                <span className="text-stone-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:mohammad.hossain@mtsu.edu?subject=Graduate Admission Inquiry"
            className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:underline"
          >
            mohammad.hossain@mtsu.edu &#8594;
          </a>
        </section>
      </div>
    </Layout>
  );
}
