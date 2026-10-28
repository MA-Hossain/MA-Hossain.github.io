import { ReactNode } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import { PERSON } from "../lib/seo";

const footerLinks = [
  { href: "/lab", label: "Lab" },
  { href: "/publications", label: "Publications" },
  { href: "/projects", label: "Projects" },
  { href: "/members", label: "Members" },
  { href: "/service", label: "Service" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950">
      <Navbar />
      <div className="flex-1">{children}</div>

      <footer className="border-t border-stone-200 dark:border-stone-800 mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
            {/* Lab */}
            <div className="sm:col-span-1">
              <p className="font-serif text-lg font-medium text-stone-900 dark:text-stone-100">
                {PERSON.labName}
              </p>
              <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
                {PERSON.labExpansion}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                Explore
              </p>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-600 dark:text-stone-400 hover:text-teal-700 dark:hover:text-teal-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] font-semibold text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-4">
                Contact
              </p>
              <address className="not-italic text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                {PERSON.address.building}
                <br />
                {PERSON.address.street}
                <br />
                {PERSON.address.city}, {PERSON.address.state} {PERSON.address.zip}
              </address>
              <a
                href={`mailto:${PERSON.email}`}
                className="mt-3 inline-block text-sm text-teal-700 dark:text-teal-400 hover:underline break-all"
              >
                {PERSON.email}
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400 dark:text-stone-500 text-center sm:text-left">
            <span>© 2026 {PERSON.name}</span>
            <span>
              {PERSON.department}, {PERSON.university}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
