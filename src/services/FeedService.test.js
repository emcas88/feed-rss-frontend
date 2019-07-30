import FeedService from './FeedService';

const mockSuccessResponse = {};
const mockJsonPromise = Promise.resolve(mockSuccessResponse);
const mockFetchPromise = Promise.resolve({
  json: () => mockJsonPromise,
});

const mockFetch = jest.fn().mockImplementation(() => mockFetchPromise);

describe('FeedService', () => {

    beforeEach(() => {
        mockFetch.mockClear();
        global.fetch = mockFetch;
    });

    it('should be able to call new()', done => {
        const feedService = new FeedService();
        expect(feedService).toBeTruthy();
        done();
    });

    it('should be able to call fetchFeeds() without pagination', done => {
        const feedService = new FeedService();
        expect(feedService).toBeTruthy();

        feedService.fetchFeeds();

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('http://0.0.0.0:3001/feeds?page=1&limit=9', { headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }});

        done();
    });

    it('should be able to call saveFeed()', done => {
        const feedService = new FeedService();
        expect(feedService).toBeTruthy();

        const feed = { url: 'url' };

        feedService.saveFeed(feed);

        expect(mockFetch).toHaveBeenCalledTimes(1);
        expect(mockFetch).toHaveBeenCalledWith('http://0.0.0.0:3001/feeds', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(feed)
        });

        done();
    });

    afterEach(() => {
        global.fetch.mockClear();
        delete global.fetch;
    });
});



                        