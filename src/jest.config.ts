// jest.config.ts
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',  // explicitly point to the one you just edited
    },
  },
  // … rest of your config
};
