import React from 'react'
import './App.css'
import ListOfBook from './ListOfBook'
import Search from './Search'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  
  render() {
    return ( /* using the router */
      <div className="app">
        <Route  path='/Search'  component={Search} />
        <Route exact path='/' component={ListOfBook} />
            
      </div>
    )
  }
}

export default BooksApp
