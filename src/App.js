import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import * as Api from './server/BooksAPI';

import Home from './Home'
import Search from './Search'
import './App.css'


class BooksApp extends React.Component {

  constructor(props){
      super(props);

      this.onBookMoved = this.onBookMoved.bind(this);

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
          let books = this.state.books;
          result.forEach(book => {
              books[book.shelf].push(book);
          });

          this.setState({ books });
        })
  }

  onBookMoved(book, event){
      const newShelfName = event.target.value;
      const books = this.state.books;

      if(newShelfName !== book.shelf){
        Api.update(book, newShelfName).then(() => {
            // filter out the book from the old shelf (if it has a shelf)
            if(book.shelf){
                books[book.shelf] = books[book.shelf].filter(item => item.id !== book.id);
            }
            // otherwise give it a shelf property
            else{
                book.shelf = newShelfName;
            }

            //add it to the new one if the new shelf is not none
            if(newShelfName !== 'none'){
                books[newShelfName].push(book);
            }

            this.setState({
                books
            });
        })
      }
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" render={() =>
              <Home
                  books={this.state.books}
                  onBookMoved={this.onBookMoved}
              />
          } />
          <Route path="/search" render={() =>
              <Search
                  onBookMoved={this.onBookMoved}
              />
          } />
        </div>
      </Router>
    )
  }
}

export default BooksApp
