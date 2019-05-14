import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Containers/Home'
import {BrowserRouter, Route} from 'react-router-dom'

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path = '/' component = {Home}/>
      </BrowserRouter>
    )
  }
}

