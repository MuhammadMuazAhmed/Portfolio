export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  image?: string;
  keywords: string[];
  credentialId?: string;
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "Cybersecurity–ADBI-E-Learning",
    issuer: "Asian Development Bank (ADB)",
    issueDate: "Aug 2025",
    keywords: ["Penetration Testing", "Ethical Hacking", "Cybersecurity"],
    credentialId: "132412-175-482-6354",
  },
  {
    name: "EC-Council Certified Ethical Hacker",
    issuer: "EC-Council",
    issueDate: "Jul 2025",
    keywords: ["Penetration Testing", "Ethical Hacking"],
    credentialId: "ECC7106483259",
  },
  {
    name: "Improve Communication with Genial.ly",
    issuer: "Coursera Project Network",
    issueDate: "Dec 2024",
    keywords: ["Communication", "Presentation", "Design"],
    credentialId: "E0F6SPW6E4AW",
  },
  {
    name: "Start the UX Design Process: Empathize, Define, and Ideate",
    issuer: "Google",
    issueDate: "Feb 2024",
    keywords: ["UI/UX Tools", "User Experience (UX)", "Design Process"],
    credentialId: "SFZA4YQM2ANY",
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    issueDate: "Nov 2023",
    keywords: ["User Experience (UX)", "Design", "UX Fundamentals"],
    credentialId: "NRCUDEJCAXTG",
  },
];

// Instructions for updating with your actual certifications:
// 1. Replace the sample data above with your actual certifications
// 2. For each certification, provide:
//    - name: Full certification name
//    - issuer: Organization that issued the certification
//    - issueDate: Year or full date when you received it
//    - image: URL to the certification badge/image (optional)
//    - keywords: 2-3 relevant keywords describing the skills/areas
//    - credentialId: Unique identifier (optional)
//    - credentialUrl: Link to verify the credential (optional)
//
// Example of how to get your actual certifications:
// 1. Go to your LinkedIn profile
// 2. Navigate to the "Licenses & certifications" section
// 3. For each certification, copy the details and update this file
