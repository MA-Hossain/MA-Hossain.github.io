import Link from "next/link";
import MemberAvatar from "./MemberAvatar";
import MemberCard from "./MemberCard";
import VacantCard from "./VacantCard";
import { memberGroups, membersByRole } from "../lib/data";
import { PERSON } from "../lib/seo";

// Shared roster: the PI featured on top, then each tier below as a grid.
// Both the lab page and the members page render this so they stay in step.
export default function TeamRoster({ showLinks = true }: { showLinks?: boolean }) {
  const pi = membersByRole("pi")[0];
  const tiers = memberGroups
    .filter((g) => g.role !== "pi")
    .map((g) => ({ ...g, people: membersByRole(g.role) }))
    .filter((g) => g.people.length > 0);

  return (
    <div>
      {pi && (
        <div className="flex flex-col items-center text-center pb-14 mb-14 border-b border-stone-200 dark:border-stone-800">
          <MemberAvatar name={pi.name} photo={pi.photo} size="lg" accent />
          <span className="mt-6 inline-block text-[10px] font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 border border-teal-100 dark:border-teal-900 rounded-full px-3 py-1 uppercase tracking-widest">
            {pi.title}
          </span>
          <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-medium text-stone-900 dark:text-stone-50">
            {pi.name}
          </h3>
          <p className="mt-2.5 text-sm text-stone-500 dark:text-stone-400 max-w-md leading-relaxed">
            {PERSON.title}, {PERSON.department}
            <br className="hidden sm:block" /> {PERSON.university}
          </p>
          {showLinks && (
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/publications"
                className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
              >
                Publications
              </Link>
              <span className="text-stone-300 dark:text-stone-700">·</span>
              <Link
                href="/contact"
                className="text-sm font-medium text-teal-700 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 transition-colors"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="space-y-14">
        {tiers.map((tier) => (
          <div key={tier.role}>
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-[11px] font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-widest shrink-0">
                {tier.label}
              </h3>
              <div className="h-px flex-1 bg-stone-200 dark:bg-stone-800" />
              <span className="text-[11px] font-medium text-stone-400 dark:text-stone-600 shrink-0 tabular-nums">
                {String(tier.people.length).padStart(2, "0")}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tier.people.map((m) => (
                <MemberCard key={m.name} member={m} />
              ))}
              {Array.from({ length: tier.openings ?? 0 }, (_, i) => (
                <VacantCard key={`vacant-${tier.role}-${i}`} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
