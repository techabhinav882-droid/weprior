/**
 * WebGL shader source code for cyber neon background effect
 */

/**
 * Vertex shader for fullscreen quad rendering
 * Transforms clip space coordinates to screen space
 */
export const vertexShaderSource = `#version 300 es
precision highp float;

// Input vertex position in clip space (-1 to 1)
in vec2 a_position;

// Output UV coordinates for fragment shader (0 to 1)
out vec2 v_uv;

void main() {
  // Pass through position directly (already in clip space)
  gl_Position = vec4(a_position, 0.0, 1.0);
  
  // Convert from clip space (-1 to 1) to UV space (0 to 1)
  v_uv = (a_position + 1.0) * 0.5;
}
`;

/**
 * Fragment shader for animated vertical neon streaks
 * Implements noise functions, streak generation, and color blending
 */
export const fragmentShaderSource = `#version 300 es
precision highp float;

// Input UV coordinates from vertex shader
in vec2 v_uv;

// Output color
out vec4 fragColor;

// Animation and interaction uniforms
uniform vec2 u_resolution;   // Canvas dimensions in pixels
uniform float u_time;        // Animation time in seconds
uniform vec2 u_mouse;        // Normalized mouse position (0-1)
uniform float u_scroll;      // Scroll progress (0-1)

// Configuration uniforms
uniform float u_density;     // Number of vertical bands (30-90)
uniform float u_intensity;   // Glow intensity (0.0-2.0)

// Neon color palette (array of 3 colors)
uniform vec3 u_colors[3];    // [purple, cyan, magenta]

/**
 * Pseudo-random hash function for consistent random values
 * @param p - Input 2D coordinate
 * @return - Pseudo-random value between 0 and 1
 */
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

/**
 * 2D value noise function for organic variation
 * @param p - Input 2D coordinate
 * @return - Smooth noise value between 0 and 1
 */
float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  
  // Smooth interpolation curve
  f = f * f * (3.0 - 2.0 * f);
  
  // Sample corner values
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  
  // Bilinear interpolation
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

/**
 * Fractal noise with multiple octaves for complex patterns
 * @param p - Input 2D coordinate
 * @return - Layered noise value
 */
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  float frequency = 1.0;
  
  // Add 4 octaves of noise
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p * frequency);
    amplitude *= 0.5;
    frequency *= 2.0;
  }
  
  return value;
}

/**
 * Generate procedural vertical bands using sine waves and noise
 * @param uv - Screen UV coordinates
 * @return - Band intensity value
 */
float generateBands(vec2 uv) {
  // Apply mouse parallax effect (subtle horizontal offset)
  float mouseInfluence = (u_mouse.x - 0.5) * 0.02;
  float x = uv.x + mouseInfluence;
  
  // Apply scroll-based phase shifting
  float scrollPhase = u_scroll * 0.5;
  
  // Create base vertical bands using sine waves
  float bandPattern = sin((x + scrollPhase) * u_density * 3.14159);
  
  // Add noise for irregular soft edges
  vec2 noiseCoord = vec2(x * u_density * 2.0, u_time * 0.3);
  float noiseValue = fbm(noiseCoord) * 0.3;
  
  // Combine sine pattern with noise
  float bands = (bandPattern + noiseValue) * 0.5 + 0.5;
  
  // Create alternating dark and lighter bands
  bands = smoothstep(0.3, 0.7, bands);
  
  return bands;
}

/**
 * Generate thin neon streaks (1-3px width) with vertical scrolling
 * @param uv - Screen UV coordinates
 * @param id - Unique streak identifier
 * @param seed - Random seed for variation
 * @return - Streak intensity value
 */
float neonStreak(vec2 uv, float id, float seed) {
  // Base position with pseudo-random distribution
  float x = hash(vec2(id, seed));
  
  // Apply mouse parallax effect
  float mouseInfluence = (u_mouse.x - 0.5) * 0.02;
  x += mouseInfluence * (1.0 + sin(id * 3.14159) * 0.5);
  
  // Calculate distance from streak center
  float dist = abs(uv.x - x);
  
  // Thin streak width (1-3px equivalent)
  float pixelWidth = 2.0 / u_resolution.x; // 2 pixels
  float width = pixelWidth * (1.0 + hash(vec2(id, seed + 1.0)) * 2.0);
  
  // Vertical scrolling animation
  float speed = 0.5 * (0.5 + hash(vec2(id, seed + 2.0)) * 1.5);
  float timeOffset = hash(vec2(id, seed + 3.0)) * 6.28318;
  float verticalPos = fract((u_time * speed + timeOffset) + u_scroll * 0.1);
  
  // Add noise-based breaks for organic feel
  vec2 noiseCoord = vec2(x * 50.0, verticalPos * 20.0 + u_time * 0.5);
  float noiseValue = fbm(noiseCoord);
  float breakMask = smoothstep(0.2, 0.8, noiseValue);
  
  // Vertical fade (streak length)
  float streakLength = 0.1 + hash(vec2(id, seed + 4.0)) * 0.2;
  float verticalFade = 1.0 - abs(uv.y - verticalPos) / streakLength;
  verticalFade = smoothstep(0.0, 1.0, verticalFade);
  
  // Horizontal falloff (streak width)
  float horizontalFade = 1.0 - smoothstep(0.0, width, dist);
  
  // Combine all factors
  float intensity = horizontalFade * verticalFade * breakMask;
  
  // Add sparkle effects
  float sparkle = sin(u_time * 15.0 + id * 6.28318) * 0.2 + 0.8;
  intensity *= sparkle;
  
  return intensity;
}

/**
 * Generate background gradient
 * @param uv - Screen UV coordinates
 * @return - Background color
 */
vec3 background(vec2 uv) {
  // Vertical gradient from dark blue to dark purple
  vec3 topColor = vec3(0.05, 0.05, 0.15);    // Dark blue
  vec3 bottomColor = vec3(0.1, 0.05, 0.2);   // Dark purple
  
  // Add subtle horizontal variation
  float horizontalVar = sin(uv.x * 3.14159) * 0.02;
  
  // Scroll-based color shift
  float scrollInfluence = u_scroll * 0.1;
  
  return mix(bottomColor, topColor, uv.y + horizontalVar + scrollInfluence);
}

/**
 * Apply post-processing effects
 * @param color - Input color
 * @param uv - Screen UV coordinates
 * @return - Processed color with effects
 */
vec3 postProcess(vec3 color, vec2 uv) {
  // Subtle scanlines effect
  float scanlines = sin(uv.y * u_resolution.y * 0.5) * 0.02 + 0.98;
  color *= scanlines;
  
  // Film grain
  float grain = hash(uv + u_time) * 0.03;
  color += grain;
  
  // Vignette effect
  float vignette = 1.0 - length(uv - 0.5) * 0.8;
  vignette = smoothstep(0.2, 1.0, vignette);
  color *= vignette;
  
  return color;
}

void main() {
  vec2 uv = v_uv;
  
  // Start with background gradient
  vec3 color = background(uv);
  
  // Generate procedural vertical bands
  float bandIntensity = generateBands(uv);
  
  // Apply band coloring (subtle variation from background)
  vec3 bandColor = mix(color, color * 1.3, bandIntensity * 0.3);
  color = bandColor;
  
  // Generate neon streaks with additive blending
  vec3 neonColor = vec3(0.0);
  float totalNeonIntensity = 0.0;
  
  // Render thin neon streaks
  float numStreaks = u_density * 0.3; // Fewer streaks than bands
  for (float i = 0.0; i < numStreaks; i++) {
    float intensity = neonStreak(uv, i, 42.0);
    
    if (intensity > 0.0) {
      // Color variation based on streak ID
      float colorMix = hash(vec2(i, 123.0));
      vec3 currentColor;
      
      if (colorMix < 0.33) {
        currentColor = u_colors[0]; // Purple
      } else if (colorMix < 0.66) {
        currentColor = u_colors[1]; // Cyan
      } else {
        currentColor = u_colors[2]; // Magenta
      }
      
      // Apply intensity scaling
      intensity *= u_intensity;
      
      // Additive blending for neon effect
      neonColor += currentColor * intensity;
      totalNeonIntensity += intensity;
    }
  }
  
  // Apply bloom effect simulation
  vec3 bloomColor = neonColor;
  
  // Create bloom by sampling surrounding pixels (approximation)
  float bloomRadius = 0.003;
  for (float x = -1.0; x <= 1.0; x += 1.0) {
    for (float y = -1.0; y <= 1.0; y += 1.0) {
      if (x == 0.0 && y == 0.0) continue;
      
      vec2 offset = vec2(x, y) * bloomRadius;
      vec2 sampleUV = uv + offset;
      
      if (sampleUV.x >= 0.0 && sampleUV.x <= 1.0 && sampleUV.y >= 0.0 && sampleUV.y <= 1.0) {
        // Sample neon intensity at offset position
        float sampleIntensity = 0.0;
        for (float i = 0.0; i < numStreaks; i++) {
          sampleIntensity += neonStreak(sampleUV, i, 42.0);
        }
        
        // Add to bloom with falloff
        float falloff = 1.0 - length(vec2(x, y)) * 0.5;
        bloomColor += neonColor * sampleIntensity * falloff * 0.3;
      }
    }
  }
  
  // Combine base color with neon streaks (additive)
  color += bloomColor;
  
  // Apply post-processing effects
  color = postProcess(color, uv);
  
  // Ensure color is in valid range
  color = clamp(color, 0.0, 1.0);
  
  fragColor = vec4(color, 1.0);
}
`;
