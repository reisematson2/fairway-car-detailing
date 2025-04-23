export interface CeramicPackageType {
  title: string;
  duration: string;
  description: string;
  price: string;
  features: string[];
  bestFor: string;
  isPopular?: boolean;
}

export const ceramicPackages: CeramicPackageType[] = [
  {
    title: "Gtechniq EXO",
    duration: "2-Year Protection",
    description: "Hydrophobic coating that enhances gloss and provides excellent water beading.",
    price: "$499",
    bestFor: "Daily drivers looking for enhanced protection and easier maintenance",
    features: [
      "Full preparation & decontamination",
      "Single-stage polish",
      "Gtechniq EXO v5 coating",
      "Wheel faces & glass coated",
      "Entry-level professional protection"
    ]
  },
  {
    title: "Crystal Serum Light + EXO",
    duration: "5-Year Protection",
    description: "Professional dual-layer system for superior protection and durability.",
    price: "$899",
    bestFor: "Enthusiasts who want premium, long-term protection with enhanced gloss",
    features: [
      "Full decontamination & enhancement",
      "Crystal Serum Light base layer",
      "EXO v5 hydrophobic top layer",
      "Wheels & glass coated",
      "Tire & trim treatment"
    ],
    isPopular: true
  },
  {
    title: "Crystal Serum Ultra",
    duration: "7-Year Protection",
    description: "Our flagship ceramic system with industry-leading durability and gloss.",
    price: "$1,399",
    bestFor: "Luxury & performance vehicles deserving the ultimate protection",
    features: [
      "Multi-stage paint correction",
      "Crystal Serum Ultra coating",
      "EXO v5 top layer",
      "Wheels & barrel coating",
      "7-Year Gtechniq Guarantee"
    ]
  }
];

export const ceramicAddons = [
  { title: "Glass Coating", price: "$50" },
  { title: "Wheel Faces", price: "$75" },
  { title: "Wheels-Off Coating (Faces + Barrels)", price: "$149" },
  { title: "Interior Protection (Leather, Fabric, Plastics)", price: "$149–199" },
  { title: "Annual Coating Maintenance Package", price: "$99" }
];
