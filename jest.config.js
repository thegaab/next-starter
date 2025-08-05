import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/components/(.*)$': '<rootDir>/app/components/$1',
    '^@/hooks/(.*)$': '<rootDir>/app/hooks/$1',
    '^@/utils/(.*)$': '<rootDir>/app/utils/$1',
    '^@/styles/(.*)$': '<rootDir>/app/styles/$1',
    '^@/types/(.*)$': '<rootDir>/app/types/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  transform: {
    '^.+\.(js|jsx|ts|tsx)$': ['@swc/jest', { 
      jsc: { 
        transform: { 
          react: { 
            runtime: 'automatic' 
          } 
        } 
      } 
    }],
  },
};

export default createJestConfig(customJestConfig);
