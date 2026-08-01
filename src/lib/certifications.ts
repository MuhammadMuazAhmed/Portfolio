export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  keywords: string[];
  credentialId?: string;
  credentialUrl?: string;
  isFlagship?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "EC-Council Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    issueDate: "Jul 2025",
    keywords: ["Ethical Hacking", "Penetration Testing", "Vulnerability Assessment", "Nmap", "Wireshark"],
    credentialId: "ECC7106483259",
    isFlagship: true,
  },
  {
    name: "Cybersecurity – ADBI E-Learning",
    issuer: "Asian Development Bank Institute (ADBI)",
    issueDate: "Aug 2025",
    keywords: ["Cybersecurity Governance", "Network Defense", "Threat Analysis"],
    credentialId: "132412-175-482-6354",
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issueDate: "Nov 2023",
    keywords: ["UX Research", "Wireframing", "User-Centered Design"],
    credentialId: "NRCUDEJCAXTG",
  },
  {
    name: "Start the UX Design Process: Empathize, Define, & Ideate",
    issuer: "Google",
    issueDate: "Feb 2024",
    keywords: ["Product Strategy", "Information Architecture", "Prototyping"],
    credentialId: "SFZA4YQM2ANY",
  },
  {
    name: "Improve Communication with Genial.ly",
    issuer: "Coursera Project Network",
    issueDate: "Dec 2024",
    keywords: ["Technical Presentation", "Stakeholder Communication"],
    credentialId: "E0F6SPW6E4AW",
  },
];
