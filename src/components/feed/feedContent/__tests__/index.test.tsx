import { render, fireEvent } from '@testing-library/react';
import FeedContent from '..';
import { FeedItem } from '../../../../hooks/useFeeds';
import { FeedType } from '../../feedTypes';
import { screen, waitFor } from '@testing-library/react';

const mockFeedItem: FeedItem = {
  owner: 'John',
  feedType: FeedType.COFFEE,
  contact: 'Alice',
  note: 'Meeting at 10 AM',
  timestamp: 1234567890,
};

describe('FeedContent component', () => {
  const mockRemoveFeed = jest.fn();

  it('renders feed content correctly', () => {
    render(
      <FeedContent feed={mockFeedItem} removeFeed={mockRemoveFeed} />
    );

    expect(screen.getByText('John')).toBeInTheDocument(); 
//    expect(screen.getByText('coffee')).toBeInTheDocument();
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Meeting at 10 AM')).toBeInTheDocument();
  });

  it('calls removeFeed function on submenu click', async () => {
    render(
      <FeedContent feed={mockFeedItem} removeFeed={mockRemoveFeed} />
    );

    const submenuButton = screen.getByTestId('submenu-button');
    fireEvent.click(submenuButton);

    await waitFor(() => {
        expect(screen.getByTestId("basic-menu")).toBeInTheDocument()
    });
    fireEvent.click(screen.getByTestId('remove-button'));
    expect(mockRemoveFeed).toHaveBeenCalledWith(1234567890);
  });

});
