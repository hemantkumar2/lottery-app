import React, { Component } from 'react'

import './Ball.css'

export class Balls extends Component {
  render() {
    return (
      <section>
        <div className='ball'>
          {this.props.num}
        </div>
      </section>
    )
  }
}

export default Balls
