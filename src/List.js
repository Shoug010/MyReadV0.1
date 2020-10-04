import React , {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css'
import * as BooksAPI from './BooksAPI'

class List extends Component{
  render (){
    const { books, Update } = this.props /* save the prop that we get from ListBook  */
      return (
      <li key={books.id}> 
        <div className="book">
          <div className="book-top">
            <div className="book-cover" > <img alt="" src={books.imageLinks.smallThumbnail} style={{ width: 128, height: 193,}}/></div>
            <div className="book-shelf-changer">
              <select defaultValue={books.shelf} onChange={
                (event)=>{
                  BooksAPI.update(books,event.target.value).then(Update)
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
        <div className="book-authors">{books.authors}</div>
        </div>
      </li>
    )
  }
 
}
List.propTypes = {
  books: PropTypes.object.isRequired,
  Update: PropTypes.func.isRequired,
};


export default List;