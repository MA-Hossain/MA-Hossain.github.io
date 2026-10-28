export const researchAreas = [
  {
    title: "Hybrid Quantum-Classical Computing",
    description:
      "Partitioning network optimization across quantum and classical resources, so variational and annealing-based solvers handle the intractable core while classical hardware carries the rest.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" strokeWidth={1.8} />
        <circle cx="17.25" cy="6.75" r="3.75" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeWidth={1.8}
          d="M10.5 17.25h3a3.75 3.75 0 003.75-3.75v-2.25" />
      </svg>
    ),
  },
  {
    title: "Quantum Networking for SAGIN",
    description:
      "Entanglement distribution and quantum key exchange across space, air, and ground layers, including handover and weather resilience for satellite-to-ground links.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="4" r="2" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeWidth={1.8} d="M8.6 4H6.2M17.8 4h-2.4" />
        <path strokeLinecap="round" strokeWidth={1.8} strokeDasharray="1.5 2" d="M12 6.4v4.4" />
        <path strokeLinecap="round" strokeWidth={1.8} d="M8.2 14.4c2.2-1.7 5.4-1.7 7.6 0" />
        <path strokeLinecap="round" strokeWidth={1.8} d="M2.8 20.4c3.1-2.9 15.3-2.9 18.4 0" />
      </svg>
    ),
  },
  {
    title: "Self-evolving Unmanned Aerial Systems",
    description:
      "Aerial platforms that keep adapting after deployment, revising their own policies from operational experience rather than relying on a fixed model trained before launch.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="6.5" cy="6.5" r="2.5" strokeWidth={1.8} />
        <circle cx="17.5" cy="6.5" r="2.5" strokeWidth={1.8} />
        <circle cx="6.5" cy="17.5" r="2.5" strokeWidth={1.8} />
        <circle cx="17.5" cy="17.5" r="2.5" strokeWidth={1.8} />
        <rect x="9.75" y="9.75" width="4.5" height="4.5" rx="1.25" strokeWidth={1.8} />
        <path strokeLinecap="round" strokeWidth={1.8}
          d="M8.3 8.3l1.6 1.6M15.7 8.3l-1.6 1.6M8.3 15.7l1.6-1.6M15.7 15.7l-1.6-1.6" />
      </svg>
    ),
  },
  {
    title: "Security and Trustworthiness of UAS",
    description:
      "Defending autonomous aerial systems against spoofing, hijacking, and adversarial control, and establishing the assurance evidence operators need before granting them authority.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinejoin="round" strokeWidth={1.8}
          d="M12 2.75l7.25 2.9v5.6c0 4.3-3 7.9-7.25 9-4.25-1.1-7.25-4.7-7.25-9v-5.6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
          d="M9.1 11.9l1.95 1.95 3.85-3.95" />
      </svg>
    ),
  },
];

// Lab roster. "role" controls which section a person appears under on the
// members page and the order they appear in; see memberGroups below.
// "photo" is optional: leave it off and a neutral placeholder is shown until
// an image is added to the public folder.
export type MemberRole = "pi" | "phd" | "masters" | "intern";

export type LabMember = {
  name: string;
  role: MemberRole;
  title: string;
  since?: string;
  photo?: string;
};

export const labMembers: LabMember[] = [
  { name: "Dr. Mohammad Arif Hossain", role: "pi", title: "Principal Investigator", photo: "/Profile.jpg" },

  { name: "Sharmin Milu", role: "phd", title: "PhD in Computational Science", since: "Fall 2025" },
  { name: "Tanzimul Fahim", role: "phd", title: "PhD in Computational Science", since: "Fall 2026" },
  { name: "Matthew Radice", role: "phd", title: "PhD in Computational Science", since: "Fall 2026" },

  { name: "Yeahia Sarker", role: "masters", title: "MSc in Engineering Technology", since: "Spring 2026" },
  { name: "Most. Humaira Rime", role: "masters", title: "MSc in Engineering Technology", since: "Fall 2026" },
  { name: "Md Shahariar Islam Shanto", role: "masters", title: "MSc in Engineering Technology", since: "Fall 2026" },

  { name: "Jean Drugmand", role: "intern", title: "BSc in Aerospace (UAS Technology)", since: "Summer 2026" },
];

// Sections render in this order. A section with no members is skipped, so an
// empty tier never leaves a bare heading on the page.
export const memberGroups: { role: MemberRole; label: string }[] = [
  { role: "pi", label: "Principal Investigator" },
  { role: "phd", label: "PhD Students" },
  { role: "masters", label: "Master's Students" },
  { role: "intern", label: "Interns" },
];

export const membersByRole = (role: MemberRole) =>
  labMembers.filter((m) => m.role === role);

export const students = labMembers.filter((m) => m.role !== "pi");

const honorifics = ["dr.", "dr", "md", "md.", "most.", "most", "mr.", "mrs.", "ms."];

export function initials(name: string): string {
  const parts = name
    .split(" ")
    .filter((p) => p && !honorifics.includes(p.toLowerCase()));
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}
