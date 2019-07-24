import React from 'react';
import './App.css';
import FeedAddMain from './components/FeedAddMain';
import FeedCardList from './components/FeedCardList';
import FeedService from './services/FeedService';
import FeedOnlineService from './services/FeedOnlineService';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.feedService = new FeedService();
    this.feedOnlineService = new FeedOnlineService();

    this.handleNewFeedElement = this.handleNewFeedElement.bind(this);

    this.state = {
      isLoading: true,
      feeds: []
    };
  }

  async componentDidMount() {
    try {
      let persistedFeeds = await this.feedService.fetchFeeds();

      console.log(persistedFeeds);

      let feedPromises = persistedFeeds.items.map(feed => this.feedOnlineService.fetchRssFeed(feed.name));
      let feeds = await Promise.all(feedPromises);

      console.log(feeds);

      this.setState({
        isLoading: false,
        feeds: feeds
      });

    }
    catch (error) {
      console.log(error);

      this.setState({
        isLoading: true,
      });
    }
  }

  componentWillUnmount() {

  }

  async handleNewFeedElement(newFeed) {
    this.setState((state, props) => ({
      feeds: state.feeds.concat([newFeed])
    }));

    try {
      let response = await this.feedService.saveFeed({
        name: newFeed.url
      });

      console.log(response);
    }
    catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <FeedAddMain className="main-container" loading={this.state.isLoading} newFeedAction={this.handleNewFeedElement}/>
        <FeedCardList className="feed-container" feeds={this.state.feeds}/>
      </div>
    );
  }
}

export default App;