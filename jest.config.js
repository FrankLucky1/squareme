module.exports = {
    preset: 'ts-jest',  // Use ts-jest for handling TypeScript files
    testEnvironment: 'jest-environment-jsdom',  // Use jsdom environment for DOM testing
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "@swc/jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/src/$1",
    },
    moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  };