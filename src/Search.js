import React from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'throttle-debounce'
import * as Api from './server/BooksAPI';
import Book from "./components/book";

class Search extends React.Component{

    constructor(props){
        super(props);

        this.onSearchChange = this.onSearchChange.bind(this);
        this.searchBook = debounce(500, this.searchBook);

        this.state = {
            searchTerm: '',
            maxResults: 5,
            searchResults: [],
            onBookMoved: props.onBookMoved
        }
    }

    onSearchChange(event){
        this.setState({searchTerm: event.target.value });

        this.searchBook();
    }

    searchBook(){
        Api.search(this.state.searchTerm, this.state.maxResults)
            .then(result => {
                console.log(this, result);
                if( ! result.error ){
                    this.setState({searchResults: result})
                }
            });
    }

    render(){
        const booksOfShelf = this.state.searchResults.map(book =>  {
            return <li key={book.id}><Book info={book} onBookMoved={this.state.onBookMoved} /></li>;
        });

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>

                    <div className="search-books-input-wrapper">
                        <input type="text"
                               placeholder="Search by title or author"
                               value={this.state.searchTerm}
                               onChange={this.onSearchChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {booksOfShelf}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
