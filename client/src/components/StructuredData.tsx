import { useEffect } from 'react';

interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage';
  data: Record<string, any>;
}

/**
 * Component to inject JSON-LD structured data into page head
 */
const StructuredData = ({ type, data }: StructuredDataProps) => {
  const fullData = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  useEffect(() => {
    // Create the script element
    const script = document.createElement('script');
    script.setAttribute('type', 'application/ld+json');
    script.textContent = JSON.stringify(fullData);
    
    // Add ID to prevent duplicates
    script.id = `structured-data-${type.toLowerCase()}`;
    
    // Remove any existing script with same ID
    const existingScript = document.getElementById(script.id);
    if (existingScript) {
      existingScript.remove();
    }
    
    // Append to document head
    document.head.appendChild(script);

    // Cleanup on unmount
    return () => {
      const scriptToRemove = document.getElementById(script.id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, fullData]);

  // This component doesn't render anything visible
  return null;
};

/**
 * Business structured data component with default Fairway Detailing data
 */
export const BusinessStructuredData = () => {
  const businessData = {
    name: "Fairway Car Detailing",
    description: "Premium mobile car detailing services in Cleveland, Ohio. Specializing in ceramic coatings, paint protection film, and professional detailing.",
    url: "https://fairwaydetailing.com",
    logo: "https://fairwaydetailing.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Detail Ave",
      addressLocality: "Cleveland",
      addressRegion: "OH",
      postalCode: "44115",
      addressCountry: "US"
    },
    telephone: "(555) 123-4567",
    email: "info@fairwaydetailing.com",
    sameAs: [
      "https://facebook.com/fairwaydetailing",
      "https://instagram.com/fairwaydetailing"
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: "41.4993",
      longitude: "-81.6944"
    },
    priceRange: "$$",
    openingHours: "Mo,Tu,We,Th,Fr 09:00-19:00 Sa 10:00-17:00",
    paymentAccepted: "Cash, Credit Card",
    currenciesAccepted: "USD"
  };

  return <StructuredData type="LocalBusiness" data={businessData} />;
};

export default StructuredData;
