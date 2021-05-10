import 'react-native-gesture-handler/jestSetup';
require('jest-fetch-mock').enableMocks()

jest.mock('@react-native-async-storage/async-storage', () => {});
jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('react-redux', () => {
  return {
    useSelector: jest.fn().mockImplementation((selector) => selector()),
    useDispatch: jest.fn(),
  };
});
jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest.fn().mockImplementation((config, reducers) => reducers),
  };
});

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
  };
});