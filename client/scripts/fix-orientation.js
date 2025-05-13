import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the source directory and destination directory for optimized images
const sourceDir = path.join(__dirname, '../src/assets/beforeAfter_images');
const destDir = path.join(__dirname, '../src/assets/optimized_images');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// Function to get image metadata
async function getImageMetadata(filePath) {
  try {
    const metadata = await sharp(filePath).metadata();
    return metadata;
  } catch (error) {
    console.error(`Error getting metadata for ${filePath}:`, error);
    return null;
  }
}

// Process the before image - specifically handle its orientation
async function fixBeforeImage() {
  const inputFile = path.join(sourceDir, 'IMG_0677.jpeg');
  const metadata = await getImageMetadata(inputFile);
  
  if (!metadata) {
    console.error('Failed to get metadata for before image');
    return;
  }
  
  console.log('Before image metadata:', {
    width: metadata.width,
    height: metadata.height,
    orientation: metadata.orientation
  });
  
  // Process the image with custom handling to ensure landscape orientation
  // The input image has orientation=6 (90° rotation) but we want it in landscape
  try {
    // Create different sizes
    const sizes = [
      { suffix: 'small', width: 400 },
      { suffix: 'medium', width: 800 },
      { suffix: 'large', width: 1200 }
    ];
    
    for (const size of sizes) {
      const outputFile = path.join(destDir, `IMG_0677-${size.suffix}.webp`);
      
      // Fix orientation and ensure landscape mode
      await sharp(inputFile)
        .rotate() // Auto-fixes orientation based on EXIF
        .resize({ width: size.width })
        .webp({ quality: 85 })
        .toFile(outputFile);
        
      console.log(`Created ${outputFile}`);
    }
  } catch (error) {
    console.error('Error processing before image:', error);
  }
}

// Process the after image
async function processAfterImage() {
  const inputFile = path.join(sourceDir, 'IMG_0734.jpeg');
  const metadata = await getImageMetadata(inputFile);
  
  if (!metadata) {
    console.error('Failed to get metadata for after image');
    return;
  }
  
  console.log('After image metadata:', {
    width: metadata.width,
    height: metadata.height,
    orientation: metadata.orientation
  });
  
  // The after image is already correctly oriented, just optimize it
  try {
    // Create different sizes
    const sizes = [
      { suffix: 'small', width: 400 },
      { suffix: 'medium', width: 800 },
      { suffix: 'large', width: 1200 }
    ];
    
    for (const size of sizes) {
      const outputFile = path.join(destDir, `IMG_0734-${size.suffix}.webp`);
      
      // Simply optimize and resize
      await sharp(inputFile)
        .rotate() // Auto-rotate based on EXIF
        .resize({ width: size.width })
        .webp({ quality: 85 })
        .toFile(outputFile);
        
      console.log(`Created ${outputFile}`);
    }
  } catch (error) {
    console.error('Error processing after image:', error);
  }
}

// Run main function
async function main() {
  try {
    await fixBeforeImage();
    await processAfterImage();
    console.log('All images processed successfully');
  } catch (error) {
    console.error('Error in main process:', error);
  }
}

main();
