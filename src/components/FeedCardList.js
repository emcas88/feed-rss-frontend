import React from 'react';
import './FeedCardList.css';
import FeedCardElement from './FeedCardElement';


class FeedCardList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const feedItems = this.props.feeds.map((feedElement) =>
            <FeedCardElement feed={feedElement} />
        );

        return (
            <div className="flex-container feed-cards-container">
                {feedItems}
            </div>
        );
    }
}

export default FeedCardList;