import React from 'react';
import './App.css';
import FeedAddMain from './components/FeedAddMain';
import FeedCardList from './components/FeedCardList';
import FeedService from './services/FeedService';
import FeedOnlineService from './services/FeedOnlineService';
import BottomScrollListener from 'react-bottom-scroll-listener';
 

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.feedService = new FeedService();
    this.feedOnlineService = new FeedOnlineService();

    this.handleNewFeedElement = this.handleNewFeedElement.bind(this);
    this.handleOnBottomScroll = this.handleOnBottomScroll.bind(this);

    this.state = {
      isLoading: true,
      feeds: []
    };
  }

  async componentDidMount() {
    try {
      let persistedFeeds = await this.feedService.fetchFeeds();

      let feedPromises = persistedFeeds.items.map(feed => this.feedOnlineService.fetchRssFeed(feed.name));
      let feeds = await Promise.all(feedPromises);

      this.setState({
        isLoading: false,
        currentPage: 1,
        currentLimit: 9,
        feeds: feeds
      });

    }
    catch (error) {
      console.log(error);

      this.setState({
        isLoading: false,
      });
    }
  }

  componentWillUnmount() {
  }

  async handleNewFeedElement(newFeed) {
    this.setState((state, props) => ({
      feeds: state.feeds.concat([newFeed.feed])
    }));

    try {
      await this.feedService.saveFeed({
        name: newFeed.url
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  async handleOnBottomScroll() {
    try {
      this.setState({ isLoading: true });

      let persistedFeeds = await this.feedService.fetchFeeds(this.state.currentPage + 1, this.state.currentLimit);

      if (persistedFeeds.items.lenght === 0) {
        this.setState({ isLoading: false });
        return;
      }

      let feedPromises = persistedFeeds.items.map(feed => this.feedOnlineService.fetchRssFeed(feed.name));
      let feeds = await Promise.all(feedPromises);

      this.setState((state, props) => ({
        isLoading: false,
        currentPage: state.currentPage + 1,
        currentLimit: 9,
        feeds: state.feeds.concat(feeds)
      }));

    }
    catch (error) {
      console.log(error);

      this.setState({
        isLoading: false,
      });
    }
  }

  render() {
    return (
      <div>
        <FeedAddMain loading={this.state.isLoading} newFeedAction={this.handleNewFeedElement}/>
        <FeedCardList feeds={this.state.feeds}/>
        <BottomScrollListener onBottom={this.handleOnBottomScroll} />
      </div>
    );
  }
}

export default App;