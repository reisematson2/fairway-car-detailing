import { useEffect } from 'react';
import { useLocation } from 'wouter';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
}

const defaultSEO = {
  title: 'Fairway Car Detailing | Mobile Auto Detailing in Cleveland, OH',
  description: 'Premium mobile car detailing services in Cleveland, Ohio. Professional ceramic coatings, paint protection film, and expert detailing at your location.',
  image: '/og-image.jpg', // Default social sharing image
  type: 'website'
};

const SEO = ({ 
  title = defaultSEO.title,
  description = defaultSEO.description,
  image = defaultSEO.image,
  type = defaultSEO.type 
}: SEOProps) => {
  const [location] = useLocation();
  const baseUrl = 'https://fairwaydetailing.com'; // Replace with actual domain
  const canonicalUrl = `${baseUrl}${location}`;
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // Update or create canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // Open Graph Meta Tags
    const ogTags = {
      'og:title': title,
      'og:description': description,
      'og:image': fullImageUrl,
      'og:url': canonicalUrl,
      'og:type': type
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Twitter Card Meta Tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': title,
      'twitter:description': description,
      'twitter:image': fullImageUrl
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    // Additional SEO meta tags
    const additionalTags = [
      { name: 'robots', content: 'index, follow' },
      { name: 'googlebot', content: 'index, follow' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#5CA424' }
    ];

    additionalTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, [title, description, canonicalUrl, fullImageUrl, type]);

  return null;
};

export default SEO; 