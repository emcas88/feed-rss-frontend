import RSSParser from 'rss-parser';

class FeedOnlineService {
    fetchRssFeed(feedUri) {
        if (!feedUri) return;

        let parser = new RSSParser();
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

        return parser.parseURL(CORS_PROXY + feedUri);
    }
}

export default FeedOnlineService;
