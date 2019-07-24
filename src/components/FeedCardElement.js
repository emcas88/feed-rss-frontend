import React from 'react';
import './FeedCardElement.css';

class FeedCardElement extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
        const latestNews = this.props.feed.items.map((latestNew, index) => 
          <li key={index}><a rel="noopener noreferrer" href={latestNew.link} target='_blank'>{latestNew.title}</a></li>
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
