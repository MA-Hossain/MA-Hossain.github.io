import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";

const currentStudents = [
  { name: "Sharmin Milu", program: "PhD in Computational Science", research: "", since: "2025" },
  { name: "Yeahia Sarker", program: "MSc in Engineering Technology", research: "", since: "2026" },
];

const requirements = [
  "Strong background in machine learning, wireless communications, or networking",
  "Experience with Python, PyTorch, TensorFlow, or MATLAB",
  "Interest in next-generation network research (5G/6G, Edge AI, IoT)",
  "Self-motivated with good written and verbal communication skills",
];

const checklist = [
  "Your CV or resume",
  "A brief statement of research interests",
  "Unofficial transcripts",
  "Any relevant publications or projects",
];

const studentsDescription = `Graduate research group of ${PERSON.name} at ${PERSON.university}. Recruiting motivated Ph.D. and M.S. students in edge intelligence, AI security, federated learning, and 5G/6G networks.`;

const studentsJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/students#page`,
  url: `${SITE_URL}/students`,
  name: `Students & Research Group — ${PERSON.name}`,
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-10">
          <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Research Group</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50">Students</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1.5 text-sm">Current graduate students and prospective openings.</p>
        </div>

        {/* Current Students */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">Current Students</h2>
          <ul className="space-y-2">
            {currentStudents.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>
                  <span className="font-medium">{s.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">, {s.program}{s.research ? ` — ${s.research}` : ""} ({s.since})</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Prospective Students */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Prospective Students</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            I am actively seeking motivated Ph.D. and M.S. students interested in edge intelligence, AI security, and next-generation networks. Ideal candidates have:
          </p>
          <ul className="space-y-1.5">
            {requirements.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* How to Apply */}
        <section>
          <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">How to Apply</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Send an email to Dr. Hossain with the following:
          </p>
          <ul className="space-y-1.5 mb-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                <span className="text-slate-400 mt-0.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="mailto:mohammad.hossain@mtsu.edu?subject=Graduate Admission Inquiry"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            mohammad.hossain@mtsu.edu →
          </a>
        </section>
      </div>
    </Layout>
  );
}
