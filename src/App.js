import React, { Component } from 'react';
import './App.css';
import BookmarkApp from './BookmarkApp';
import AddBookmark from './AddBookmark';

const bookmarks = [
  {
  title:"Googasdfasdfle",
  url:"http://www.google.com", 
  rating:"2", 
  description:"No evil"
  },
  {
    title:"Google2",
    url:"http://www.google.com", 
    rating:"3", 
    description:"No evil"
  }
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        bookmarkData: bookmarks,
        showAddForm: false
      };
    }
  

  updateBookmarkData(newBookmark) {
    console.log("updateBookmark Data ran")
    console.log("newBookmark", newBookmark)

      this.setState( 
        {
          bookmarkData: [...this.state.bookmarkData, newBookmark],
          showAddForm: false
        }
      );
  }
  setShowAddForm(show) {

    console.log("setShowAddForm ran");
    this.setState({
      showAddForm: show
    });
  }

  componentDidMount() {
    const url = 'https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'GET',
      headers: {
        "Authorization": "Bearer $2a$10$BORFxzPQGk4v2rH5pgiY1.0hcc961tVNhilnlYDTlPccPxLVTsQHC",
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
    .then (res => {
      if(!res.ok) {
        throw new Error('Something went wrong, please try again later.');
      }
      return res;
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        bookmarkData: data,
        error: null
      });
    })
    .catch(err => {
      this.setState({
        error:err.message
      });
    });

  }

  render() {

    const page = this.state.showAddForm
          ? <AddBookmark 
          updateBookmarkDataFunction={ (newBookmark) => this.updateBookmarkData(newBookmark)}
          showForm={show => this.setShowAddForm(show)}></AddBookmark>
          : <BookmarkApp bookmarkData={this.state.bookmarkData} showForm={show => this.setShowAddForm(show)}></BookmarkApp>

    return (
      <div className="App">
        {page}
      </div>
    );
  }
}

export default App;
