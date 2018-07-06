import React, {Component, Fragment} from 'react'
import FeedPreloader from "../FeedPreloader/FeedPreloader";
import {connect} from "react-redux";

class Feed extends Component {

    constructor(props) {
        super(props);

        console.log("CONSTRUCTOR");
        this.state = {
            feedTitle: "News",
            hasNews: false,
            news: 'Loading news...'
        }
    }

    componentWillMount() {
        console.log("COMPONENT_WILL_MOUNT");

        setTimeout(this.fetchDataFromServer.bind(this), 3000);
    }

    render() {
        console.log("RENDER");

        let feedContent;
        if (this.state.hasNews) {
            feedContent = <p>content</p>
        } else {
            feedContent = <FeedPreloader/>
        }


        return (
            <Fragment>
                <h2>{this.state.feedTitle}</h2>
                <p>
                    Likes: <b>{this.store.likes}</b>
                </p>
                {feedContent}
            </Fragment>
        )
    }

    fetchDataFromServer() {
        fetch('/feed.json')
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => this.setState({
                news: res,
                hasNews: true
            }))
    }
}

// export default withRouter(Feed)
export default connect()(Feed)