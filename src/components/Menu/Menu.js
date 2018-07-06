import React, {Component, Fragment} from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {
    render() {
        let menuItems = [1, 2, 3, 4, 5].map(index => {
            return <li key={index}>Item {index}</li>
        });
        let menu = <ul>
            {menuItems}
        </ul>;
        return (
            <Fragment>
                <Link to={"/feed/123"}>Feed</Link>
                <Link to={"/footer"}>Footer</Link>
            </Fragment>
        )
    }
}

export default Menu