# Images Directory

Add your images here:

- `avatar.jpg` or `avatar.png` - Your profile photo
- `hero-bg.jpg` - Optional hero background image
- `project-*.jpg` - Project screenshots (e.g., `project-shodan-mcp.jpg`)
- `tech-*.png` - Technology logos or icons

## Usage in Components

```jsx
import Image from 'next/image';

<Image 
  src="/images/avatar.jpg" 
  alt="Profile photo" 
  width={200} 
  height={200} 
/>
```

## Image Formats

- **JPG/JPEG** - Photos, screenshots (80% quality)
- **PNG** - Logos, icons (transparent background)
- **WebP** - Modern format (best compression)

## Recommended Sizes

- Profile photo: 400x400px minimum
- Project screenshots: 1200x800px minimum (16:9 aspect ratio)
- Icons/logos: 256x256px or larger
