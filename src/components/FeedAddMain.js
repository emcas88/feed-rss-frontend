import React from 'react';
import './FeedAddMain.css';
import ServiceLocator from '../ServiceLocator';

class FeedAddMain extends React.Component {

    constructor(props) {
        super(props);

        this.feedOnlineService = ServiceLocator.getFeedOnlineService();

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        this.state = {
            feedUrl: ''
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
                feed: feedInfo
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
            <div className="container">
                <form className="section" onSubmit={this.handleSubmit}>
                    <div className="field is-grouped">
                        <div className="control is-expanded">
                            <input className="input" type="text" name="Feed url" placeholder="RSS feed url" value={this.state.feedUrl} onChange={this.handleChange} />
                        </div>
                        <div className="control">
                            <input disabled={this.props.loading} className="button is-primary" type="submit" value="Add feed" />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default FeedAddMain;