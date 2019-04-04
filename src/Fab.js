import React, { Component } from 'react';
import './fab.css';
import Rating from './Rating';

class Fab extends Component {
  render() {
    return (
      <div className="Fab" onClick={ e => this.props.showForm(true)}>
        <h2 className="Fab_label">+</h2>
      </div>
    );
  }
}

export default Fab;