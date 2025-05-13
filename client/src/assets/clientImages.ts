// Optimized client images with responsive sizes
import before0677Small from '@assets/optimized_images/IMG_0677-small.webp';
import before0677Medium from '@assets/optimized_images/IMG_0677-medium.webp';
import before0677Large from '@assets/optimized_images/IMG_0677-large.webp';
import after0734Small from '@assets/optimized_images/IMG_0734-small.webp';
import after0734Medium from '@assets/optimized_images/IMG_0734-medium.webp';
import after0734Large from '@assets/optimized_images/IMG_0734-large.webp';

// Original image paths (high quality but larger file size)
import beforeExteriorOriginal from "@assets/beforeAfter_images/IMG_0677.jpeg";
import afterExteriorOriginal from "@assets/beforeAfter_images/IMG_0734.jpeg";

interface ResponsiveImageSet {
  original: string;
  small: string;
  medium: string;
  large: string;
  alt: string;
  width: number;
  height: number;
}

// Image sets with responsive sizes and metadata
export const clientImages = {
  before: {
    original: beforeExteriorOriginal,
    small: before0677Small,
    medium: before0677Medium,
    large: before0677Large,
    alt: "Client vehicle before detailing",
    width: 5712,
    height: 4284,
  } as ResponsiveImageSet,
  after: {
    original: afterExteriorOriginal,
    small: after0734Small,
    medium: after0734Medium,
    large: after0734Large,
    alt: "Client vehicle after professional detailing",
    width: 4284,
    height: 5712,
  } as ResponsiveImageSet
};

export default clientImages;
