import FeedOnlineService from './services/FeedOnlineService';
import FeedService from './services/FeedService';


let feedService = new FeedService();
let feedOnlineService = new FeedOnlineService();

class ServiceLocator {

    static getFeedOnlineService() {
        return feedOnlineService;        
    }

    static getFeedService() {
        return feedService;        
    }
}

export default ServiceLocator;