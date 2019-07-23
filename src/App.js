import React from 'react';
import './App.css';
import FeedAddMain from './components/FeedAddMain';
import FeedCardList from './components/FeedCardList';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.handleNewFeedElement = this.handleNewFeedElement.bind(this);

    this.state = {
      feeds: []
    };
  }

  componentDidMount() {
    
  }

  componentWillUnmount() {

  }

  handleNewFeedElement(newFeed) {
    this.setState((state, props) => ({
      feeds: state.feeds.concat([newFeed])
    }));
  }

  render() {
    return (
      <div className="container">
        <FeedAddMain newFeedAction={this.handleNewFeedElement}/>
        <FeedCardList feeds={this.state.feeds}/>
      </div>
    );
  }
}

export default App;
