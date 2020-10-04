import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css'
import * as BooksAPI from './BooksAPI'

class List extends React.Component{
  render (){
    console.log("list call");
    const { books, Update } = this.props
      return (
      <li key={books.id}> 
        <div className="book">
          <div className="book-top">
            <div className="book-cover" > <img alt="" src={books.imageLinks.smallThumbnail} style={{ width: 128, height: 193,}}/></div>
            <div className="book-shelf-changer">
              <select defaultValue={books.shelf} onChange={
                (event)=>{
                  console.log(event.target.value); 
                  BooksAPI.update(books,event.target.value).then(Update)
                  console.log("updated");
                }
              }>
                <option value="move" disabled > Move to...</option>
                <option value="currentlyReading" >Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        <div className="book-title">{books.title}</div>
        <div className="book-authors">{books.shelf}</div>
        </div>
      </li>
    )
  }
 
}


export default List;