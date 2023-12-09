import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Submenu from '..';
import { screen, waitFor } from '@testing-library/react';

describe('Submenu component', () => {
  const mockHandler = jest.fn();

  it('opens menu on click', () => {
    render(
      <Submenu handler={mockHandler} />
    );

    const submenuButton = screen.getByTestId('submenu-button');
    fireEvent.click(submenuButton);

    const menu = screen.getByText('Remove');
    expect(menu).toBeInTheDocument();
  });

  it('calls handler and closes menu on menu item click', async () => {
    render(
      <Submenu handler={mockHandler} />
    );

    const submenuButton = screen.getByTestId('submenu-button');
    fireEvent.click(submenuButton);

    const menu = screen.getByText('Remove');
    fireEvent.click(menu);

    expect(mockHandler).toHaveBeenCalledTimes(1); 
    await waitFor(() => {
        expect(screen.queryByText('Remove')).not.toBeInTheDocument();
    })
  });


});
