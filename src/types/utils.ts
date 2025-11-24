// Utility types for Striped Curtain Hero system

/**
 * Make all properties of T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract the value type from an array
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Create a type with required properties from T
 */
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Create a type with optional properties from T
 */
export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * RGB color tuple type
 */
export type RGBColor = [number, number, number];

/**
 * RGBA color tuple type
 */
export type RGBAColor = [number, number, number, number];

/**
 * 2D vector type
 */
export type Vec2 = [number, number];

/**
 * 3D vector type
 */
export type Vec3 = [number, number, number];

/**
 * 4D vector type
 */
export type Vec4 = [number, number, number, number];

/**
 * Normalized value between 0 and 1
 */
export type Normalized = number;

/**
 * Angle in radians
 */
export type Radians = number;

/**
 * Timestamp in milliseconds
 */
export type Timestamp = number;

/**
 * Event handler type
 */
export type EventHandler<T = Event> = (event: T) => void;

/**
 * Async event handler type
 */
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

/**
 * Callback function type
 */
export type Callback<T = void> = () => T;

/**
 * Async callback function type
 */
export type AsyncCallback<T = void> = () => Promise<T>;

/**
 * Value or function that returns a value
 */
export type ValueOrFunction<T> = T | (() => T);

/**
 * Cleanup function type
 */
export type CleanupFunction = () => void;

/**
 * Animation frame callback type
 */
export type AnimationFrameCallback = (timestamp: number) => void;

/**
 * Resize observer callback type
 */
export type ResizeCallback = (width: number, height: number) => void;

/**
 * Intersection observer callback type
 */
export type IntersectionCallback = (isVisible: boolean, entry: IntersectionObserverEntry) => void;
