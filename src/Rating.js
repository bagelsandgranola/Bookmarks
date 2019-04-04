import React, { Component } from 'react';
import './Rating.css';



class Rating extends Component {

    

  render() {

    const stars = [0,0,0,0,0]
    .map((_, i) => i < this.props.rating
      ? <span key={i}>&#9733;</span>
      : <span key={i}>&#9734;</span>
    );

    return (
      <div className="Rating">
        {stars}
      </div>
    );
  }
}

export default Rating;