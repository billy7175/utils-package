/**
 * string-case-utils tests
 * v1.1.0 - Test all case conversion functions
 */

import { toCamelCase, toKebabCase, toSnakeCase, toPascalCase, shallowEqual, isEqual } from '../dist/index.js';

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

// shallowEqual tests
console.log('\n📝 shallowEqual tests:');

test('Compare primitive values', () => {
  assertEqual(shallowEqual(1, 1), true);
  assertEqual(shallowEqual('hello', 'hello'), true);
  assertEqual(shallowEqual(true, true), true);
  assertEqual(shallowEqual(1, 2), false);
});

test('Compare same object reference', () => {
  const obj = { a: 1 };
  assertEqual(shallowEqual(obj, obj), true);
});

test('Compare objects with same top-level properties', () => {
  assertEqual(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }), true);
  assertEqual(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }), false);
});

test('Compare objects with nested objects (shallow)', () => {
  const nested1 = { a: 1, b: { c: 2 } };
  const nested2 = { a: 1, b: { c: 2 } };
  assertEqual(shallowEqual(nested1, nested2), false); // Different object references
});

test('Compare arrays', () => {
  assertEqual(shallowEqual([1, 2, 3], [1, 2, 3]), true);
  assertEqual(shallowEqual([1, 2, 3], [1, 2, 4]), false);
});

test('Compare arrays with nested objects (shallow)', () => {
  const arr1 = [1, { a: 2 }];
  const arr2 = [1, { a: 2 }];
  assertEqual(shallowEqual(arr1, arr2), false); // Nested object has different reference
});

test('Handle null and undefined', () => {
  assertEqual(shallowEqual(null, null), true);
  assertEqual(shallowEqual(undefined, undefined), true);
  assertEqual(shallowEqual(null, undefined), false);
});

// isEqual tests
console.log('\n📝 isEqual tests:');

test('Compare primitive values (deep)', () => {
  assertEqual(isEqual(1, 1), true);
  assertEqual(isEqual('hello', 'hello'), true);
  assertEqual(isEqual(1, 2), false);
});

test('Compare NaN values', () => {
  assertEqual(isEqual(NaN, NaN), true);
});

test('Compare objects with nested objects (deep)', () => {
  const obj1 = { a: 1, b: { c: 2, d: { e: 3 } } };
  const obj2 = { a: 1, b: { c: 2, d: { e: 3 } } };
  assertEqual(isEqual(obj1, obj2), true);
});

test('Compare nested objects with different values', () => {
  const obj1 = { a: 1, b: { c: 2 } };
  const obj2 = { a: 1, b: { c: 3 } };
  assertEqual(isEqual(obj1, obj2), false);
});

test('Compare arrays with nested arrays (deep)', () => {
  const arr1 = [1, [2, [3, 4]]];
  const arr2 = [1, [2, [3, 4]]];
  assertEqual(isEqual(arr1, arr2), true);
});

test('Compare Date objects', () => {
  const date1 = new Date('2023-01-01');
  const date2 = new Date('2023-01-01');
  assertEqual(isEqual(date1, date2), true);
});

test('Compare RegExp objects', () => {
  const regex1 = /test/gi;
  const regex2 = /test/gi;
  assertEqual(isEqual(regex1, regex2), true);
});

test('Compare objects with arrays', () => {
  const obj1 = { a: 1, b: [2, 3] };
  const obj2 = { a: 1, b: [2, 3] };
  assertEqual(isEqual(obj1, obj2), true);
});

test('Compare different types', () => {
  assertEqual(isEqual({}, []), false);
  assertEqual(isEqual(1, '1'), false);
});

test('Handle empty objects and arrays', () => {
  assertEqual(isEqual({}, {}), true);
  assertEqual(isEqual([], []), true);
  assertEqual(isEqual({}, []), false);
});

console.log('\n✨ All tests passed!\n');

