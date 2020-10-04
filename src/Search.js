import React from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'


class Search extends React.Component{

  state = {  /* books for the search result, empty for user input, AllBook for all the books  */
      books:[],
      empty: " ",
      AllBook:[]
  };
  componentDidMount(){  /*componentDidMount is for All Book to get the shelf status for the search books   */
    BooksAPI.getAll().then((AllBook)=>this.setState(()=>({AllBook })))
  }
  search(key){   /*Search is to get the input from the user and search for it, Also to update the status for 'empty' to know if the user deletes the input    */
    this.setState({empty: key})
    if (key !== "") {
      BooksAPI.search(key).then((book)=>{
        if (book.length >0) {
          this.setState({ books: book})
        }else{
          this.setState({books:[]})
        }
      })
    }
  }
  render(){
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
        <div className="bookshelf"> <br></br> <br></br>
          <div className="bookshelf-books">
            {this.state.empty !== "" ?
              (<ol className="books-grid"> {this.state.books.map(b=> { 
                var shelf ="none"
                this.state.AllBook.map(a=>{
                  if (b.id === a.id) {
                   return shelf = a.shelf
                  }
                   return null
                })

                return(
                  <li key={b.id}>
                    <div className="book"> 
                      <div className="book-top">
                        <div className="book-cover" > <img alt="" src={b.imageLinks?(b.imageLinks.smallThumbnail):('')} style={{ width: 128, height: 193,}}/></div>
                          <div className="book-shelf-changer">
                            <select defaultValue={shelf} onChange={(event)=>{
                                BooksAPI.update(b,event.target.value).then();
                                BooksAPI.getAll().then((AllBook)=>this.setState(()=>({ AllBook})))
                                /* Update the Book and set the state */
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
                      <div className="book-authors">{b.authors}</div>
                    </div>
                  </li>
                )
              })}
              </ol>) : (<div></div>)
              }
          </div>
        </div>
      </div>

    ) 
  }
 

}

export default Search;