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
            <div className="container">
                <div className="section">
                    <div className="columns is-multiline is-mobile">
                        {feedItems}
                    </div>
                </div>
            </div>
        );
    }
}

export default FeedCardList;