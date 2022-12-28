import React, { Component } from 'react'

class counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    },


      () => console.log(this.state.count)

    )



  }
  render() {
    return (
      <div>
        <h3>count  {this.state.count}</h3>
        <button onClick={() => this.increment()} > artıbuton 1 </button>
        <button onClick={() => this.increment()} >esksibuton 2</button>
      </div>
    )
  }
}

export default counter;