/**
 * string-case-utils usage examples
 * v1.1.0 - All case conversion examples
 */

import { toCamelCase, toKebabCase, toSnakeCase, toPascalCase } from '../dist/index.js';

console.log('🎯 string-case-utils v1.1.0 Examples\n');

// Basic usage examples
console.log('📌 Basic Conversion Examples:');
console.log('toCamelCase("hello world")     →', toCamelCase('hello world'));
console.log('toCamelCase("hello-world")     →', toCamelCase('hello-world'));
console.log('toCamelCase("hello_world")     →', toCamelCase('hello_world'));
console.log('toCamelCase("Hello World")     →', toCamelCase('Hello World'));

console.log('\n📌 Multi-word Conversion:');
console.log('toCamelCase("my variable name")         →', toCamelCase('my variable name'));
console.log('toCamelCase("user-profile-settings")    →', toCamelCase('user-profile-settings'));
console.log('toCamelCase("get_user_by_id")          →', toCamelCase('get_user_by_id'));

console.log('\n📌 Mixed Separators:');
console.log('toCamelCase("hello-world_test case")   →', toCamelCase('hello-world_test case'));
console.log('toCamelCase("my-super_cool Variable")  →', toCamelCase('my-super_cool Variable'));

console.log('\n📌 Edge Cases:');
console.log('toCamelCase("")                        →', `"${toCamelCase('')}"`);
console.log('toCamelCase("hello")                   →', toCamelCase('hello'));
console.log('toCamelCase("HELLO WORLD")             →', toCamelCase('HELLO WORLD'));

console.log('\n' + '='.repeat(50));
console.log('🔗 toKebabCase - kebab-case conversion');
console.log('='.repeat(50));

console.log('\n📌 Basic Conversion:');
console.log('toKebabCase("helloWorld")      →', toKebabCase('helloWorld'));
console.log('toKebabCase("hello world")     →', toKebabCase('hello world'));
console.log('toKebabCase("hello_world")     →', toKebabCase('hello_world'));
console.log('toKebabCase("Hello World")     →', toKebabCase('Hello World'));

console.log('\n📌 Practical Examples:');
console.log('toKebabCase("myVariableName")          →', toKebabCase('myVariableName'));
console.log('toKebabCase("user profile settings")   →', toKebabCase('user profile settings'));
console.log('toKebabCase("get_user_by_id")          →', toKebabCase('get_user_by_id'));

console.log('\n' + '='.repeat(50));
console.log('🐍 toSnakeCase - snake_case conversion');
console.log('='.repeat(50));

console.log('\n📌 Basic Conversion:');
console.log('toSnakeCase("helloWorld")      →', toSnakeCase('helloWorld'));
console.log('toSnakeCase("hello world")     →', toSnakeCase('hello world'));
console.log('toSnakeCase("hello-world")     →', toSnakeCase('hello-world'));
console.log('toSnakeCase("Hello World")     →', toSnakeCase('Hello World'));

console.log('\n📌 Practical Examples:');
console.log('toSnakeCase("myVariableName")          →', toSnakeCase('myVariableName'));
console.log('toSnakeCase("user profile settings")   →', toSnakeCase('user profile settings'));
console.log('toSnakeCase("getUserById")             →', toSnakeCase('getUserById'));

console.log('\n' + '='.repeat(50));
console.log('🎩 toPascalCase - PascalCase conversion');
console.log('='.repeat(50));

console.log('\n📌 Basic Conversion:');
console.log('toPascalCase("hello world")    →', toPascalCase('hello world'));
console.log('toPascalCase("hello-world")    →', toPascalCase('hello-world'));
console.log('toPascalCase("hello_world")    →', toPascalCase('hello_world'));
console.log('toPascalCase("helloWorld")     →', toPascalCase('helloWorld'));

console.log('\n📌 Practical Examples:');
console.log('toPascalCase("my component")           →', toPascalCase('my component'));
console.log('toPascalCase("user-profile-card")      →', toPascalCase('user-profile-card'));
console.log('toPascalCase("api_response_handler")   →', toPascalCase('api_response_handler'));

console.log('\n' + '='.repeat(50));
console.log('🔄 Case Conversion Chain Example');
console.log('='.repeat(50));

const original = 'hello world example';
console.log('\nOriginal:', `"${original}"`);
console.log('  → camelCase:', toCamelCase(original));
console.log('  → kebab-case:', toKebabCase(original));
console.log('  → snake_case:', toSnakeCase(original));
console.log('  → PascalCase:', toPascalCase(original));

console.log('\n✨ v1.1.0 Update Complete!');
console.log('🎉 Provides 4 case conversion functions: camelCase, kebab-case, snake_case, PascalCase');
console.log('💡 Next version will add optional parameters and advanced features.\n');
