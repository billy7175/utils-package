/**
 * Comparison utilities
 */

/**
 * Performs a shallow equality check between two values.
 * Only compares the top-level properties using strict equality (===).
 * 
 * @example
 * shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 });  // true
 * shallowEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });  // false (different object references)
 */
export function shallowEqual<T>(a: T, b: T): boolean {
  // Same reference
  if (a === b) return true;

  // Handle null and undefined
  if (a == null || b == null) return false;

  // Different types
  if (typeof a !== typeof b) return false;

  // Primitive types
  if (typeof a !== 'object') return false;

  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  // One is array, other is not
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  // Objects
  const keysA = Object.keys(a as Record<string, unknown>);
  const keysB = Object.keys(b as Record<string, unknown>);

  if (keysA.length !== keysB.length) return false;

  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;
  
  for (let key of keysA) {
    if (!(key in bObj) || aObj[key] !== bObj[key]) {
      return false;
    }
  }

  return true;
}

/**
 * Performs a deep equality check between two values.
 * Recursively compares all nested properties and values.
 * 
 * @example
 * isEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });  // true
 * isEqual([1, [2, 3]], [1, [2, 3]]);  // true
 */
export function isEqual<T>(a: T, b: T): boolean {
  // Same reference
  if (a === b) return true;

  // Handle null and undefined
  if (a == null || b == null) return a === b;

  // Different types
  if (typeof a !== typeof b) return false;

  // Primitive types (number, string, boolean, symbol)
  if (typeof a !== 'object') {
    // Handle NaN
    if (typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b)) return true;
    return a === b;
  }

  // Arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    const arrA = a as unknown[];
    const arrB = b as unknown[];
    if (arrA.length !== arrB.length) return false;
    for (let i = 0; i < arrA.length; i++) {
      if (!isEqual(arrA[i], arrB[i])) return false;
    }
    return true;
  }

  // One is array, other is not
  if (Array.isArray(a) !== Array.isArray(b)) return false;

  // Date objects
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() === b.getTime();
  }

  // RegExp objects
  if (a instanceof RegExp && b instanceof RegExp) {
    return a.toString() === b.toString();
  }

  // Objects
  const aObj = a as Record<string, unknown>;
  const bObj = b as Record<string, unknown>;
  const keysA = Object.keys(aObj);
  const keysB = Object.keys(bObj);

  if (keysA.length !== keysB.length) return false;

  for (let key of keysA) {
    if (!(key in bObj) || !isEqual(aObj[key], bObj[key])) {
      return false;
    }
  }

  return true;
}

