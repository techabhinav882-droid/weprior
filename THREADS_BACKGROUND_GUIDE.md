# Threads Background Component Guide

## ✅ Integration Complete

Successfully integrated an animated WebGL threads background into the WePrior (HomePage) landing page.

## 📦 What Was Installed

### NPM Dependencies

- `ogl` - Minimal WebGL library for rendering

### Component Created

**`src/components/ui/threads.tsx`** - Animated flowing threads background

## 🎨 Component Features

### Visual Elements

- **Flowing Threads** - 40 animated lines that flow across the screen
- **Perlin Noise** - Organic, natural-looking wave patterns
- **Mouse Interaction** - Threads respond to mouse movement
- **WebGL Rendering** - GPU-accelerated smooth 60fps animation
- **Customizable Colors** - RGB color control
- **Adjustable Parameters** - Amplitude and distance controls

### Technical Details

- **Renderer**: OGL (Minimal WebGL library)
- **Shaders**: Custom GLSL vertex and fragment shaders
- **Animation**: RequestAnimationFrame loop
- **Performance**: GPU-accelerated, minimal CPU usage

## 🎯 Component Props

```tsx
interface ThreadsProps {
  color?: [number, number, number]; // RGB values (0-1)
  amplitude?: number; // Wave height (default: 1)
  distance?: number; // Thread spacing (default: 0)
  enableMouseInteraction?: boolean; // Mouse tracking (default: false)
}
```

## 📝 Current Implementation

### HomePage Hero Section

```tsx
<Threads
  color={[0.3, 0.5, 0.9]} // Blue color
  amplitude={1.2} // Slightly increased wave height
  distance={0.3} // Moderate thread spacing
  enableMouseInteraction={true} // Mouse interaction enabled
/>
```

### Styling

- **Opacity**: 30% for subtle effect
- **Background**: Gradient from gray-50 to blue-50
- **Overlays**: Additional gradient circles for depth
- **Z-index**: Content above threads (z-10)

## 🎨 Color Examples

### Blue (Current)

```tsx
color={[0.3, 0.5, 0.9]}  // Soft blue
```

### Purple

```tsx
color={[0.6, 0.3, 0.9]}  // Purple
```

### Cyan

```tsx
color={[0.2, 0.8, 0.9]}  // Bright cyan
```

### White

```tsx
color={[1, 1, 1]}  // Pure white
```

### Custom Gradient Effect

```tsx
// Use multiple Threads components with different colors
<Threads color={[0.3, 0.5, 0.9]} amplitude={1} />
<Threads color={[0.6, 0.3, 0.9]} amplitude={0.8} />
```

## 🔧 Parameter Tuning

### Amplitude (Wave Height)

```tsx
amplitude={0.5}   // Subtle waves
amplitude={1.0}   // Normal waves (default)
amplitude={2.0}   // Dramatic waves
```

### Distance (Thread Spacing)

```tsx
distance={0}      // Threads close together (default)
distance={0.5}    // Moderate spacing
distance={1.0}    // Wide spacing
```

### Mouse Interaction

```tsx
enableMouseInteraction={false}  // Static animation
enableMouseInteraction={true}   // Responds to mouse
```

## 🎬 Animation Details

### Perlin Noise

- Generates organic, flowing patterns
- 2D noise function for smooth transitions
- Time-based animation for continuous motion

### Mouse Interaction

- Smooth interpolation (5% per frame)
- Affects wave amplitude and direction
- Returns to center when mouse leaves

### Performance

- WebGL rendering (GPU-accelerated)
- 60fps smooth animation
- Minimal CPU usage
- Automatic cleanup on unmount

## 📱 Responsive Behavior

### All Screen Sizes

- Automatically resizes to container
- Maintains aspect ratio
- Smooth performance on all devices
- Touch-friendly (no mouse interaction on mobile)

## 🎨 Styling Tips

### Opacity Control

```tsx
<div className="opacity-30">  // Subtle (current)
<div className="opacity-50">  // Medium
<div className="opacity-70">  // Strong
```

### Background Colors

```tsx
// Light background
className = "bg-gradient-to-br from-gray-50 via-white to-blue-50";

// Dark background
className = "bg-gradient-to-br from-gray-900 via-black to-blue-900";
```

### Blend Modes

```tsx
<div className="mix-blend-multiply">  // Darker blend
<div className="mix-blend-screen">    // Lighter blend
<div className="mix-blend-overlay">   // Contrast blend
```

## 🔄 Multiple Threads Layers

Create depth with multiple layers:

```tsx
<div className="absolute inset-0">
  <div className="opacity-20">
    <Threads color={[0.3, 0.5, 0.9]} amplitude={1.5} distance={0.5} />
  </div>
  <div className="opacity-15">
    <Threads color={[0.6, 0.3, 0.9]} amplitude={1.0} distance={0.3} />
  </div>
</div>
```

## 💡 Use Cases

Perfect for:

- Hero sections
- Landing pages
- Background animations
- Loading screens
- About pages
- Portfolio headers

## 🚀 Performance Optimization

### Best Practices

- Use single instance per section
- Keep opacity moderate (20-40%)
- Limit to hero/main sections
- Clean up on unmount (automatic)

### Resource Management

- WebGL context properly disposed
- Event listeners removed
- Animation frames cancelled
- Memory leaks prevented

## 🎯 Integration Points

Works seamlessly with:

- Gradient buttons
- Text overlays
- Navigation bars
- Any content (proper z-index)

## 📝 Technical Notes

### WebGL Shaders

- **Vertex Shader**: Simple pass-through
- **Fragment Shader**: Complex noise and line rendering
- **Uniforms**: Time, resolution, color, mouse position

### OGL Library

- Minimal WebGL wrapper
- No dependencies
- Small bundle size (~10KB)
- Modern API

### Browser Support

- All modern browsers with WebGL support
- Graceful degradation (no WebGL = no background)
- Mobile-friendly

## 🔧 Customization Examples

### Subtle Background

```tsx
<div className="opacity-15">
  <Threads color={[0.5, 0.5, 0.5]} amplitude={0.5} distance={0.1} enableMouseInteraction={false} />
</div>
```

### Dramatic Effect

```tsx
<div className="opacity-60">
  <Threads color={[0.2, 0.8, 1.0]} amplitude={2.0} distance={0.8} enableMouseInteraction={true} />
</div>
```

### Minimal Style

```tsx
<div className="opacity-20">
  <Threads color={[1, 1, 1]} amplitude={0.3} distance={0} enableMouseInteraction={false} />
</div>
```

## ✨ Visual Impact

The Threads background creates:

- **Movement**: Dynamic, flowing animation
- **Depth**: Layered visual interest
- **Interactivity**: Responds to user input
- **Professionalism**: Modern, high-tech aesthetic
- **Subtlety**: Doesn't overpower content

## 🎨 Design Philosophy

- **Organic**: Natural flowing patterns
- **Minimal**: Clean, unobtrusive design
- **Interactive**: Engages users
- **Performance**: Smooth, efficient rendering
- **Flexible**: Highly customizable

## 🔗 Comparison

### Before

- Static gradient background
- Simple blur circles
- No animation
- Basic design

### After

- Animated flowing threads
- WebGL-powered effects
- Mouse interaction
- Premium aesthetic
- Dynamic movement
