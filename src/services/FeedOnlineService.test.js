import RSSParser from 'rss-parser';
import FeedOnlineService from './FeedOnlineService';

const mockRSSParseUrlFunction = jest.fn();

jest.mock('rss-parser', () => {
  return jest.fn().mockImplementation(() => {
    return { parseURL: mockRSSParseUrlFunction };
  });
});

describe('FeedOnlineService', () => {

    beforeEach(() => {
        RSSParser.mockClear();
        mockRSSParseUrlFunction.mockClear();
    });

    it('should be able to call new()', done => {
        const feedOnlineService = new FeedOnlineService();

        expect(feedOnlineService).toBeTruthy();
        done();
    });

    it('should be able to call parseUrl with defined URL', done => {
        const feedOnlineService = new FeedOnlineService();

        feedOnlineService.fetchRssFeed('URL');

        expect(feedOnlineService).toBeTruthy();
        expect(RSSParser).toHaveBeenCalledTimes(1);
        expect(mockRSSParseUrlFunction.mock.calls[0][0]).toEqual('https://cors-anywhere.herokuapp.com/' + 'URL');
        done();
    });
});
