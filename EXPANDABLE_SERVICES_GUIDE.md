# Expandable Services Component Guide

## ✅ Integration Complete

A stunning full-width expandable services component with neon-style text and smooth hover animations.

## 📦 Component Created

**`src/components/ui/expandable-services.tsx`** - Full-width expandable services component

## 🎨 Features

### Desktop Experience

- **4 Equal Sections** - Each section takes 25% width by default
- **Smooth Expansion** - Hovered section expands to 60%, others shrink to 13.33%
- **Parallax Background** - Background images zoom in on hover (scale 1.1)
- **Huge Transparent Numbers** - Massive background numbers (1, 2, 3, 4) with glow effect
- **Neon Text Effects** - Bold, glowing titles with customizable colors
- **Geometric Overlays** - Translucent circular shapes behind text
- **Smooth Transitions** - 400ms cubic-bezier animations

### Mobile Experience

- **Stacked Cards** - Converts to vertical card layout
- **No Expansion** - Normal card behavior for better mobile UX
- **Responsive Sizing** - Optimized text and spacing for small screens

## 🎯 Usage

```tsx
import { ExpandableServices } from "@/components/ui/expandable-services";

const services = [
  {
    number: "1",
    title: "DEVOPS",
    subtitle: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    neonColor: "#FF6B35", // Orange
    glowColor: "#FF6B35",
  },
  {
    number: "2",
    title: "CLOUD",
    subtitle: "Infrastructure",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    neonColor: "#4ECDC4", // Teal/Green
    glowColor: "#4ECDC4",
  },
  {
    number: "3",
    title: "SECURITY",
    subtitle: "Protection First",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b",
    neonColor: "#FF3366", // Red/Pink
    glowColor: "#FF3366",
  },
  {
    number: "4",
    title: "TRAINING",
    subtitle: "Expert Learning",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    neonColor: "#9D4EDD", // Purple
    glowColor: "#9D4EDD",
  },
];

<ExpandableServices services={services} />;
```

## 🎨 Neon Color Palette

Recommended neon colors for maximum impact:

- **Orange**: `#FF6B35` - Warm, energetic
- **Teal/Green**: `#4ECDC4` - Fresh, modern
- **Red/Pink**: `#FF3366` - Bold, attention-grabbing
- **Purple**: `#9D4EDD` - Creative, premium
- **Yellow**: `#FFD60A` - Bright, optimistic
- **Blue**: `#00B4D8` - Professional, trustworthy

## 🔧 Customization

### Change Section Width on Hover

In `expandable-services.tsx`, modify the width calculation:

```tsx
const width = isHovered ? "70%" : isOtherHovered ? "10%" : "25%";
// Default: 60% expanded, 13.33% shrunk
```

### Adjust Animation Speed

```tsx
transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1)";
// Default: 400ms
```

### Modify Background Zoom

```tsx
transform: isHovered ? "scale(1.15)" : "scale(1)";
// Default: scale(1.1)
```

### Change Number Size

```tsx
fontSize: isHovered ? "32rem" : "24rem";
// Default: 28rem expanded, 20rem normal
```

## 📱 Responsive Breakpoints

- **Desktop**: `md:flex` - Expandable sections (768px+)
- **Mobile**: `md:hidden` - Stacked cards (< 768px)

## ✨ Hover Effects

1. **Section Expansion** - Smooth width transition
2. **Background Zoom** - Image scales up
3. **Brightness Increase** - Overlay becomes lighter
4. **Number Glow** - Opacity and size increase
5. **Text Glow** - Multiple text-shadow layers
6. **Geometric Shape** - Blur effect scales up
7. **Bottom Accent** - Gradient line appears

## 🎬 Animation Details

- **Transition**: `cubic-bezier(0.4, 0, 0.2, 1)` - Smooth ease-in-out
- **Duration**: 400ms for width, 500ms for zoom
- **Fade In**: Custom animation for hover content

## 🖼️ Image Requirements

- **Aspect Ratio**: 16:9 or wider recommended
- **Resolution**: Minimum 1200x800px
- **Format**: JPG or WebP for best performance
- **Content**: High contrast images work best with dark overlays

## 🎯 Best Practices

1. **Use High-Quality Images** - Sharp, professional photos
2. **Consistent Color Scheme** - Match neon colors to brand
3. **Short Titles** - 1-2 words work best (uppercase)
4. **Concise Subtitles** - 2-3 words maximum
5. **Test on Mobile** - Ensure readability on small screens

## 🔄 Integration in HomePage

The component is integrated in two sections:

1. **Expandable Services** - Main interactive section
2. **Traditional Grid** - Detailed service breakdown (optional)

You can remove the traditional grid section if you only want the expandable version.

## 🚀 Performance Tips

- Use WebP images for better compression
- Lazy load images below the fold
- Consider using a CDN for images
- Optimize image sizes for different screen sizes

## 📝 Notes

- Component uses inline styles for dynamic values
- Fully accessible with keyboard navigation
- Works with touch devices (tap to expand on tablets)
- No external dependencies required
