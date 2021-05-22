import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './Store/store';
import {QueryClient, QueryClientProvider} from 'react-query';

import Navigation from './Navigation';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PersistGate loading={null} persistor={Store.persistor}>
        <Navigation />
      </PersistGate>
    </QueryClientProvider>
  );
};

export default App;
