import React from 'react';
import './FeedCardElement.css';


function FeedCardElement() {
    return (
        <div className="feed-card-element">
          <div className="feed-title">
            <h2>This is the title</h2>
          </div>

          <div className="feed-headlines">
            <ul>
              <li><a>Coffee</a></li>
              <li><a>Coffee</a></li>
              <li><a>Coffee</a></li>
              <li><a>Coffee</a></li>
              <li><a>Coffee</a></li>
              <li><a>Coffee</a></li>
            </ul>
          </div>

        </div>
    );
}

export default FeedCardElement;