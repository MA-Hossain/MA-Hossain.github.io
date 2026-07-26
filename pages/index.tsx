import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { SITE_URL, PERSON } from "../lib/seo";
import { researchAreas } from "../lib/data";

const news = [
  { date: "Jul 2026", text: "Serving as Program Committee member at AAAI 2027" },
  { date: "Jun 2026", text: "Paper accepted at ACM SIGCOMM 2026 (QuNet WS)" },
  { date: "May 2026", text: "Paper accepted at ICML 2026 (AI4GOOD WS)" },
  { date: "Apr 2026", text: "Paper accepted at IEEE TCCN" },  
  { date: "Sep 2025", text: "Paper accepted at IEEE ICIP 2025" },
  { date: "Jun 2025", text: "Paper accepted at IEEE TCCN" },
  { date: "Aug 2024", text: "Joined MTSU as Assistant Professor" },
  { date: "Feb 2024", text: "Paper accepted at IEEE TNSM" },
  { date: "Jun 2023", text: "Paper accepted at IEEE TCC" },
  { date: "Mar 2023", text: "Paper accepted at IEEE TVT" },
  { date: "Jan 2023", text: "Paper accepted at IEEE TCC" },
  { date: "Oct 2021", text: "Paper accepted at IEEE TCC" },
  { date: "May 2021", text: "Paper accepted at IEEE TGCN" },
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
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 md:py-24">
          <div className="flex flex-col-reverse md:flex-row gap-10 md:gap-16 items-center md:items-start">
            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-4">
                Assistant Professor
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-stone-900 dark:text-stone-50 tracking-tight leading-tight mb-4">
                Mohammad Arif Hossain
              </h1>
              <p className="text-stone-500 dark:text-stone-400 text-base mb-6">
                Department of Engineering Technology · Middle Tennessee State University
              </p>
              <p className="text-stone-600 dark:text-stone-300 leading-relaxed max-w-xl mb-6 text-[15px]">
                Dr. Mohammad Arif Hossain is an Assistant Professor in the
                Department of Engineering Technology at Middle Tennessee State
                University, where he directs the {PERSON.labName}. His research
                focuses on distributed edge intelligence, agentic LLM security,
                quantum-assisted machine learning, and AI-native next-generation
                networks. He has published extensively in top-tier IEEE journals
                and serves as a reviewer for leading venues in communications and
                networking. He is a member of IEEE.
              </p>

              {/* Education */}
              <div className="flex flex-col gap-2 mb-8 max-w-xl">
                <div className="flex items-start gap-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl px-4 py-3">
                  <div className="w-7 h-7 rounded-md bg-teal-50 dark:bg-teal-950 text-teal-700 dark:text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-stone-800 dark:text-stone-100">Ph.D. in Computer Engineering</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">New Jersey Institute of Technology, USA</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start w-full">
                <Link
                  href="/lab"
                  className="inline-flex items-center gap-2 bg-teal-700 dark:bg-teal-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-teal-800 dark:hover:bg-teal-700 transition-colors shadow-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2M5 21H3m9-13h1m-1 4h1m-5-4h1m-1 4h1" />
                  </svg>
                  Visit the Lab
                </Link>
                <Link
                  href="/publications"
                  className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 text-sm font-semibold px-5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Publications
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-200 text-sm font-semibold px-5 py-2.5 rounded-lg border border-stone-200 dark:border-stone-800 hover:border-stone-300 dark:hover:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors shadow-sm"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0 w-40 h-40 md:w-52 md:h-52 rounded-full ring-4 ring-teal-100 dark:ring-teal-900 ring-offset-4 ring-offset-stone-50 dark:ring-offset-stone-950 overflow-hidden shadow-sm">
              <Image
                src="/Profile.jpg"
                alt="Mohammad Arif Hossain"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
            <div>
              <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">Focus Areas</p>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">Research</h2>
            </div>
            <Link href="/projects" className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors">
              View projects &#8594;
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {researchAreas.map((area) => (
              <div
                key={area.title}
                className="bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 p-6 hover:shadow-sm hover:border-stone-300 dark:hover:border-stone-700 transition-all"
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

      {/* Recent News */}
      <section>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 md:py-20">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">Recent Activity</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50 mb-8">News</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {news.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-stone-600 dark:text-stone-400 py-2 border-b border-stone-100 dark:border-stone-900">
                <span className="font-semibold text-stone-800 dark:text-stone-200 shrink-0 w-16">{item.date}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
}
