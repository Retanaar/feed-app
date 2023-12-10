import { renderHook, act } from '@testing-library/react';
import useFeeds from '../useFeeds';
import { FeedType } from '../../components/feed/feedTypes';

describe('useFeeds', () => {
  const test_storage_key = 'test_storage_key';  
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add a feed', () => {
    const { result } = renderHook(() => useFeeds(test_storage_key));

    act(() => {
      result.current.saveFeed({
        owner: 'You',
        contact: 'John Doe',
        feedType: FeedType.MEETING,
        note: 'Test feed',
      });
    });

    expect(result.current.feeds).toHaveLength(1);
    expect(result.current.feeds[0].owner).toBe('You');
    expect(result.current.feeds[0].note).toBe('Test feed');
  });

  test('should remove a feed',  async () => {
    const { result } = renderHook(() => useFeeds(test_storage_key));
    act(() => {
        result.current.saveFeed({
            owner: 'Jane Smith',
            contact: 'John Doe',
            feedType: FeedType.BEER,
            note: 'Another test feed',
        });
     
    });
    await new Promise((r) => setTimeout(r, 20));
    act(() => {
        result.current.saveFeed({
            owner: 'Alice',
            contact: 'S.Mitchel',
            feedType: FeedType.PHONE,
            note: 'One more test feed',
        });
    });
  
    act(() => {
      result.current.removeFeed(result.current.feeds[0].timestamp);
    });

    expect(result.current.feeds).toHaveLength(1);
    expect(result.current.feeds[0].owner).toBe('Jane Smith');
  });
});
