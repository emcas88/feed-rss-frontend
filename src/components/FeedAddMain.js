import React from 'react';
import RSSParser from 'rss-parser'
import './FeedAddMain.css';

class FeedAddMain extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            feedUrl: '',
            feedId: 0
        };
    }

    handleChange(event) {
        this.setState({feedUrl: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();

        if (this.state.feedUrl === "")
            return;

        let parser = new RSSParser();
        const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"

        // https://www.reddit.com/.rss
 
        parser.parseURL(CORS_PROXY + this.state.feedUrl, (err, feed) => {
            console.log(feed);
            console.log(err);

            if (err) {
                this.setState((state, props) => ({
                    feedUrl: ''
                }));

                return;
            }

            this.props.newFeedAction({
                id: this.state.feedId,
                title: feed.title,
                latestNews: feed.items
            });
            
            this.setState((state, props) => ({
                feedId: state.feedId + 1,
                feedUrl: ''
            }));
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