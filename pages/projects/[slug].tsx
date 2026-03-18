import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { SITE_URL, PERSON } from "../../lib/seo";

type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  overview: string;
  objectives: string[];
  methods: string[];
};

type Props = { project: Project; accentIndex: number };

const contentPath = () => path.join(process.cwd(), "content", "projects.md");

function readProjects(): Project[] {
  const raw = fs.readFileSync(contentPath(), "utf-8");
  const { data } = matter(raw);
  return data.projects as Project[];
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = readProjects();
  return {
    paths: projects.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const projects = readProjects();
  const index = projects.findIndex((p) => p.slug === params?.slug);
  return { props: { project: projects[index], accentIndex: index } };
};

const accentPalettes = [
  { headerBg: "bg-blue-50 dark:bg-blue-950/40",      headerBorder: "border-blue-200 dark:border-blue-800",      badge: "bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800",      icon: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",      dot: "bg-blue-500",      back: "text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200" },
  { headerBg: "bg-violet-50 dark:bg-violet-950/40",  headerBorder: "border-violet-200 dark:border-violet-800",  badge: "bg-violet-100 dark:bg-violet-900/60 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800",  icon: "bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400",  dot: "bg-violet-500", back: "text-violet-600 dark:text-violet-400 hover:text-violet-800 dark:hover:text-violet-200" },
  { headerBg: "bg-teal-50 dark:bg-teal-950/40",      headerBorder: "border-teal-200 dark:border-teal-800",      badge: "bg-teal-100 dark:bg-teal-900/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800",      icon: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400",      dot: "bg-teal-500",   back: "text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-200" },
  { headerBg: "bg-orange-50 dark:bg-orange-950/40",  headerBorder: "border-orange-200 dark:border-orange-800",  badge: "bg-orange-100 dark:bg-orange-900/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800",  icon: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",  dot: "bg-orange-500", back: "text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200" },
  { headerBg: "bg-rose-50 dark:bg-rose-950/40",      headerBorder: "border-rose-200 dark:border-rose-800",      badge: "bg-rose-100 dark:bg-rose-900/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800",      icon: "bg-rose-100 dark:bg-rose-900 text-rose-600 dark:text-rose-400",      dot: "bg-rose-500",   back: "text-rose-600 dark:text-rose-400 hover:text-rose-800 dark:hover:text-rose-200" },
  { headerBg: "bg-emerald-50 dark:bg-emerald-950/40", headerBorder: "border-emerald-200 dark:border-emerald-800", badge: "bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", icon: "bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-400", dot: "bg-emerald-500", back: "text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-200" },
];

export default function ProjectDetail({ project, accentIndex }: Props) {
  const accent = accentPalettes[accentIndex % accentPalettes.length];
  const projectUrl = `${SITE_URL}/projects/${project.slug}`;

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "@id": `${projectUrl}#project`,
    name: project.title,
    description: project.overview,
    url: projectUrl,
    keywords: project.tags.join(", "),
    member: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
      jobTitle: PERSON.title,
      worksFor: {
        "@type": "CollegeOrUniversity",
        name: PERSON.university,
      },
    },
    funder: {
      "@type": "CollegeOrUniversity",
      name: PERSON.university,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
        { "@type": "ListItem", position: 3, name: project.title, item: projectUrl },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        path={`/projects/${project.slug}`}
        jsonLd={projectJsonLd}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">

        {/* Back link */}
        <Link
          href="/projects"
          className={`inline-flex items-center gap-1.5 text-sm font-medium mb-8 transition-colors ${accent.back}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Projects
        </Link>

        {/* Header card */}
        <div className={`rounded-2xl border p-5 sm:p-8 mb-8 ${accent.headerBg} ${accent.headerBorder}`}>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${accent.badge}`}>
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-50 leading-snug mb-4">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
            {project.overview}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Objectives */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${accent.icon}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Research Objectives</h2>
            </div>
            <ul className="space-y-3">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${accent.dot}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methods */}
          <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
            <div className="flex items-center gap-2.5 mb-5">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${accent.icon}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="font-semibold text-slate-900 dark:text-slate-100">Methods & Techniques</h2>
            </div>
            <ul className="space-y-3">
              {project.methods.map((method, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 mt-2 ${accent.dot}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{method}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 dark:text-slate-100 mb-0.5">Interested in this research?</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">Get in touch to discuss collaboration or graduate opportunities.</p>
          </div>
          <a
            href="mailto:mohammad.hossain@mtsu.edu"
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact Dr. Hossain
          </a>
        </div>
      </div>
    </Layout>
  );
}
