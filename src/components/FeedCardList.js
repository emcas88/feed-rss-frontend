import React from 'react';
import './FeedCardList.css';
import FeedCardElement from './FeedCardElement';


class FeedCardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const feedItems = this.props.feeds.map((feedElement, index) =>
            <FeedCardElement key={index} feed={feedElement} />
        );

        return (
            <div className="feed-cards-container">
                {feedItems}
            </div>
        );
    }
}

export default FeedCardList;