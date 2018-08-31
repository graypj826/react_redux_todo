import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from "./TodoList"
import { Link, Route, Redirect } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title"> 
          <h1> What Kombucha Do You Want? </h1> 
        </div>
        <p className="nav-bar"> 
          <Link to="/todos"> Home </Link>
        </p>
        <p className="nav-bar"> 
          <Link to="/todos/new"> Add A Flavor </Link>
        </p>
          <Route path="/todos" component = {TodoList}/>
          <Route exact path="/" render={() => <Redirect to="/todos"/>} />
      </div>
    );
  }
}

export default App;
