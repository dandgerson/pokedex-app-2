module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    // "src/(.*)$": "<rootDir>/src/$1",
    // 'src/(.*)': '<rootDir>/src/$1',
  },
  moduleDirectories: ['node_modules', 'src'],
  // roots: ['src'],
};
