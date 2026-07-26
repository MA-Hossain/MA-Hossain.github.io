import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import SEO from "../../components/SEO";
import { SITE_URL, PERSON } from "../../lib/seo";

type Project = {
  title: string;
  slug: string;
  description: string;
  tags: string[];
};

type Props = { projects: Project[] };

export const getStaticProps: GetStaticProps<Props> = async () => {
  const filePath = path.join(process.cwd(), "content", "projects.md");
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(raw);
  return { props: { projects: data.projects as Project[] } };
};


export default function Projects({ projects }: Props) {
  const description = `Active research projects in the lab of ${PERSON.name} at ${PERSON.university}, covering 6G networks, edge intelligence, agentic AI for UAVs, AI security, and quantum-assisted machine learning.`;

  const projectsJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/projects#page`,
    url: `${SITE_URL}/projects`,
    name: `Research Projects | ${PERSON.name}`,
    description,
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: PERSON.name,
    },
    hasPart: projects.map((p) => ({
      "@type": "ResearchProject",
      name: p.title,
      description: p.description,
      url: `${SITE_URL}/projects/${p.slug}`,
      keywords: p.tags.join(", "),
      member: { "@type": "Person", name: PERSON.name },
    })),
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
      ],
    },
  };

  return (
    <Layout>
      <SEO
        title="Projects"
        description={description}
        path="/projects"
        jsonLd={projectsJsonLd}
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-18">
        <div className="mb-12">
          <p className="text-xs font-semibold text-teal-700 dark:text-teal-400 uppercase tracking-widest mb-1.5">Lab Research</p>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 dark:text-stone-50">Projects</h1>
          <p className="text-stone-500 dark:text-stone-400 mt-2 text-sm">Research initiatives in the lab.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl p-6 transition-all hover:shadow-sm hover:border-stone-300 dark:hover:border-stone-700 flex flex-col"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-[15px] text-stone-900 dark:text-stone-100 leading-snug">
                  {project.title}
                </h3>
                <svg
                  className="w-4 h-4 shrink-0 mt-0.5 text-stone-400 dark:text-stone-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400">
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
