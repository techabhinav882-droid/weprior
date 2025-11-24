/**
 * WebGL utility functions for shader compilation, program linking, and context management
 */

export interface WebGLProgramInfo {
  program: WebGLProgram;
  uniformLocations: Record<string, WebGLUniformLocation | null>;
  attributeLocations: Record<string, number>;
}

/**
 * Initialize WebGL2 context with fallback detection
 * @param canvas - HTML canvas element
 * @returns WebGL2 rendering context or null if not supported
 */
export function initWebGL2Context(canvas: HTMLCanvasElement): WebGL2RenderingContext | null {
  try {
    // Try to get WebGL2 context
    const gl = canvas.getContext("webgl2", {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      preserveDrawingBuffer: false,
      powerPreference: "high-performance",
    }) as WebGL2RenderingContext;

    if (!gl) {
      console.warn("WebGL2 not supported");
      return null;
    }

    // Check for required extensions
    const requiredExtensions = ["EXT_color_buffer_float"];
    for (const ext of requiredExtensions) {
      if (!gl.getExtension(ext)) {
        console.warn(`Required WebGL extension ${ext} not supported`);
      }
    }

    return gl;
  } catch (error) {
    console.error("Failed to initialize WebGL2 context:", error);
    return null;
  }
}

/**
 * Compile a shader from source code
 * @param gl - WebGL2 rendering context
 * @param type - Shader type (VERTEX_SHADER or FRAGMENT_SHADER)
 * @param source - Shader source code
 * @returns Compiled shader or null on error
 */
export function compileShader(
  gl: WebGL2RenderingContext,
  type: number,
  source: string
): WebGLShader | null {
  try {
    const shader = gl.createShader(type);
    if (!shader) {
      console.error("Failed to create shader");
      return null;
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    // Check compilation status
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const error = gl.getShaderInfoLog(shader);
      console.error(
        `Shader compilation error (${type === gl.VERTEX_SHADER ? "vertex" : "fragment"}):`,
        error
      );
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  } catch (error) {
    console.error("Failed to compile shader:", error);
    return null;
  }
}

/**
 * Create and link a WebGL program from vertex and fragment shaders
 * @param gl - WebGL2 rendering context
 * @param vertexSource - Vertex shader source code
 * @param fragmentSource - Fragment shader source code
 * @returns WebGL program or null on error
 */
export function createProgram(
  gl: WebGL2RenderingContext,
  vertexSource: string,
  fragmentSource: string
): WebGLProgram | null {
  try {
    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

    if (!vertexShader || !fragmentShader) {
      return null;
    }

    const program = gl.createProgram();
    if (!program) {
      console.error("Failed to create program");
      return null;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    // Check linking status
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      const error = gl.getProgramInfoLog(program);
      console.error("Program linking error:", error);
      gl.deleteProgram(program);
      return null;
    }

    // Clean up shaders (they're now part of the program)
    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    return program;
  } catch (error) {
    console.error("Failed to create program:", error);
    return null;
  }
}

/**
 * Get uniform and attribute locations for a program
 * @param gl - WebGL2 rendering context
 * @param program - WebGL program
 * @param uniforms - Array of uniform names to locate
 * @param attributes - Array of attribute names to locate
 * @returns Object containing uniform and attribute locations
 */
export function getProgramInfo(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  uniforms: string[] = [],
  attributes: string[] = []
): WebGLProgramInfo {
  const uniformLocations: Record<string, WebGLUniformLocation | null> = {};
  const attributeLocations: Record<string, number> = {};

  // Get uniform locations
  for (const uniform of uniforms) {
    uniformLocations[uniform] = gl.getUniformLocation(program, uniform);
    if (uniformLocations[uniform] === null) {
      console.warn(`Uniform '${uniform}' not found in program`);
    }
  }

  // Get attribute locations
  for (const attribute of attributes) {
    attributeLocations[attribute] = gl.getAttribLocation(program, attribute);
    if (attributeLocations[attribute] === -1) {
      console.warn(`Attribute '${attribute}' not found in program`);
    }
  }

  return {
    program,
    uniformLocations,
    attributeLocations,
  };
}

/**
 * Create a fullscreen quad vertex buffer
 * @param gl - WebGL2 rendering context
 * @returns Vertex buffer for fullscreen quad
 */
export function createFullscreenQuad(gl: WebGL2RenderingContext): WebGLBuffer | null {
  try {
    // Fullscreen quad vertices (position only, covers entire screen)
    const vertices = new Float32Array([
      -1.0,
      -1.0, // Bottom left
      1.0,
      -1.0, // Bottom right
      -1.0,
      1.0, // Top left
      1.0,
      1.0, // Top right
    ]);

    const buffer = gl.createBuffer();
    if (!buffer) {
      console.error("Failed to create vertex buffer");
      return null;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    return buffer;
  } catch (error) {
    console.error("Failed to create fullscreen quad:", error);
    return null;
  }
}

/**
 * Setup vertex array object for fullscreen quad rendering
 * @param gl - WebGL2 rendering context
 * @param program - WebGL program
 * @param buffer - Vertex buffer
 * @param positionAttributeName - Name of position attribute in shader
 * @returns Vertex array object
 */
export function setupVertexArray(
  gl: WebGL2RenderingContext,
  program: WebGLProgram,
  buffer: WebGLBuffer,
  positionAttributeName: string = "a_position"
): WebGLVertexArrayObject | null {
  try {
    const vao = gl.createVertexArray();
    if (!vao) {
      console.error("Failed to create vertex array object");
      return null;
    }

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    const positionLocation = gl.getAttribLocation(program, positionAttributeName);
    if (positionLocation === -1) {
      console.warn(`Position attribute '${positionAttributeName}' not found`);
      return vao;
    }

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.bindVertexArray(null);
    return vao;
  } catch (error) {
    console.error("Failed to setup vertex array:", error);
    return null;
  }
}

/**
 * Handle WebGL context loss and restoration
 * @param canvas - HTML canvas element
 * @param onContextLost - Callback for context lost event
 * @param onContextRestored - Callback for context restored event
 */
export function setupContextLossHandling(
  canvas: HTMLCanvasElement,
  onContextLost: () => void,
  onContextRestored: () => void
): void {
  canvas.addEventListener("webglcontextlost", (event) => {
    event.preventDefault();
    console.warn("WebGL context lost");
    onContextLost();
  });

  canvas.addEventListener("webglcontextrestored", () => {
    console.log("WebGL context restored");
    onContextRestored();
  });
}

/**
 * Clean up WebGL resources
 * @param gl - WebGL2 rendering context
 * @param resources - Object containing WebGL resources to clean up
 */
export function cleanupWebGLResources(
  gl: WebGL2RenderingContext,
  resources: {
    program?: WebGLProgram | null;
    buffers?: (WebGLBuffer | null)[];
    vaos?: (WebGLVertexArrayObject | null)[];
    textures?: (WebGLTexture | null)[];
  }
): void {
  try {
    if (resources.program) {
      gl.deleteProgram(resources.program);
    }

    if (resources.buffers) {
      resources.buffers.forEach((buffer) => {
        if (buffer) gl.deleteBuffer(buffer);
      });
    }

    if (resources.vaos) {
      resources.vaos.forEach((vao) => {
        if (vao) gl.deleteVertexArray(vao);
      });
    }

    if (resources.textures) {
      resources.textures.forEach((texture) => {
        if (texture) gl.deleteTexture(texture);
      });
    }
  } catch (error) {
    console.error("Error cleaning up WebGL resources:", error);
  }
}
