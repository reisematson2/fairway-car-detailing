export interface LiquidWrapPackageType {
  title: string;
  description: string;
  price: string;
  productType: string;
  productDetails: string;
  features: string[];
  isHighlighted?: boolean;
}

export const liquidWrapPackages: LiquidWrapPackageType[] = [
  {
    title: "Basic Liquid Wrap",
    description: "Single color application with standard finish.",
    price: "From $1,999",
    productType: "DYPL™ Dip Coating",
    productDetails: "3-year durability, removable coating technology",
    features: [
      "Complete exterior coverage",
      "Single color application",
      "Standard matte or gloss finish",
      "Minimal prep work required"
    ]
  },
  {
    title: "Premium Liquid Wrap",
    description: "Enhanced color options with premium finishes.",
    price: "From $2,999",
    productType: "DYPL™ Premium Coating",
    productDetails: "4-year durability, improved chemical resistance",
    features: [
      "Complete exterior coverage",
      "Extended color options",
      "Premium matte, satin, or gloss finish",
      "Enhanced surface preparation",
      "Extra layer for durability"
    ],
    isHighlighted: true
  },
  {
    title: "Custom Liquid Wrap",
    description: "Custom colors, effects, and specialized finishes.",
    price: "From $3,999",
    productType: "DYPL™ Custom Formulation",
    productDetails: "4-year durability, specialized effects possible",
    features: [
      "Complete exterior coverage",
      "Custom color matching",
      "Special effects (metallic, pearl, color-shift)",
      "Multi-tone options available",
      "Premium prep and application"
    ]
  },
  {
    title: "Accents & Trim Package",
    description: "Partial application for accents and trim elements only.",
    price: "From $699",
    productType: "DYPL™ Accent Coating",
    productDetails: "3-year durability, perfect for trim and accents",
    features: [
      "Trim elements only",
      "Grilles, badges, and emblems",
      "Mirrors and door handles",
      "Custom color options",
      "Perfect for brand customization"
    ]
  }
];

export const liquidWrapBenefits = [
  {
    title: "Complete Color Change",
    description: "Transform your vehicle's appearance without permanent paint"
  },
  {
    title: "Paint Protection",
    description: "Adds a protective layer that shields your factory paint"
  },
  {
    title: "Removable",
    description: "Can be removed without damaging the original paint finish"
  },
  {
    title: "Cost-Effective",
    description: "More affordable than a traditional respray"
  },
  {
    title: "Unique Finishes",
    description: "Options that aren't possible with traditional paint"
  },
  {
    title: "UV Resistant",
    description: "Protects against color fading from sun exposure"
  }
];