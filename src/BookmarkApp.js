import React, { Component } from 'react';
import './BookmarkApp.css';
import  BookmarkList from './BookmarkList';
import Fab from './Fab';



class BookmarkApp extends Component {

    
  render() {
    return (
      <div className="BookmarkApp">
       <h1 className="title"> Bookmarks </h1>
        <BookmarkList bookmarksToDisplay={this.props.bookmarkData}></BookmarkList>
        <Fab showForm={this.props.showForm}></Fab>
      </div>
    );
  }
}

export default BookmarkApp;
