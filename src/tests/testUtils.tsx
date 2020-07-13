import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);

const connectedRender = (
  ui: ReactElement,
  state = {},
  route = '/',
  { ...renderOptions } = {}
) => {
  const store = mockStore(state);
  const history = createMemoryHistory({ initialEntries: [route] });
  const Wrapper = ({ children }: { children?: ReactNode }) => {
    return (
      <Provider store={store}>
        <Router history={history}>{children}</Router>
      </Provider>
    );
  };
  return {
    store,
    history,
    result: rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
};

export * from '@testing-library/react';

export { connectedRender };
