import React from 'react';
import ResponsiveImage from './ResponsiveImage';
import { clientImages } from '@/assets/clientImages';

interface BeforeAfterImageProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  height?: string; // CSS height value (e.g., 'h-48', 'h-64')
}

const BeforeAfterImage: React.FC<BeforeAfterImageProps> = ({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  height = 'h-64'
}) => {
  // Determine if we should use our optimized client images
  const useClientBeforeImage = beforeSrc.includes('IMG_0677.jpeg');
  const useClientAfterImage = afterSrc.includes('IMG_0734.jpeg');
  
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="relative">
        {useClientBeforeImage ? (
          <picture>
            <source media="(max-width: 640px)" srcSet={clientImages.before.small} />
            <source media="(max-width: 1024px)" srcSet={clientImages.before.medium} />
            <source media="(min-width: 1025px)" srcSet={clientImages.before.large} />
            <img 
              src={clientImages.before.large} 
              alt={beforeAlt} 
              loading="lazy"
              className={`${height} w-full object-cover`}
            />
          </picture>
        ) : (
          <ResponsiveImage 
            src={beforeSrc} 
            alt={beforeAlt}
            className={`${height} w-full`} 
          />
        )}
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm font-semibold py-1 px-3 rounded">
          Before
        </div>
      </div>
      <div className="relative">
        {useClientAfterImage ? (
          <picture>
            <source media="(max-width: 640px)" srcSet={clientImages.after.small} />
            <source media="(max-width: 1024px)" srcSet={clientImages.after.medium} />
            <source media="(min-width: 1025px)" srcSet={clientImages.after.large} />
            <img 
              src={clientImages.after.large} 
              alt={afterAlt} 
              loading="lazy"
              className={`${height} w-full object-cover`}
            />
          </picture>
        ) : (
          <ResponsiveImage 
            src={afterSrc} 
            alt={afterAlt}
            className={`${height} w-full`} 
          />
        )}
        <div className="absolute top-2 left-2 bg-primary bg-opacity-90 text-white text-sm font-semibold py-1 px-3 rounded">
          After
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterImage;
