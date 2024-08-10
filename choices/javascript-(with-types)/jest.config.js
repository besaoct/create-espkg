// jest.config.js

/** @type {import('jest').Config} */
const jest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['ts', 'js'],
    testMatch: ['**/**/*.test.ts'],
  };
  
export default jest