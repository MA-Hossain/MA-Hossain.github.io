import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { SITE_URL } from "../lib/seo";

// The students page became /members. This stub keeps older links, bookmarks
// and search results working instead of dropping them on a 404.
const TARGET = "/members";

export default function StudentsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace(TARGET);
  }, [router]);

  return (
    <>
      <Head>
        <title>Members</title>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={`${SITE_URL}${TARGET}`} />
        <meta httpEquiv="refresh" content={`0;url=${TARGET}`} />
      </Head>
      <main className="min-h-screen flex items-center justify-center bg-stone-50 dark:bg-stone-950 px-6">
        <p className="text-sm text-stone-500 dark:text-stone-400">
          This page moved to{" "}
          <a href={TARGET} className="text-teal-700 dark:text-teal-400 hover:underline">
            Members
          </a>
          .
        </p>
      </main>
    </>
  );
}
