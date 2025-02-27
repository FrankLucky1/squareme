module.exports = {
    preset: 'ts-jest',  // Use ts-jest for handling TypeScript files
    testEnvironment: 'jest-environment-jsdom',  // Use jsdom environment for DOM testing
    transform: {
      '^.+\\.(ts|tsx)$': 'babel-jest',  // Transform TypeScript files with Babel
      '^.+\\.(js|jsx)$': 'babel-jest',  // Transform JavaScript/JSX files with Babel
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  };