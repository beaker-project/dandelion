import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import '@patternfly/react-core/dist/styles/base.css';
import './App.css';

import MainScreen from './components/mainScreen/MainScreen';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <MainScreen />
      </Router>
    </Provider>
  );
};

export default App;
