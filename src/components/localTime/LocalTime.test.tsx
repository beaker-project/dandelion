import React from 'react';
import { connectedRender, fireEvent } from '../../tests/testUtils';
import LocalTime from './LocalTime';
import { LocaltimeTypes } from '../../store/ducks/localtime/types';

describe('<LocalTime />', () => {
  test('renders', async () => {
    const { store, result } = connectedRender(<LocalTime />);
    store.clearActions();
    expect(result.getByText(/Current date/)).toBeInTheDocument();
  });
  test('dispatches actions when needed', async () => {
    const { store, result } = connectedRender(<LocalTime />);
    expect(
      store
        .getActions()
        .filter((action) => action.type === LocaltimeTypes.LOAD_REQUEST)
    ).toHaveLength(1);
    const button = result.getByText('Refresh!');
    fireEvent.click(button);
    expect(
      store
        .getActions()
        .filter((action) => action.type === LocaltimeTypes.LOAD_REQUEST)
    ).toHaveLength(2);
  });
});
