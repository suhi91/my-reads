import React from 'react';

function Book(props){
    const writers = (props.info.authors) ? props.info.authors.join(', ') : '';

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover"
                     style={{
                         width: 128,
                         height: 193,
                         backgroundImage: `url(${ props.info.imageLinks.thumbnail})`
                     }}
                ></div>
                <div className="book-shelf-changer">
                    <select
                        onChange={(event) => props.onBookMoved(props.info, event)}
                        value={'none'}
                    >
                        <option value="none" disabled >Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{ props.info.title }</div>
            <div className="book-authors">{ writers }</div>
        </div>
    )
}

export default Book;