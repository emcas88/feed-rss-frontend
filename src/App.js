import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="add-feed-container">
        <form className="flex-container add-feed-form">
          <input className="add-feed-input" type="text" name="Feed url" placeholder="feed url"/>
          <input className="add-feed-submit" type="submit" value="Add feed"></input>
        </form>
      </div>

      <div className="flex-container feed-cards-container">
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

        
      </div>
    </div>
  );
}

export default App;
