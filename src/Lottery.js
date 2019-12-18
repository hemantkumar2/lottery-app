import React, { Component } from 'react'

import './Lottery.css'

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
    this.handleClick = this.handleClick.bind(this)
  }
  generate() {
    this.setState(curState => ({
      num: curState.num.map(
        n => Math.floor(Math.random() * this.props.maxNum) + 1
      )
    }))
  }

  handleClick() {
    this.generate()
  }
  render() {
    return (
      <div className='Lottery'>
        <h1>{this.props.title}</h1>
        <div className='d-flex justify-content-center'>
          {this.state.num.map(i => <Balls num={i} />)}
        </div>
        <button onClick={this.handleClick}>Generate Numbers</button>
      </div>
    )
  }
}

export default Lottery
