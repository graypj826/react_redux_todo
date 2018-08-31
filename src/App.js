import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoochList from "./BoochList"
import { Link, Route, Redirect } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title"> 
          <h1> What Kombucha Do You Want? </h1> 
        </div>
       
          <p className="nav-bar"> 
            <Link to="/boochs"> Home </Link>
          </p>
          <p className="nav-bar"> 
            <Link to="/boochs/new"> Add A Flavor </Link>
          </p> 
        <div className="booch-list">
            <Route path="/boochs" component = {BoochList}/>
            <Route exact path="/" render={() => <Redirect to="/booch"/>} />
          </div>
        <div className="footer"> 
          <h3>
            Remember to pace yourself!
          </h3>
       
        <br/>
          <img src=" https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Breathe-face-smile.svg/220px-Breathe-face-smile.svg.png"/>
        </div>
      </div>
    );
  }
}

export default App;
