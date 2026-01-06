/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom", // needed for React Testing Library
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // optional, for jest-dom
  };
  