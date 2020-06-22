import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';
import { AppState } from '../store';

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore<AppState>(middlewares);

function connectedRender(
  ui: ReactElement,
  initialState: AppState = {
    localtime: {
      dateString: '',
      loading: false,
      error: false,
    },
  },
  { ...renderOptions } = {}
) {
  const store = mockStore(initialState);
  function Wrapper({ children }: { children?: ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return {
    store,
    result: rtlRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

export * from '@testing-library/react';

export { connectedRender };
