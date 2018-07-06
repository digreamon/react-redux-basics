import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

class App extends Component {
    render() {
        let userName = 'Andrew';
        let userAge = 30;

        return (
            <div className="App">
                <Menu/>
                <Header
                    name={userName}
                    age={userAge}/>
                <Body/>
                <Route path={"/footer"} component={Footer}/>
            </div>
        );
    }
}

export default App
