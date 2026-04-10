import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";

const badges = [
  "AI Security",
  "Distributed ML",
  "Edge Intelligence",
  "6G Networks",
  "IoT Systems",
  "Quantum-assisted ML",
];


const news = [
  { date: "Apr 2026", text: "Paper accepted at IEEE TCCN." },
  { date: "Jun 2025", text: "Paper accepted at IEEE TCCN." },
  { date: "Sep 2025", text: "Paper accepted at IEEE ICIP." },
  { date: "Aug 2024", text: "Joined MTSU as Assistant Professor." },
  { date: "Feb 2024", text: "Paper accepted at IEEE TNSM." },
  { date: "Jun 2023", text: "Paper accepted at IEEE TCC." },
  { date: "Jan 2023", text: "Paper accepted at IEEE TCC." },
  { date: "Mar 2023", text: "Paper accepted at IEEE TVT." },
  { date: "Oct 2021", text: "Paper accepted at IEEE TCC." },
  { date: "May 2021", text: "Paper accepted at IEEE TGCN." },
];

const researchAreas = [
  {
    title: "AI-Assisted Cybersecurity",
    description:
      "Intelligent threat detection and automated defense leveraging ML for distributed edge computing environments.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Distributed Machine Learning",
    description:
      "Federated and collaborative learning architectures that enable private, efficient model training across edge nodes.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    title: "Edge Intelligence & IoT",
    description:
      "Optimizing computation offloading, resource allocation, and scheduling for mobile edge computing in heterogeneous IoT environments.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
  },
  {
    title: "Generative AI",
    description:
      "Generative models for network management, synthetic data, and intelligent automation in communication systems.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "AI-Native 6G Networks",
    description:
      "Integrating AI/ML natively into 5G/6G architectures for adaptive slicing, ISAC, and self-optimizing radio access.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    title: "Quantum-Assisted ML",
    description:
      "Quantum computing paradigms to accelerate ML model training and optimization in next-generation wireless systems.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
];

const homeJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: `${PERSON.name} | ${PERSON.universityShort}`,
    description: PERSON.description,
    inLanguage: "en-US",
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE_URL}/#profilepage`,
    url: SITE_URL,
    name: `${PERSON.name} | Assistant Professor · ${PERSON.universityShort}`,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      givenName: PERSON.givenName,
      familyName: PERSON.familyName,
      jobTitle: PERSON.title,
      description: PERSON.description,
      image: {
        "@type": "ImageObject",
        url: `${SITE_URL}/Profile.jpg`,
        contentUrl: `${SITE_URL}/Profile.jpg`,
      },
      url: SITE_URL,
      email: `mailto:${PERSON.email}`,
      telephone: PERSON.phone,
      worksFor: {
        "@type": "CollegeOrUniversity",
        name: PERSON.university,
        department: PERSON.department,
        url: PERSON.universityUrl,
        address: {
          "@type": "PostalAddress",
          streetAddress: PERSON.address.street,
          addressLocality: PERSON.address.city,
          addressRegion: PERSON.address.state,
          postalCode: PERSON.address.zip,
          addressCountry: PERSON.address.country,
        },
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "New Jersey Institute of Technology",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        educationalLevel: "PhD",
        name: "Ph.D. in Computer Engineering",
        recognizedBy: {
          "@type": "CollegeOrUniversity",
          name: "New Jersey Institute of Technology",
        },
      },
      knowsAbout: PERSON.researchAreas,
      memberOf: {
        "@type": "Organization",
        name: "Institute of Electrical and Electronics Engineers (IEEE)",
        url: "https://www.ieee.org",
      },
      sameAs: [PERSON.googleScholar],
    },
  },
];

export default function Home() {
  return (
    <Layout>
      <SEO
        title="Home"
        description={PERSON.description}
        path="/"
        ogType="profile"
        jsonLd={homeJsonLd}
      />
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-16 items-center md:items-start">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-3">
                Assistant Professor
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 tracking-tight leading-tight mb-3">
                Mohammad Arif Hossain
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base mb-5">
                Department of Engineering Technology · Middle Tennessee State University
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl mb-3">
                Dr. Mohammad Arif Hossain is an Assistant Professor in the
                Department of Engineering Technology at Middle Tennessee State
                University. His research broadly focuses on distributed edge
                intelligence, AI-assisted cybersecurity, Quantum-assisted ML,
                and AI-native next-generation networks. He has published
                extensively in top-tier IEEE journals and serves as a reviewer
                for leading venues in communications and networking. He is a
                Member of IEEE.
              </p>
              <p className="text-slate-900 dark:text-slate-100 font-bold max-w-xl mb-5">
                Actively looking for motivated graduate students.
              </p>

              {/* Education */}
              <div className="flex flex-col gap-2 mb-6 max-w-xl">
                <div className="flex items-start gap-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3">
                  <div className="w-7 h-7 rounded-md bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Ph.D. in Computer Engineering</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">New Jersey Institute of Technology, USA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full px-3 py-1 shadow-sm"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Publications
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact
                </Link>
                <a
                  href="https://scholar.google.com/citations?user=ZXQAEfQAAAAJ&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm font-semibold px-5 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                  </svg>
                  Google Scholar
                </a>
              </div>
            </div>

            {/* Photo + News */}
            <div className="shrink-0 flex flex-col items-center gap-5 w-full sm:w-auto md:w-64">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full ring-4 ring-blue-100 dark:ring-blue-900 ring-offset-4 ring-offset-white dark:ring-offset-slate-950 overflow-hidden shadow-lg">
                <Image
                  src="/Profile.jpg"
                  alt="Mohammad Arif Hossain"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>

              {/* News */}
              <div className="w-full mt-4 md:mt-10">
                <p className="text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest mb-2">News</p>
                <ul className="space-y-1.5">
                  {news.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <span className="text-blue-500 mt-1 shrink-0">•</span>
                      <span><span className="font-semibold text-slate-700 dark:text-slate-300">{item.date} —</span> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">Focus Areas</p>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-50">Research</h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
              View Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 hover:shadow-md hover:border-slate-300 dark:hover:border-slate-600 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
                  {area.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-[15px] mb-1.5">{area.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
