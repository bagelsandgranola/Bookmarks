import React, { Component } from 'react';
import './Bookmark.css';
import Rating from './Rating';

class Bookmark extends Component {
  render() {
    return (
      <div className="Bookmark">
        <div className="Bookmark_content">
            <a href={this.props.url} className="Bookmark_title">{this.props.title}</a>
            <p className="Bookmark_description">{this.props.description}</p>
        </div>
        <div className="Rating">
        <Rating rating={this.props.rating}></Rating>
        </div>
      </div>
    );
  }
}

export default Bookmark;