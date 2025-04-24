export interface ServiceType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: string;
  time: string;
  services: {
    exterior: {
      title: string;
      items: string[];
    };
    interior: {
      title: string;
      items: string[];
    };
  };
  imageSrc: string;
}

export const services: ServiceType[] = [
  {
    id: "standard",
    title: "Standard Package",
    subtitle: "Essential Clean",
    description: "Ideal for routine maintenance & light cleaning. Estimated time: 1.5 to 2 hours.",
    price: "$130-$195",
    time: "~1.5 to 2 hours",
    services: {
      exterior: {
        title: "Exterior",
        items: [
          "Hand wash & dry",
          "Wheel & tire cleaning",
          "Light bug & tar removal",
          "Tire shine",
          "Exterior windows cleaned",
          "Ceramic spray sealant (2-3 month protection)"
        ]
      },
      interior: {
        title: "Interior",
        items: [
          "Vacuum seats, carpets, and mats",
          "Wipe down of dash, console, and door panels",
          "Interior windows cleaned",
          "Light spot cleaning of seats and carpets"
        ]
      }
    },
    imageSrc: "https://images.unsplash.com/photo-1563299796-17596ed6b017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "deluxe",
    title: "Deluxe Package",
    subtitle: "Premium Refresh",
    description: "Ideal for deep cleaning & added paint protection. Estimated time: 3 to 4 hours.",
    price: "$210-$325",
    time: "~3 to 4 hours",
    services: {
      exterior: {
        title: "Exterior",
        items: [
          "Hand wash & dry",
          "Iron decontamination & clay bar treatment",
          "Wheel & tire cleaning + fender wells",
          "Tire shine & trim dressing",
          "Streak-free window cleaning",
          "CarPro Si02 coating sealant (4-6 month protection)"
        ]
      },
      interior: {
        title: "Interior",
        items: [
          "Deep vacuum & compressed air blowout",
          "Steam cleaning of vents, crevices, & surfaces",
          "Shampoo carpets & mats",
          "Upholstery or leather deep cleaned & conditioned",
          "Stain treatment (light to moderate)"
        ]
      }
    },
    imageSrc: "https://images.unsplash.com/photo-1635766054043-11a7a3ddc512?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "elite",
    title: "Elite Package",
    subtitle: "Showroom Detail",
    description: "Ideal for total restoration or pre-sale detail. Estimated time: 6+ hours.",
    price: "$350-$500",
    time: "6+ hours",
    services: {
      exterior: {
        title: "Exterior",
        items: [
          "Multi-stage hand wash with foam bath",
          "Clay bar + paint decontamination",
          "1 Stage Machine polish for gloss enhancement",
          "6-month ceramic sealant",
          "Full wheel detail including barrels",
          "Trim restoration",
          "Rain repellent treatment on glass"
        ]
      },
      interior: {
        title: "Interior",
        items: [
          "Full steam interior detail",
          "Hot water extraction/shampoo on carpets, mats, & upholstery",
          "Leather cleaning & premium conditioning treatment",
          "Headliner spot cleaning",
          "Odor neutralization treatment",
          "Interior protection applied to all surfaces"
        ]
      }
    },
    imageSrc: "https://images.unsplash.com/photo-1509711075561-55c3f8513c4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export interface AddonType {
  title: string;
  price: string;
  description: string;
}

export const addons: AddonType[] = [
  {
    title: "Deep Scratch Removal",
    price: "$100+",
    description: "Professional correction of deeper paint scratches."
  },
  {
    title: "Rock Chip Restoration",
    price: "$50+",
    description: "Repair and touch-up of stone chips in paint."
  },
  {
    title: "Pet Hair Removal",
    price: "$40",
    description: "Specialized treatment for excessive pet hair."
  },
  {
    title: "Wheel Ceramic Coating",
    price: "$125",
    description: "Long-lasting protection for wheels against brake dust."
  },
  {
    title: "Odor Removal",
    price: "$40",
    description: "Ozone treatment to eliminate stubborn odors."
  }
];
