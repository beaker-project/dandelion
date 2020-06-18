import React, { ReactElement, ReactNode } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import configureStore from 'redux-mock-store';

const middlewares = [createSagaMiddleware()];
const mockStore = configureStore(middlewares);

function render(
  ui: ReactElement,
  initialState: {} = {},
  { ...renderOptions } = {}
) {
  function Wrapper({ children }: { children?: ReactNode }) {
    return <Provider store={mockStore(initialState)}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';

export { render };
