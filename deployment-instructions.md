# Fairway Car Detailing - Temporary Site Deployment Guide

## Files Prepared
- Deployment package: `fairway-car-detailing-YYYYMMDD-HHMMSS.zip` (located in the deploy folder)

## Hostinger Setup Instructions

### Step 1: Log in to your Hostinger account
1. Go to https://hpanel.hostinger.com/
2. Log in with your credentials

### Step 2: Create a temporary subdomain
1. Go to "Domains" > "Domain List"
2. Select the domain you want to use as the base
3. Click "Manage" > "Subdomains"
4. Create a new subdomain (e.g., `preview.yourdomain.com` or `fairway.yourdomain.com`)

### Step 3: Set up the website files
1. Go to "Files" > "File Manager"
2. Navigate to the subdomain's public_html folder (typically `/public_html/subdomain/`)
3. Upload the zip file (`fairway-car-detailing-YYYYMMDD-HHMMSS.zip`)
4. Extract the zip file contents to this directory
5. Make sure the `.htaccess` file is visible and properly uploaded (may be hidden by default)

### Step 4: Configure the subdomain (if needed)
1. Go to "Websites" > select your subdomain
2. Under "Website" tab, make sure the Document Root is properly set to the directory where you extracted the files

### Step 5: SSL Certificate
1. Go to "Websites" > select your subdomain
2. Click on "SSL"
3. Enable "SSL Certificate" if not already enabled
4. Wait for the certificate to be issued (can take a few minutes)

### Step 6: Verify the website
1. Visit your temporary domain (https://your-subdomain.yourdomain.com)
2. Test the navigation to ensure all routes work properly
3. Test the contact form and other interactive elements
4. Check that the site looks good on mobile devices

## Sharing with the Client
Once the site is verified and working properly, you can share the temporary URL with your client for review. Make sure to include:
- The temporary URL
- Expected review timeline
- Instructions for providing feedback
- Reminder that this is a temporary preview and not the final deployment

## Notes
- The site includes proper routing for single-page application (SPA) thanks to the included .htaccess file
- Images and assets have been optimized for fast loading
- The temporary site can be taken down after client approval and final launch

## Troubleshooting
If you encounter any routing issues (404 errors when refreshing or accessing direct URLs):
1. Verify the .htaccess file was properly uploaded
2. Check if mod_rewrite is enabled on the server
3. Contact Hostinger support if the issues persist
