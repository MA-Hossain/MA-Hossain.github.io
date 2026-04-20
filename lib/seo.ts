// Update SITE_URL to match your deployed domain (GitHub Pages or custom domain)
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://arifhossain.github.io";

export const PERSON = {
  name: "Mohammad Arif Hossain",
  givenName: "Mohammad Arif",
  familyName: "Hossain",
  title: "Assistant Professor",
  department: "Department of Engineering Technology",
  university: "Middle Tennessee State University",
  universityShort: "MTSU",
  universityUrl: "https://www.mtsu.edu/engineering-technology/",
  email: "mohammad.hossain@mtsu.edu",
  phone: "+1-615-898-5779",
  address: {
    building: "Applied Engineering Building",
    street: "1301 E. Main Street",
    city: "Murfreesboro",
    state: "TN",
    zip: "37132",
    country: "US",
  },
  googleScholar:
    "https://scholar.google.com/citations?user=ZXQAEfQAAAAJ&hl=en",
  researchAreas: [
    "Agentic LLM Security",
    "Distributed Machine Learning",
    "Federated Learning",
    "Edge Intelligence",
    "IoT Systems",
    "6G Networks",
    "Quantum-Assisted Machine Learning",
    "Mobile Edge Computing",
    "Generative AI for Networks",
  ],
  description:
    "Dr. Mohammad Arif Hossain is an Assistant Professor in the Department of Engineering Technology at Middle Tennessee State University (MTSU). His research focuses on distributed edge intelligence, Agentic LLM Security, federated learning, quantum-assisted ML, and AI-native next-generation (5G/6G) networks. He has published extensively in top-tier IEEE journals and is a Member of IEEE.",
};

export const DEFAULT_OG_IMAGE = `${SITE_URL}/Profile.jpg`;
