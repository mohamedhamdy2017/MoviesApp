import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './Store/store';

import Navigation from './Navigation';

const App: React.FC = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
