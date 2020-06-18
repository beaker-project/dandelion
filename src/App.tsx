import React from 'react';
import { Provider } from 'react-redux';

import '@patternfly/react-core/dist/styles/base.css';

import MainScreen from './components/mainScreen/MainScreen';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
};

export default App;
