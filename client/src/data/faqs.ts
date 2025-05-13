// FAQ data for the website

export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQs: FAQItem[] = [
  {
    question: "What areas do you service in Cleveland?",
    answer: "We provide mobile detailing services throughout the greater Cleveland area, including surrounding suburbs like Shaker Heights, Lakewood, Parma, and more. We can travel to your home or office for your convenience."
  },
  {
    question: "Do I need to provide water or electricity?",
    answer: "No, our mobile detailing service is fully self-contained. We bring our own water supply, generators, and all necessary equipment to provide a complete detailing service regardless of your location."
  },
  {
    question: "How long does a typical detailing service take?",
    answer: "Service times vary depending on the package and vehicle condition. An Essential Detail typically takes 1-2 hours, a Premium Refresh takes 2-4 hours, and our Showroom Detail can take 5-8 hours to complete. We'll provide a more specific time estimate when you book."
  },
  {
    question: "What forms of payment do you accept?",
    answer: "We accept all major credit cards, digital payment services (Apple Pay, Google Pay, Venmo), and cash. Payment is due upon completion of the service."
  },
  {
    question: "Do you offer gift certificates?",
    answer: "Yes! Our detailing gift certificates make perfect gifts for car enthusiasts. You can purchase them on our website or by contacting us directly."
  },
  {
    question: "What happens if it rains on the day of my appointment?",
    answer: "If there's inclement weather on your scheduled day, we'll contact you to reschedule. However, if you have a covered area like a garage, we can still perform interior services regardless of weather conditions."
  }
];

export const ceramicFAQs: FAQItem[] = [
  {
    question: "How long does a ceramic coating last?",
    answer: "Our ceramic coatings vary in durability. Our standard coating lasts 1-2 years, our premium coating lasts 3-5 years, and our professional-grade coating can protect your vehicle for 5+ years with proper maintenance."
  },
  {
    question: "What maintenance is required for ceramic coatings?",
    answer: "To maintain a ceramic coating, we recommend regular washing with pH-neutral soap, avoiding automatic car washes with harsh brushes, and applying a ceramic boost spray every 3-4 months. We provide detailed care instructions with every coating service."
  },
  {
    question: "Can ceramic coating be applied to any vehicle?",
    answer: "Yes, ceramic coatings can be applied to any vehicle, regardless of age. However, vehicles with significant paint damage or oxidation may require paint correction services before coating application."
  },
  {
    question: "Does ceramic coating eliminate the need for washing my car?",
    answer: "While ceramic coatings make cleaning easier and provide excellent protection, they don't eliminate the need for regular washing. They do, however, make washing faster and more effective, and help prevent contaminants from bonding to your paint."
  }
];

export const ppfFAQs: FAQItem[] = [
  {
    question: "What is Paint Protection Film (PPF)?",
    answer: "PPF is a clear, thermoplastic urethane film that is applied to the painted surfaces of a vehicle to protect them from stone chips, bug stains, and minor abrasions. It's virtually invisible and helps preserve your vehicle's appearance."
  },
  {
    question: "How long does PPF last?",
    answer: "Our premium PPF products typically last 5-10 years, depending on environmental conditions and maintenance. All our PPF installations come with manufacturer warranties ranging from 5-10 years."
  },
  {
    question: "Can PPF be removed without damaging the paint?",
    answer: "Yes, when properly installed and removed by professionals, PPF can be taken off without damaging your vehicle's paint. This makes it an excellent option for leased vehicles."
  },
  {
    question: "What's the difference between PPF and ceramic coating?",
    answer: "PPF provides physical protection against rock chips, scratches, and physical impacts. Ceramic coating offers chemical protection against UV rays, bird droppings, and makes cleaning easier. For maximum protection, many customers choose both: PPF on high-impact areas and ceramic coating over the entire vehicle."
  }
];
