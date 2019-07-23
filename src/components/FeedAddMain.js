import React from 'react';
import './FeedAddMain.css';

class FeedAddMain extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            feedUrl: ''
        };
    }

    handleChange(event) {
        this.setState({feedUrl: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.newFeedAction({
            title: this.state.feedUrl,
            latestNews: ['BBBBB', 'CCCCCC']
        });
    }

    render() {
        return (
            <div className="add-feed-container">
                <form className="flex-container add-feed-form" onSubmit={this.handleSubmit}>
                    <input className="add-feed-input" type="text" name="Feed url" placeholder="feed url" value={this.state.feedUrl}  onChange={this.handleChange}/>
                    <input className="add-feed-submit" type="submit" value="Add feed"></input>
                </form>
            </div>
        );
    }
}

export default FeedAddMain;