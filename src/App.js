import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import ListOfBook from './ListOfBook'
import Search from './Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
  }
  
  
  render() {
    console.log("renderApp");
    return (
      <div className="app">
        <Route  path='/Search'  component={Search} />
        <Route exact path='/' component={ListOfBook} />
            
      </div>
    )
  }
}

export default BooksApp
