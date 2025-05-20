// Optimized client images with responsive sizes
import before0677Small from "@assets/images/detailing_process/detailing_process1.png";
import before0677Medium from "@assets/images/detailing_process/detailing_process2.png";
import before0677Large from "@assets/images/detailing_process/detailing_process3.png";
import after0734Small from "@assets/images/detailing_process/detailing_process4.png";
import after0734Medium from "@assets/images/services/ceramic_coating1.jpg";
import after0734Large from "@assets/images/services/ceramic_coating2.jpg";

// Original image paths (high quality but larger file size)
import beforeExteriorOriginal from "@assets/beforeAfter_images/before1.webp";
import afterExteriorOriginal from "@assets/beforeAfter_images/after1.webp";

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
