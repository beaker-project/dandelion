import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('should render the Navigation Bar text', async () => {
    const { getByText } = render(<App />);
    const text = getByText('Navigation');
    expect(text).toBeInTheDocument();
  });
  test('should hide the Navigation Bar', async () => {
    const { getByLabelText, getByTestId } = render(<App />);
    fireEvent.click(getByLabelText('Global navigation'));
    const sideBar = getByTestId('sidebar');
    expect(sideBar).toHaveClass('pf-m-collapsed');
    expect(sideBar).not.toHaveClass('pf-m-expanded');
  });
});
