import React, { Component } from 'react'

import Balls from './Ball'

export class Lottery extends Component {
  static defaultProps = {
    title: 'Lotto',
    maxBalls: 6,
    maxNum: 40
  }
  constructor(props) {
    super(props)

    this.state = {
      num: Array.from({ length: this.props.maxBalls })
    }
  }

  render() {
    return (
      <div>
        {this.state.num.map(i => <Balls num={i} />)}
      </div>
    )
  }
}

export default Lottery
