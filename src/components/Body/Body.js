import React, {Component, Fragment} from 'react'
import {Route} from 'react-router-dom';
import './Body.css';
import Feed from "../Feed/Feed";


class Body extends Component {
    render() {
        return (
            <Fragment>
                <button onClick={()=>this.props.dispatch({
                    type: "NEW_LIKE"
                })}>Like</button>
                <Route path={"/feed/:itemId"} render={(props) => <Feed {...props}/>}/>
            </Fragment>
        )
    }
}

export default Body