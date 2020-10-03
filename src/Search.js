import React from 'react';
//mport PropTypes from 'prop-types';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component{

  state = {
      books:[],
      empty: " ",
      AllBook:[]
  };
  componentDidMount(){
    console.log("call");
    BooksAPI.getAll().then((AllBook)=>this.setState(()=>({AllBook })))
  }
  search(key){
    this.setState({empty: key})
    console.log("searchfun");
    console.log(key);
    if (key !== "") {
      console.log("ifpass");
      BooksAPI.search(key).then((books)=>this.setState(()=>({books})));
    }
  }
  render(){
    console.log("renderSearch");
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link
          to='/'
          className="close-search"
          >Search</Link>
          <div className="search-books-input-wrapper">
          <input 
          name="username"
          onChange={(event)=>this.search(event.target.value )}
          type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="bookshelf">
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.state.empty !== "" ? 
                (<div> {this.state.books.map(b=> { 
                  var shelf ="none"
                  this.state.AllBook.map(a=>{
                    if (b.id == a.id) {
                    console.log(b.title)
                    shelf = a.shelf
                    }
                  })
                  return(
                    <li key={b.id}>
                      <div className="book"> 
                        <div className="book-top">
                          <div className="book-cover" > <img alt="" src={b.imageLinks.smallThumbnail} style={{ width: 128, height: 193,}}/></div>
                            <div className="book-shelf-changer">
                              <select defaultValue={shelf} onChange={
                                (event)=>{
                                  console.log(b.shelf);
                                  console.log(event.target.value); 
                                  BooksAPI.update(b,event.target.value).then;
                                  BooksAPI.getAll().then((AllBook)=>this.setState(()=>({ AllBook})))
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
                        <div className="book-title">{b.title}</div>
                        <div className="book-authors">{b.id}</div>
                      </div>
                    </li>
                  )
                })}
                </div>) : (<div></div>)
              }
            </ol>
          </div>
        </div>
      </div>

    ) 
  }
 

}

export default Search;