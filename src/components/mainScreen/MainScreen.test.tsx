import React from 'react';
import { render, fireEvent } from '../../tests/testUtils';
import MainScreen from './MainScreen';

jest.mock('../localTime/LocalTime', () => 'div');
jest.mock('../landingPage/LandingPage', () => 'div');

describe('<MainScreen />', () => {
  test('should render the Navigation Bar text', async () => {
    const { getByText } = render(<MainScreen />);
    const text = getByText('Navigation');
    expect(text).toBeInTheDocument();
  });
  test('should hide the Navigation Bar', async () => {
    const { getByLabelText, getByTestId } = render(<MainScreen />);
    fireEvent.click(getByLabelText('Global navigation'));
    const sideBar = getByTestId('sidebar');
    expect(sideBar).toHaveClass('pf-m-collapsed');
    expect(sideBar).not.toHaveClass('pf-m-expanded');
  });
});
