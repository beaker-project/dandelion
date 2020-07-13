import React from 'react';
import { connectedRender, fireEvent } from '../../tests/testUtils';
import MainScreen from './MainScreen';

jest.mock('../localTime/LocalTime', () => () => 'local-time-mock');
jest.mock('../landingPage/LandingPage', () => () => 'landing-page-mock');

describe('<MainScreen />', () => {
  test('should render the Navigation Bar text', async () => {
    const { result } = connectedRender(<MainScreen />);
    const text = result.getByText('Start');
    expect(text).toBeInTheDocument();
  });
  test('should hide the Navigation Bar', async () => {
    const { result } = connectedRender(<MainScreen />);
    fireEvent.click(result.getByLabelText('Global navigation'));
    const sideBar = result.getByTestId('sidebar');
    expect(sideBar).toHaveClass('pf-m-collapsed');
    expect(sideBar).not.toHaveClass('pf-m-expanded');
  });
  test('should render the proper components through navigation', async () => {
    const { result } = connectedRender(<MainScreen />);
    expect(result.getByText(/landing-page-mock/)).toBeInTheDocument();
    fireEvent.click(result.getByText('Local Time'));
    expect(result.getByText(/local-time-mock/)).toBeInTheDocument();
    expect(result.queryByText(/landing-page-mock/)).toBeNull();
    fireEvent.click(result.getByText('Start'));
    expect(result.getByText(/landing-page-mock/)).toBeInTheDocument();
    expect(result.queryByText(/local-time-mock/)).toBeNull();
  });
});
