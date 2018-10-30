// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleChange = (event) => {
    this.setState({name: event.target.value})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band</label>
            <input type="text" onChange={this.handleChange} name="name" value={this.state.name}/>
          </p>
          <button type="submit" name="submit">Add</button>
        </form>
      </div>
    )
  }
}



export default BandInput
