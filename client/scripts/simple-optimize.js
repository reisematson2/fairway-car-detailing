const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Define the source directory and destination directory for optimized images
const sourceDir = path.join(__dirname, '../src/assets/beforeAfter_images');
const destDir = path.join(__dirname, '../src/assets/optimized_images');

// Create the destination directory if it doesn't exist
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
  console.log(`Created destination directory: ${destDir}`);
}

// Process a specific image
async function optimizeImage(inputFile, outputFile, width) {
  try {
    await sharp(inputFile)
      .resize(width)
      .webp({ quality: 80 })
      .toFile(outputFile);
    console.log(`Optimized: ${path.basename(outputFile)}`);
    return true;
  } catch (error) {
    console.error(`Error optimizing ${inputFile}:`, error);
    return false;
  }
}

// Main function to process the images
async function processImages() {
  // Specify the files explicitly
  const imagesToProcess = [
    {
      input: path.join(sourceDir, 'IMG_0677.jpeg'),
      outputs: [
        { path: path.join(destDir, 'IMG_0677-small.webp'), width: 400 },
        { path: path.join(destDir, 'IMG_0677-medium.webp'), width: 800 },
        { path: path.join(destDir, 'IMG_0677-large.webp'), width: 1200 }
      ]
    },
    {
      input: path.join(sourceDir, 'IMG_0734.jpeg'),
      outputs: [
        { path: path.join(destDir, 'IMG_0734-small.webp'), width: 400 },
        { path: path.join(destDir, 'IMG_0734-medium.webp'), width: 800 },
        { path: path.join(destDir, 'IMG_0734-large.webp'), width: 1200 }
      ]
    }
  ];

  for (const image of imagesToProcess) {
    console.log(`Processing: ${path.basename(image.input)}`);
    if (!fs.existsSync(image.input)) {
      console.error(`Input file doesn't exist: ${image.input}`);
      continue;
    }

    for (const output of image.outputs) {
      await optimizeImage(image.input, output.path, output.width);
    }
  }
}

// Run the main function
processImages()
  .then(() => console.log('Image optimization completed!'))
  .catch(err => console.error('Error in image processing:', err));
