import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  test('should render the App text', async () => {
    const { getByText } = render(<App />);
    const text = getByText('React Placeholder');
    expect(text).toBeInTheDocument();
  });
});
