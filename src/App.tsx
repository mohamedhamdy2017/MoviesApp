import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './Store/store';

import {MovieDetails} from './Screens/MovieDetails';

const App: React.FC = () => {
  return (
    <Provider store={Store.store}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <MovieDetails />
      </PersistGate>
    </Provider>
  );
};

export default App;
