import React, { Component } from 'react';
import './BookmarkList.css';
import Bookmark from './Bookmark';



class BookmarkList extends Component {

  render() {

    const bookmarkComponents = this.props.bookmarksToDisplay.map(bookmark => {

      return (
      <Bookmark 
      title={bookmark.title}
      url={bookmark.url}
      rating={bookmark.rating}
      description={bookmark.description}></Bookmark>
      )

    })

    return (
      <div className="BookmarkList">

          {bookmarkComponents}
        
      </div>
    );
  }
}

export default BookmarkList;