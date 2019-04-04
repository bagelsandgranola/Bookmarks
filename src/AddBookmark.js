import React, { Component } from 'react';
import './AddBookmark.css';

class AddBookmark extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            url: "",
            description: "",
            rating: 3
        };
    }


    handleSubmit(e) {
        e.preventDefault();

        const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);

        const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
        const options = {
            method: 'POST',
            body: JSON.stringify(bookmark),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer $2a$10$BORFxzPQGk4v2rH5pgiY1.0hcc961tVNhilnlYDTlPccPxLVTsQHC"
            }
        };

        fetch(url, options)
        .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please try again later.')
            }
            return res.json();
        })
        .then(data => {
            this.setState({
                title: " ",
                url: " ",
                description: " ",
                rating: 1
            });
            this.props.updateBookmarkDataFunction(bookmark);
        })
        .catch(err => {
            this.setState({
                error: err.message
            });
        });
    } 

    titleChanged(title) {
        this.setState(
            {
                title: title,
            }
        )
    }

    urlChanged(url) {
        this.setState(
            {
                url: url,
            }
        )}

    descriptionChanged(description) {
        this.setState(
            {
                description: description,
            }
        )
    }

    ratingChanged(rating) {
        this.setState(
            {
                rating: rating,
            }
        )
    }
  render() {

    const error = this.state.error
        ? <div className="error"> {this.state.error}</div>
        : " ";

    return (
      <div className="AddBookmark">
        <div className="AddBookmark_title">Add Bookmark</div>
        <div className="error">{error}</div>
        <div className="form">

            <form className="add_form" onSubmit={e => this.handleSubmit(e)}>
        
            <input type="text" className="text_input" name="add_title" placeholder="Title" 
            value={this.state.title}
            onChange={e => this.titleChanged(e.target.value)}></input> <br></br>
            <input type="text" className="text_input" name="add_url" placeholder="url" 
            value={this.state.url}
            onChange={e => this.urlChanged(e.target.value)}></input><br></br>
            <input type="text" className="text_input" name="add_description" placeholder="description" 
            value={this.state.description}
            onChange={e => this.descriptionChanged(e.target.value)}></input><br></br>
            <label htmlFor="add_rating">Rating     </label>
            <input type="number" className="number_input" name="add_rating" min="1" max="5" placeholder="3" 
            value={this.state.rating}
            onChange={e => this.ratingChanged(e.target.value)}></input><br></br>
        
        <div className="addbookmark_buttons">
            <button onClick={e => this.props.showForm(false)}>Cancel</button>

            <button type="submit" value="submit"className="submit"> Submit </button>
            </div>
        </form>
        </div>
        
        
      </div>
    );
  }
}

export default AddBookmark;