/**
 * string-case-utils v1.1.0
 * String case conversion utilities
 */

/**
 * Helper function to split a string into word arrays
 * Handles camelCase, PascalCase, kebab-case, snake_case, etc.
 * 
 * @param {string} str - String to split
 * @returns {string[]} Array of words converted to lowercase
 */
function splitWords(str) {
  if (!str) return [];

  // Add spaces before uppercase letters (handles camelCase, PascalCase)
  // Example: "helloWorld" → "hello World"
  const withSpaces = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Split by spaces, hyphens, underscores and convert to lowercase
  return withSpaces
    .toLowerCase()
    .split(/[\s\-_]+/)
    .filter(word => word.length > 0);
}

/**
 * Converts a string to camelCase.
 * 
 * @param {string} str - String to convert
 * @returns {string} The converted camelCase string
 * 
 * @example
 * toCamelCase("hello world");  // "helloWorld"
 * toCamelCase("hello-world");  // "helloWorld"
 * toCamelCase("hello_world");  // "helloWorld"
 */
function toCamelCase(str) {
  const words = splitWords(str);
  if (words.length === 0) return '';

  // First word lowercase, rest capitalize first letter
  return words
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join('');
}

/**
 * Converts a string to kebab-case.
 * 
 * @param {string} str - String to convert
 * @returns {string} The converted kebab-case string
 * 
 * @example
 * toKebabCase("helloWorld");   // "hello-world"
 * toKebabCase("hello world");  // "hello-world"
 * toKebabCase("HelloWorld");   // "hello-world"
 */
function toKebabCase(str) {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words.join('-');
}

/**
 * Converts a string to snake_case.
 * 
 * @param {string} str - String to convert
 * @returns {string} The converted snake_case string
 * 
 * @example
 * toSnakeCase("helloWorld");   // "hello_world"
 * toSnakeCase("hello world");  // "hello_world"
 * toSnakeCase("HelloWorld");   // "hello_world"
 */
function toSnakeCase(str) {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words.join('_');
}

/**
 * Converts a string to PascalCase.
 * 
 * @param {string} str - String to convert
 * @returns {string} The converted PascalCase string
 * 
 * @example
 * toPascalCase("hello world");  // "HelloWorld"
 * toPascalCase("hello-world");  // "HelloWorld"
 * toPascalCase("hello_world");  // "HelloWorld"
 */
function toPascalCase(str) {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Export modules (ESM)
export {
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  toPascalCase
};
