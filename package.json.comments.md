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

## SideEffects

Tree-shaking 최적화 설정:
- `"sideEffects": false` - 패키지에 사이드 이펙트가 없음을 명시
- 번들러(Webpack, Rollup, Vite 등)가 사용하지 않는 코드를 더 공격적으로 제거
- 함수를 수백 개 추가해도 사용자가 import한 함수만 번들에 포함됨
- 유틸리티 패키지에 필수 설정

**참고:**
- `sideEffects` 없이도 Tree-shaking은 작동하지만, `false` 설정 시 더 확실한 최적화 가능

## Scripts

- `test`: 빌드 후 테스트 실행 (dist/index.js 사용)
- `example`: 빌드 후 예제 실행 (dist/index.js 사용)
- `build`: tsup으로 빌드 (dist/ 폴더 생성)

## DevDependencies

- `tsup`: 빌드 도구 (CJS/ESM 번들링)
- `typescript`: TypeScript 컴파일러

