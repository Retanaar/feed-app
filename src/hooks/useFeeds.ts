import { useState } from "react";
import { FeedType } from "../components/feed/feedTypes"

const feed_key = "feeds"

export interface FeedItem {
    owner: string,
    contact: string,
    timestamp: number,
    feedType: FeedType,
    note: string,
}

export interface ReturnType {
    feeds: Array<FeedItem>,
    saveFeed: (feed: Omit<FeedItem, 'timestamp'>) => void;
    removeFeed: (timestamp: number) => void;
    editFeed: (feed: FeedItem) => void;
}


function useFeeds(storage_key: string = feed_key): ReturnType{
    const [feeds, setFeeds] = useState<FeedItem[]>(getAllFeeds());

    function getAllFeeds() {
        const feedsJSON = localStorage.getItem(storage_key);
        const feeds = feedsJSON ? JSON.parse(feedsJSON) : [];

        return feeds;
    }

    function saveFeed(feed: Omit<FeedItem, 'timestamp'>) {
        const feeds = [ {
            ...feed,
            timestamp: (new Date()).getTime()
        }, ...getAllFeeds()];
        localStorage.setItem(storage_key, JSON.stringify(feeds))
        setFeeds(feeds);
    }
    function removeFeed(timestamp: number) {
        const feeds = getAllFeeds();
        const filtered = feeds.filter((feed: FeedItem) => feed.timestamp !== timestamp)
        localStorage.setItem(storage_key, JSON.stringify(filtered));
        setFeeds(filtered);
    }
    function editFeed(updatedFeed: FeedItem) {
        const feed = feeds.find(feed => feed.timestamp === updatedFeed.timestamp)
        if (feed) {
            feed.feedType = updatedFeed.feedType;
            feed.note = updatedFeed.note;
        }
        setFeeds(feeds);
        localStorage.setItem(storage_key, JSON.stringify(feeds))
    }
    return {
        feeds,
        saveFeed,
        removeFeed,
        editFeed,
    }
}

export default useFeeds;