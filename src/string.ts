/**
 * String case conversion utilities
 */

/**
 * Helper function to split a string into word arrays
 * Handles camelCase, PascalCase, kebab-case, snake_case, etc.
 */
function splitWords(str: string): string[] {
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
 * @example
 * toCamelCase("hello world");  // "helloWorld"
 * toCamelCase("hello-world");  // "helloWorld"
 * toCamelCase("hello_world");  // "helloWorld"
 */
export function toCamelCase(str: string): string {
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
 * @example
 * toKebabCase("helloWorld");   // "hello-world"
 * toKebabCase("hello world");  // "hello-world"
 * toKebabCase("HelloWorld");   // "hello-world"
 */
export function toKebabCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words.join('-');
}

/**
 * Converts a string to snake_case.
 * 
 * @example
 * toSnakeCase("helloWorld");   // "hello_world"
 * toSnakeCase("hello world");  // "hello_world"
 * toSnakeCase("HelloWorld");   // "hello_world"
 */
export function toSnakeCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words.join('_');
}

/**
 * Converts a string to PascalCase.
 * 
 * @example
 * toPascalCase("hello world");  // "HelloWorld"
 * toPascalCase("hello-world");  // "HelloWorld"
 * toPascalCase("hello_world");  // "HelloWorld"
 */
export function toPascalCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';

  return words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

