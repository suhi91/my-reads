import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from "./components/shelf";

function Home(props){
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>

      <div className="list-books-content">
        <div>

          <Shelf books={props.books.currentlyReading} onBookMoved={props.onBookMoved} >
            Currently Reading
          </Shelf>

          <Shelf books={props.books.wantToRead} onBookMoved={props.onBookMoved}  >
            Want to Read
          </Shelf>

          <Shelf books={props.books.read} onBookMoved={props.onBookMoved}  >
            Read
          </Shelf>
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  )
}

export default Home
