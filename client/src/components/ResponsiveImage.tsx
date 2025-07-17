import React, { useState, useEffect } from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  objectPosition?: string;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  objectFit = 'cover',
  objectPosition = 'center'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Reset loading state when src changes
  useEffect(() => {
    // Create an image object to preload the image
    const img = new Image();
    img.src = src;
    
    if (img.complete) {
      setIsLoaded(true);
    } else {
      setIsLoaded(false);
      setError(false);
      
      img.onload = () => {
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setError(true);
      };
    }
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img 
        src={src} 
        alt={alt} 
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        className={`transition-opacity duration-300 w-full h-full ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        style={{
          objectFit,
          objectPosition,
          imageRendering: 'auto',
          filter: 'blur(0.3px) contrast(1.08) brightness(1.04)',
        }}
        decoding="async"
      />
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-500">
          <span className="text-sm">Image failed to load</span>
        </div>
      )}
    </div>
  );
};

export default ResponsiveImage;
