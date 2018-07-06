import React, {Component} from 'react'
import logo from './logo.svg';
import './Header.css';
import {connect} from "react-redux";

class Header extends Component {
    render() {
        let {name, age} = this.props;
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <h1 className="App-title">Hello <em>{name}</em>, your age is <em>{age}</em>.</h1>
            </header>
        )

    }
}

const mapStateToProps = (state) => {
    debugger;
    return {
        likes: state.likes
    }
};

export default connect(mapStateToProps)(Header)