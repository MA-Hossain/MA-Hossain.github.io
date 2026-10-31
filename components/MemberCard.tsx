import MemberAvatar from "./MemberAvatar";
import { LabMember } from "../lib/data";

// Vertical card: portrait above the name, used for everyone below the PI.
export default function MemberCard({ member }: { member: LabMember }) {
  // Interns are here for a single semester, so their term reads on its own
  // instead of as a start date.
  const term =
    member.since &&
    (member.role === "intern" ? member.since : `Since ${member.since}`);

  return (
    <div className="group flex flex-col items-center text-center bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl px-5 py-7 hover:border-teal-300 dark:hover:border-teal-800 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
      <MemberAvatar name={member.name} photo={member.photo} />
      <p className="mt-5 text-sm font-semibold text-stone-900 dark:text-stone-100 leading-snug">
        {member.name}
      </p>
      {member.title && (
        <p className="mt-1.5 text-xs text-stone-500 dark:text-stone-400 leading-relaxed">
          {member.title}
        </p>
      )}
      {term && (
        <p className="mt-3 text-[10px] font-semibold text-teal-700 dark:text-teal-300 bg-teal-50 dark:bg-teal-950 border border-teal-100 dark:border-teal-900 rounded-full px-2.5 py-1 tracking-wide uppercase">
          {term}
        </p>
      )}
    </div>
  );
}
