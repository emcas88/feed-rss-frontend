import React from 'react';
import './FeedCardList.css';
import FeedCardElement from './FeedCardElement';


function FeedCardList() {
    return (
        <div className="flex-container feed-cards-container">
            <FeedCardElement />
            <FeedCardElement />
            <FeedCardElement />
        </div>
    );
}

export default FeedCardList;