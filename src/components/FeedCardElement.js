import React from 'react';
import './FeedCardElement.css';

class FeedCardElement extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        const latestNews = this.props.feed.latestNews.map(latestNew => 
          <li key={latestNew.id}><a rel="noopener noreferrer" href={latestNew.link} target='_blank'>{latestNew.title}</a></li>
        );

        return (
            <div className="feed-card-element">
              <div className="feed-title">
                <h2>{this.props.feed.title}</h2>
              </div>
    
              <div className="feed-headlines">
                <ul>
                    {latestNews}
                </ul>
              </div>
            </div>
        );
    }
}

export default FeedCardElement;
