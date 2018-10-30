// Add BandInput component
import React, { Component } from 'react'
import {addBand} from '../actions/bands';
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
  }



  render() {
    debugger
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)}></input>
          <button type="submit"> Submit </button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (band) => {
     dispatch(addBand(band))
   }
  }
}

export default connect(null, mapDispatchToProps)(BandInput);
