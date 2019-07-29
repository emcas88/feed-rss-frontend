
const FEEDS_URL = "http://0.0.0.0:3001/feeds";

class FeedService {
    fetchFeeds(page, limit) {

        let currentPage = page || 1;
        let currentLimit = limit || 9;

        return fetch(`${FEEDS_URL}?page=${currentPage}&limit=${currentLimit}`, {
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }
            }).then((response) => response.json());
    }

    saveFeed(feed) {

        if (!feed)
            return;

        return fetch(`${FEEDS_URL}`, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(feed)
            }).then(response => response.json());
    }
}

export default FeedService;