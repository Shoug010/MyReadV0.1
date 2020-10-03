import React , {Component} from 'react';
//mport PropTypes from 'prop-types';
import './App.css'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import List from './List';


class ListOfBook extends Component{
  state = {
    books:[],
  };

  componentDidMount(){
    console.log("call the com list");
    BooksAPI.getAll().then((books)=>this.setState(()=>({books})))
  }

  render (){
    console.log("render listofbook");
    const currentlyReading= this.state.books.filter(b=>b.shelf==='currentlyReading');
    const wantToRead= this.state.books.filter(b=>b.shelf==='wantToRead');
    const read= this.state.books.filter(b=>b.shelf==='read');

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">      
          <div className="list-books-content">
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2> 
                 <ol className="books-grid">
                   {currentlyReading.map(b=>  
                    <div key={b.id}>
                      <List books={b} Update={()=>{BooksAPI.getAll().then((books)=>this.setState(()=>({books})))}}/>     
                    </div>
                    )} 
                  </ol>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read </h2>
              <div className="bookshelf-books">
                <ol className="books-grid" > 
                  {wantToRead.map(b=> 
                    <div key={b.id}>
                    <List books={b} Update={()=>{BooksAPI.getAll().then((books)=>this.setState(()=>({books})))}}/>     
                    </div>  
                  )}
                </ol> 
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid"> 
                  {read.map(b=> 
                    <div key={b.id}>
                      <List books={b} Update={()=>{BooksAPI.getAll().then((books)=>this.setState(()=>({books})))}}/>     
                    </div>
                  )}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to='/Search'>Search</Link>
        </div>
      </div>
    )
  }

}
export default ListOfBook;