export interface PPFPackageType {
  title: string;
  description: string;
  price: string;
  filmType: string;
  filmDetails: string;
  features: string[];
  isHighlighted?: boolean;
}

export const ppfPackages: PPFPackageType[] = [
  {
    title: "Partial Front Protection",
    description: "Entry-level protection for high-impact areas.",
    price: "From $799",
    filmType: "XPEL Ultimate Plus",
    filmDetails: "10-year warranty, self-healing technology",
    features: ["Partial Hood", "Partial Fenders", "Full Front Bumper", "Side Mirrors"]
  },
  {
    title: "Full Front Protection",
    description: "Comprehensive coverage for the entire front end.",
    price: "From $1,599",
    filmType: "XPEL Ultimate Plus or Stealth",
    filmDetails: "10-year warranty, self-healing technology",
    features: ["Full Hood", "Full Fenders", "Full Front Bumper", "Headlights", "Side Mirrors"]
  },
  {
    title: "Track Package",
    description: "Ideal for spirited drivers and track enthusiasts.",
    price: "From $2,299",
    filmType: "XPEL Ultimate Plus or Stealth",
    filmDetails: "10-year warranty, self-healing technology",
    features: ["Full Front Package", "Rocker Panels", "A-Pillars", "Lower Doors"]
  },
  {
    title: "Full Vehicle Wrap",
    description: "Maximum protection with invisible or satin finish.",
    price: "From $4,999",
    filmType: "XPEL Ultimate Plus / XPEL Stealth",
    filmDetails: "10-year warranty, choice of glossy or satin finish",
    features: ["Complete Vehicle Coverage", "Invisible or Satin Finish", "Custom Options Available"]
  }
];
