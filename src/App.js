import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as BooksAPI from './server/BooksAPI'

import Home from './Home'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {
  state = {
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home} />          
          <Route path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
