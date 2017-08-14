import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Api from './server/BooksAPI';

import Home from './Home'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        books: {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        }
      }
  }

  componentDidMount(){
    Api.getAll()
        .then(result => {
          console.log(result);

          let books = this.state.books;
          result.forEach(book => {
              books[book.shelf].push(book);
          });

          this.setState({ books });
        })
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() => <Home books={this.state.books} /> } />
          <Route path="/search" component={Search} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
