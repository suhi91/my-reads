import React from 'react';
import Book from "./book";

function Shelf(props){
    const booksOfShelf = props.books.map(book =>  {
        return <li key={book.id}><Book info={book} /></li>;
    });

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{ props.children }</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    { booksOfShelf }
                </ol>
            </div>
        </div>
    )
}

export default Shelf;