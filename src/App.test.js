import React from 'react';
import { create } from 'react-test-renderer';
import App from './App';
import ServiceLocator from './ServiceLocator';
import FeedOnlineService from './services/FeedOnlineService';
import FeedService from './services/FeedService';

jest.mock('./ServiceLocator');
jest.mock('./services/FeedOnlineService');
jest.mock('./services/FeedService');

const spyGetFeedOnlineService = jest.spyOn(ServiceLocator, 'getFeedOnlineService');
const spyGetFeedService       = jest.spyOn(ServiceLocator, 'getFeedService');

const mockFetchFeeds = jest.fn();
const mockFetchRssFeeds = jest.fn();

const feed = {
  image: {
    url: "http://aaaa.com"
  },
  items: [
    {
      content: "From FSU book guy to NC State's shirt-waving fan, what happens when a person goes from casual fan to social media superstar because of one college football game?",
      link: "http://www.espn.com/college-football/story/_/id/26847150/the-meme-team-meet-fans-cfb-best-reactions",
      title: "The meme team: Meet the"
    },
    {
      content: "From FSU book guy to NC State's shirt-waving fan, what happens when a person goes from casual fan to social media superstar because of one college football game?",
      link: "http://www.espn.com/college-football/story/_/id/26847150/the-meme-team-meet-fans-cfb-best-reactions",
      title: "The meme team: Meet the"
    }
  ],
  description: "Latest TOP news from www.espn.com",
  generator: "ESPN Inc. http://www.espn.com",
  link: "http://www.espn.com",
  title: "www.espn.com - TOP"
}


describe("App component", () => {

  beforeEach(() => {

    jest.clearAllMocks();

    spyGetFeedOnlineService.mockClear();
    spyGetFeedService.mockClear();
    mockFetchFeeds.mockClear();
    mockFetchRssFeeds.mockClear();
  });

  test("initialization without feeds from db", done => {

    mockFetchFeeds
      .mockReturnValue(Promise.resolve({ items: [] }))
      .mockName('fetchFeeds');

    mockFetchRssFeeds
      .mockReturnValue(Promise.resolve({}))
      .mockName('fetchRssFeeds');

    const mockedFeedService = {
      fetchFeeds: mockFetchFeeds
    };

    const mockedFeedOnlineService = {
      fetchRssFeed: mockFetchRssFeeds
    };

    spyGetFeedService.mockReturnValue(mockedFeedService);
    spyGetFeedOnlineService.mockReturnValue(mockedFeedOnlineService);

    const component = create(<App />);
    const instance = component.getInstance();

    expect(spyGetFeedService).toHaveBeenCalledTimes(1);
    expect(spyGetFeedOnlineService).toHaveBeenCalledTimes(2);

    expect(mockFetchFeeds.mock.calls.length).toBe(1);
    expect(mockFetchRssFeeds.mock.calls.length).toBe(0);

    done();
  });

  test("initialization with persisted feeds from db", async done => {

    mockFetchFeeds
      .mockReturnValue(Promise.resolve({ items: [{ url: 'url1' }, { url: 'url2' }] }))
      .mockName('fetchFeeds');

    mockFetchRssFeeds
      .mockReturnValue(Promise.resolve(feed))
      .mockName('fetchRssFeeds');

    const mockedFeedService = {
      fetchFeeds: mockFetchFeeds
    };

    const mockedFeedOnlineService = {
      fetchRssFeed: mockFetchRssFeeds
    };
    
    spyGetFeedService.mockReturnValue(mockedFeedService);
    spyGetFeedOnlineService.mockReturnValue(mockedFeedOnlineService);

    const component = create(<App />);
    const instance = component.getInstance();
    await instance.componentDidMount();

    expect(spyGetFeedService).toHaveBeenCalledTimes(1);
    expect(spyGetFeedOnlineService).toHaveBeenCalledTimes(2);

    expect(instance.state.feeds.length).toBe(2);
    done();
  });

  test("scroll bottom should paginate", async done => {

    mockFetchFeeds
      .mockReturnValueOnce(Promise.resolve({ items: [{ url: 'url1' }, { url: 'url2' }] }))
      .mockReturnValueOnce(Promise.resolve({ items: [{ url: 'url1' }, { url: 'url2' }] }))
      .mockName('fetchFeeds');

    mockFetchRssFeeds
      .mockReturnValue(Promise.resolve(feed))
      .mockName('fetchRssFeeds');

    const mockedFeedService = {
      fetchFeeds: mockFetchFeeds
    };

    const mockedFeedOnlineService = {
      fetchRssFeed: mockFetchRssFeeds
    };
    
    spyGetFeedService.mockReturnValue(mockedFeedService);
    spyGetFeedOnlineService.mockReturnValue(mockedFeedOnlineService);

    const component = create(<App />);
    const instance = component.getInstance();

    await instance.componentDidMount();
    await instance.handleOnBottomScroll();

    expect(spyGetFeedService).toHaveBeenCalledTimes(1);
    expect(spyGetFeedOnlineService).toHaveBeenCalledTimes(2);

    expect(instance.state.feeds.length).toBe(4);
    done();
  });

  test("handleNewFeedElement should add new feed", async done => {

    mockFetchFeeds
      .mockReturnValue(Promise.resolve({ items: [] }))
      .mockName('fetchFeeds');

    mockFetchRssFeeds
      .mockReturnValue(Promise.resolve({}))
      .mockName('fetchRssFeeds');

    const mockedFeedService = {
      fetchFeeds: mockFetchFeeds,
      saveFeed: () => {}
    };

    const mockedFeedOnlineService = {
      fetchRssFeed: mockFetchRssFeeds
    };
    
    spyGetFeedService.mockReturnValue(mockedFeedService);
    spyGetFeedOnlineService.mockReturnValue(mockedFeedOnlineService);

    const component = create(<App />);
    const instance = component.getInstance();
    
    await instance.componentDidMount();
    await instance.handleNewFeedElement({feed: feed});

    expect(spyGetFeedService).toHaveBeenCalledTimes(1);
    expect(spyGetFeedOnlineService).toHaveBeenCalledTimes(2);

    expect(instance.state.feeds.length).toBe(1);
    done();
  });
});
