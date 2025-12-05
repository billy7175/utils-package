# 🎯 utls-package

> 🚧 **Work in Progress** - This package is currently under development and not yet published to npm.

String case conversion utilities - A progressively upgraded package

[![Version](https://img.shields.io/badge/version-1.1.0-blue.svg)](https://github.com/billy7175/utils-package)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🚀 Features (v1.1.0)

Provides **4 case conversion** functions:
- ✅ camelCase
- ✅ kebab-case
- ✅ snake_case
- ✅ PascalCase

## 📦 Local Development

### Clone and Install
```bash
git clone https://github.com/billy7175/utils-package.git
cd utils-package
```

### Run Tests
```bash
npm test
# or
node test/index.test.js
```

### Run Examples
```bash
npm run example
# or
node examples/basic.js
```

## 💡 Usage

### Quick Start

```javascript
import { toCamelCase, toKebabCase, toSnakeCase, toPascalCase } from './src/index.js';

// Convert to various cases
const text = 'hello world';

toCamelCase(text);   // → 'helloWorld'
toKebabCase(text);   // → 'hello-world'
toSnakeCase(text);   // → 'hello_world'
toPascalCase(text);  // → 'HelloWorld'
```

## 📚 API Documentation

### `toCamelCase(str)`

Converts a string to camelCase.

**Parameters:**
- `str` (string): The string to convert

**Returns:**
- (string): The converted camelCase string

**Examples:**
```javascript
toCamelCase('hello world');   // 'helloWorld'
toCamelCase('user-profile');  // 'userProfile'
toCamelCase('get_user_id');   // 'getUserId'
```

### `toKebabCase(str)`

Converts a string to kebab-case.

**Parameters:**
- `str` (string): The string to convert

**Returns:**
- (string): The converted kebab-case string

**Examples:**
```javascript
toKebabCase('helloWorld');      // 'hello-world'
toKebabCase('user profile');    // 'user-profile'
toKebabCase('getUserById');     // 'get-user-by-id'
```

### `toSnakeCase(str)`

Converts a string to snake_case.

**Parameters:**
- `str` (string): The string to convert

**Returns:**
- (string): The converted snake_case string

**Examples:**
```javascript
toSnakeCase('helloWorld');      // 'hello_world'
toSnakeCase('user profile');    // 'user_profile'
toSnakeCase('getUserById');     // 'get_user_by_id'
```

### `toPascalCase(str)`

Converts a string to PascalCase.

**Parameters:**
- `str` (string): The string to convert

**Returns:**
- (string): The converted PascalCase string

**Examples:**
```javascript
toPascalCase('hello world');    // 'HelloWorld'
toPascalCase('user-profile');   // 'UserProfile'
toPascalCase('get_user_id');    // 'GetUserId'
```

## 🗺️ Roadmap

This package is progressively upgraded:

- ✅ **v1.0.0** - camelCase conversion
- ✅ **v1.1.0** - Added kebab-case, snake_case, PascalCase (current)
- 📅 **v1.2.0** - Build setup (tsup), npm publish
- 📅 **v1.3.0** - Optional parameters and advanced features
- 📅 **v2.0.0** - TypeScript support and major improvements

## 📋 Changelog

### v1.1.0 (Current - In Development)
- ✨ Added `toKebabCase()` function
- ✨ Added `toSnakeCase()` function
- ✨ Added `toPascalCase()` function
- 📝 18 additional test cases (28 total)
- 📚 Expanded API documentation
- 🌐 Converted to ESM
- 🌍 English documentation

### v1.0.0
- 🎉 Initial release
- ✨ `toCamelCase()` function
- 🧪 10 test cases

## 🧪 Testing

All 28 tests passing ✅

```bash
npm test
```

## 📝 License

MIT

## 🤝 Contributing

Issues and pull requests are always welcome!

---

**Made with ❤️**
