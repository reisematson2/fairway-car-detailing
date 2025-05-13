const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '../src/assets/beforeAfter_images');
const destDir = path.join(__dirname, '../src/assets/optimized_images');

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const optimizeImage = async (inputPath, filename) => {
  console.log(`Processing ${filename}...`);
  
  // Create different sizes for responsive loading
  const sizes = [
    { width: 800, suffix: 'large' },
    { width: 600, suffix: 'medium' },
    { width: 400, suffix: 'small' }
  ];
  
  for (const size of sizes) {
    const outputFilename = path.parse(filename).name + `-${size.suffix}.webp`;
    const outputPath = path.join(destDir, outputFilename);
    
    await sharp(inputPath)
      .resize({ width: size.width, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(outputPath);
    
    console.log(`Created ${outputFilename}`);
  }
};

const main = async () => {
  try {
    console.log(`Source directory: ${sourceDir}`);
    console.log(`Destination directory: ${destDir}`);
    
    // Check if source directory exists
    if (!fs.existsSync(sourceDir)) {
      console.error(`Source directory does not exist: ${sourceDir}`);
      return;
    }
    
    const files = fs.readdirSync(sourceDir);
    console.log(`Found ${files.length} files in source directory`);
    
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        const inputPath = path.join(sourceDir, file);
        console.log(`Processing file: ${inputPath}`);
        if (fs.existsSync(inputPath)) {
          await optimizeImage(inputPath, file);
        } else {
          console.error(`File does not exist: ${inputPath}`);
        }
      }
    }
    
    console.log('Image optimization completed!');
  } catch (err) {
    console.error('Error optimizing images:', err);
    console.error('Error details:', err.stack);
  }
};

main();
