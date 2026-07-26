import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
      <Navbar />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-stone-200 dark:border-stone-800 py-10 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-stone-400 dark:text-stone-500 text-center sm:text-left">
          <span className="shrink-0">© 2026 Mohammad Arif Hossain</span>
          <span className="text-xs sm:text-sm">Department of Engineering Technology, Middle Tennessee State University</span>
        </div>
      </footer>
    </div>
  );
}
