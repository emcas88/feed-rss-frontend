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
            <div className="feed-card column is-4 has-background-white-bis">
              <div className="feed-title level">
                <img className="level-left" src={this.props.feed.image.url} alt="" width={30} height={30} mode='fit'/>
                <div className="level-item has-text-centered">
                  <h2>
                    <strong>{this.props.feed.title}</strong>
                  </h2>
                </div>
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