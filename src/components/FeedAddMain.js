import React from 'react';
import './FeedAddMain.css';
import FeedOnlineService from '../services/FeedOnlineService';

class FeedAddMain extends React.Component {

    constructor(props) {
        super(props);

        this.feedOnlineService = new FeedOnlineService();

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

    async handleSubmit(event) {
        event.preventDefault();

        if (!this.state.feedUrl)
            return;

        try {
            let feedInfo = await this.feedOnlineService.fetchRssFeed(this.state.feedUrl);

            console.log(feedInfo);

            this.props.newFeedAction({
                url: this.state.feedUrl,
                title: feedInfo.title,
                items: feedInfo.items
            });
            
            this.setState({feedUrl: ''});
        }
        catch (err) {
            console.log(err);
            this.setState({feedUrl: ''});
        }
    }

    render() {
        return (
            <div className="add-feed-container">
                <form className="flex-container add-feed-form" onSubmit={this.handleSubmit}>
                    <input className="add-feed-input" type="text" name="Feed url" placeholder="feed url" value={this.state.feedUrl}  onChange={this.handleChange}/>
                    <input disabled={this.props.loading} className="add-feed-submit" type="submit" value="Add feed"></input>
                </form>
            </div>
        );
    }
}

export default FeedAddMain;