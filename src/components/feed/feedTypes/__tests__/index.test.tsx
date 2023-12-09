import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FeedTypes, { FeedType } from '..';
import { screen } from '@testing-library/react';

describe('FeedTypes component', () => {
  const mockSetFeedType = jest.fn();
  const selectedType = FeedType.MESSAGE;

  it('renders all feed type icons', () => {
    render(
      <FeedTypes setFeedType={mockSetFeedType} selectedType={selectedType} />
    );

    expect(screen.getByTestId('message-icon')).toBeTruthy();
    expect(screen.getByTestId('phone-icon')).toBeTruthy();
  });

  it('triggers setFeedType on icon click', () => {
    render(
      <FeedTypes setFeedType={mockSetFeedType} selectedType={selectedType} />
    );

    fireEvent.click(screen.getByTestId('phone-icon'));

    expect(mockSetFeedType).toHaveBeenCalledWith(FeedType.PHONE);
  });

});
