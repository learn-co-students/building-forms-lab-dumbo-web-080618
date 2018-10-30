import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <ul>
        {this.props.bands.map(band => {return<li>{band.name}</li>})}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {bands: state.bands};
};

export default connect(mapStateToProps)(BandsContainer);
