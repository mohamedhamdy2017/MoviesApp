module.exports = {
  preset: 'react-native',
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?' +
      'react-native' +
      '|react-native-button' +
      '|@react-native-community/async-storage' +
      '|react-native-responsive-screen' +
      '|react-native-vector-icons' +
      '|react-native-gesture-handler' +
      '|react-native-iphone-x-helper' +
      '|@react-navigation' +
      '|react-native-reanimated' +
      '|react-redux' +
      '|@react-native/polyfills'+
      '|@react-native/normalize-color'+
      '/)',
  ],
  setupFiles: ['<rootDir>/jestSetup.js'],
  // moduleNameMapper: {
  //   '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
  //   '\\.(css|less)$': 'identity-obj-proxy',
  // },
  coveragePathIgnorePatterns: ['/node_modules/', '/jest'],
};
