import { createStore, applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reducers from './reducers';

interface CONFIG {
  key: string;
  storage: any;
  blacklist: Array<string>;
  timeout: any;
}

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const middleware = applyMiddleware(thunk);

const config: CONFIG = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loading', 'home'],
  timeout: null,
};

const persistedReducer = persistReducer(config, reducers);

const store: any = createStore(persistedReducer, {}, composeEnhancers(middleware));

const persistor = persistStore(store);

export default { store, persistor };
