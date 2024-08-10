// jest.config.js

/** @type {import('jest').Config} */
const jest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js','tsx', 'jsx'],
    testMatch: ['**/**/*.test.ts', '**/**/*.test.tsx'],
  };
  
export default jest