# package.json 필드 설명

## Entry Points (진입점)

- `main`: `./dist/index.cjs` - CommonJS 진입점 (`require()` 사용 시)
- `module`: `./dist/index.js` - ESM 진입점 (`import` 사용 시)
- `types`: `./dist/index.d.ts` - TypeScript 타입 정의

## Exports

명시적 exports 필드로 모듈 해상도를 명확히 합니다:
- `types`: TypeScript 타입 정의 경로
- `require`: CommonJS 경로
- `import`: ESM 경로

## Files

npm 배포 시 포함할 파일:
- `dist/` 폴더만 포함 (src, test, examples 제외)

## Scripts

- `test`: 빌드 후 테스트 실행 (dist/index.js 사용)
- `example`: 빌드 후 예제 실행 (dist/index.js 사용)
- `build`: tsup으로 빌드 (dist/ 폴더 생성)

## DevDependencies

- `tsup`: 빌드 도구 (CJS/ESM 번들링)
- `typescript`: TypeScript 컴파일러

