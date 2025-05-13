#!/bin/bash

# Set variables
BUILD_DIR="/workspaces/fairway-car-detailing/dist"
BACKUP_DIR="/workspaces/fairway-car-detailing/deploy"
ZIP_FILE="fairway-car-detailing-$(date +%Y%m%d-%H%M%S).zip"

# Create deploy directory if it doesn't exist
mkdir -p "$BACKUP_DIR"

# Navigate to the build directory
cd "$BUILD_DIR" || exit

# Create the zip file
echo "Creating zip archive: $ZIP_FILE"
zip -r "$BACKUP_DIR/$ZIP_FILE" ./*

echo "---------------------------------------"
echo "Deployment package created successfully!"
echo "File: $BACKUP_DIR/$ZIP_FILE"
echo "Upload this file to your Hostinger account"
echo "---------------------------------------"
