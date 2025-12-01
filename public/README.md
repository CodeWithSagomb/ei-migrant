# Public Assets Folder

This folder contains all static assets served directly by the web server.

## Current Assets

- `favicon.svg` - SVG favicon with EI initials (scalable)
- `robots.txt` - Search engine crawling instructions
- `manifest.json` - PWA manifest file
- `images/` - Local image assets

## TODO: Generate Complete Favicon Set

The current `favicon.svg` is a placeholder. For production, you should generate a complete favicon set with multiple sizes:

### Recommended Favicon Sizes

1. **favicon.ico** (16x16, 32x32, 48x48 multi-resolution)
2. **apple-touch-icon.png** (180x180)
3. **favicon-16x16.png**
4. **favicon-32x32.png**
5. **favicon-192x192.png** (Android)
6. **favicon-512x512.png** (Android)

### How to Generate Favicons

**Option 1: Online Tool (Easiest)**
1. Go to https://realfavicongenerator.net/
2. Upload your logo (SVG or PNG, at least 512x512px)
3. Customize settings for different platforms
4. Download the generated package
5. Extract files to this `/public` folder
6. Update `/index.html` with the provided code

**Option 2: Using Figma/Illustrator**
1. Design your logo at 512x512px
2. Export as PNG at various sizes (16, 32, 180, 192, 512)
3. Use an online ICO converter for favicon.ico
4. Place all files in `/public`

**Option 3: Command Line (Advanced)**
```bash
# Install ImageMagick
# Convert SVG to various PNG sizes
magick favicon.svg -resize 16x16 favicon-16x16.png
magick favicon.svg -resize 32x32 favicon-32x32.png
magick favicon.svg -resize 180x180 apple-touch-icon.png
magick favicon.svg -resize 192x192 favicon-192x192.png
magick favicon.svg -resize 512x512 favicon-512x512.png
```

### After Generating Favicons

Update `/index.html` with proper favicon links:

```html
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.json">
```

## Logo Files

Place your organization's logo files in `/public/images/`:

- `logo.svg` - Vector logo (preferred for scaling)
- `logo.png` - Raster logo (high resolution, transparent background)
- `logo-white.svg` - White version for dark backgrounds
- `logo-white.png` - White raster version

## Image Organization

Organize images by category:

```
/public/images/
  ├── logo.svg
  ├── logo.png
  ├── hero/
  │   └── hero-background.jpg
  ├── team/
  │   ├── founder.jpg
  │   └── team-member-1.jpg
  ├── missions/
  │   ├── health.jpg
  │   ├── education.jpg
  │   ├── gender.jpg
  │   └── employment.jpg
  └── community/
      ├── community-1.jpg
      └── community-2.jpg
```

## Image Optimization Tips

1. **Use WebP format** for better compression (with PNG/JPG fallbacks)
2. **Compress images** before uploading (use TinyPNG, ImageOptim, or Squoosh)
3. **Use appropriate dimensions** - don't upload 4000px images if you only display 800px
4. **Add descriptive filenames** - `health-program-dakar.jpg` not `IMG_1234.jpg`
5. **Always include alt text** in your components

## Next Steps

1. Replace `favicon.svg` with your actual logo design
2. Generate complete favicon set using option 1 above
3. Add your organization's logo files to `/public/images/`
4. Replace Unsplash images with your own photography
5. Update `imageConstants.ts` to reference local images
