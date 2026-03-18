import { ReactNode } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      <Navbar />
      <div className="flex-1">{children}</div>
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-400 dark:text-slate-500 text-center sm:text-left">
          <span className="shrink-0">© 2026 Mohammad Arif Hossain</span>
          <span className="text-xs sm:text-sm">Department of Engineering Technology · Middle Tennessee State University</span>
        </div>
      </footer>
    </div>
  );
}
