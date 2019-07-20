import React from 'react';
import './FeedAddMain.css';

function FeedAddMain() {
    return (
        <div className="add-feed-container">
            <form className="flex-container add-feed-form">
            <input className="add-feed-input" type="text" name="Feed url" placeholder="feed url"/>
            <input className="add-feed-submit" type="submit" value="Add feed"></input>
            </form>
        </div>
    );
}

export default FeedAddMain;