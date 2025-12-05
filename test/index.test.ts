/**
 * string-case-utils tests
 * v1.1.0 - Test all case conversion functions
 */

import { toCamelCase, toKebabCase, toSnakeCase, toPascalCase } from '../dist/index.js';

// Simple test helpers
function test(description: string, fn: () => void): void {
  try {
    fn();
    console.log(`✅ ${description}`);
  } catch (error) {
    const err = error as Error;
    console.error(`❌ ${description}`);
    console.error(`   ${err.message}`);
    process.exit(1);  // Exit with code 1 on test failure (for CI/CD)
  }
}

function assertEqual<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(
      message || `Expected "${expected}" but got "${actual}"`
    );
  }
}

// Start tests
console.log('🧪 string-case-utils v1.1.0 test started\n');

// toCamelCase tests
console.log('📝 toCamelCase tests:');

test('Convert space-separated string', () => {
  assertEqual(toCamelCase('hello world'), 'helloWorld');
});

test('Convert hyphen-separated string', () => {
  assertEqual(toCamelCase('hello-world'), 'helloWorld');
});

test('Convert underscore-separated string', () => {
  assertEqual(toCamelCase('hello_world'), 'helloWorld');
});

test('Convert string with uppercase', () => {
  assertEqual(toCamelCase('Hello World'), 'helloWorld');
});

test('Convert multi-word string', () => {
  assertEqual(toCamelCase('hello world test case'), 'helloWorldTestCase');
});

test('Convert string with mixed separators', () => {
  assertEqual(toCamelCase('hello-world_test case'), 'helloWorldTestCase');
});

test('Handle empty string', () => {
  assertEqual(toCamelCase(''), '');
});

test('Handle null/undefined', () => {
  assertEqual(toCamelCase(null as any), '');
  assertEqual(toCamelCase(undefined as any), '');
});

test('Convert single word', () => {
  assertEqual(toCamelCase('hello'), 'hello');
});

test('Handle consecutive separators', () => {
  assertEqual(toCamelCase('hello---world'), 'helloWorld');
});

// toKebabCase tests
console.log('\n📝 toKebabCase tests:');

test('Convert camelCase to kebab-case', () => {
  assertEqual(toKebabCase('helloWorld'), 'hello-world');
});

test('Convert space-separated string to kebab-case', () => {
  assertEqual(toKebabCase('hello world'), 'hello-world');
});

test('Convert underscore to kebab-case', () => {
  assertEqual(toKebabCase('hello_world'), 'hello-world');
});

test('Convert uppercase string to kebab-case', () => {
  assertEqual(toKebabCase('Hello World'), 'hello-world');
});

test('Convert multi-word to kebab-case', () => {
  assertEqual(toKebabCase('my variable name'), 'my-variable-name');
});

test('Handle empty string (kebab)', () => {
  assertEqual(toKebabCase(''), '');
});

// toSnakeCase tests
console.log('\n📝 toSnakeCase tests:');

test('Convert camelCase to snake_case', () => {
  assertEqual(toSnakeCase('helloWorld'), 'hello_world');
});

test('Convert space-separated string to snake_case', () => {
  assertEqual(toSnakeCase('hello world'), 'hello_world');
});

test('Convert hyphen to snake_case', () => {
  assertEqual(toSnakeCase('hello-world'), 'hello_world');
});

test('Convert uppercase string to snake_case', () => {
  assertEqual(toSnakeCase('Hello World'), 'hello_world');
});

test('Convert multi-word to snake_case', () => {
  assertEqual(toSnakeCase('my variable name'), 'my_variable_name');
});

test('Handle empty string (snake)', () => {
  assertEqual(toSnakeCase(''), '');
});

// toPascalCase tests
console.log('\n📝 toPascalCase tests:');

test('Convert space-separated string to PascalCase', () => {
  assertEqual(toPascalCase('hello world'), 'HelloWorld');
});

test('Convert hyphen-separated string to PascalCase', () => {
  assertEqual(toPascalCase('hello-world'), 'HelloWorld');
});

test('Convert underscore-separated string to PascalCase', () => {
  assertEqual(toPascalCase('hello_world'), 'HelloWorld');
});

test('Convert camelCase to PascalCase', () => {
  assertEqual(toPascalCase('helloWorld'), 'HelloWorld');
});

test('Convert multi-word to PascalCase', () => {
  assertEqual(toPascalCase('my variable name'), 'MyVariableName');
});

test('Handle empty string (pascal)', () => {
  assertEqual(toPascalCase(''), '');
});

console.log('\n✨ All tests passed!\n');

