import React, { Component } from 'react'

import './App.css'

import Lottery from './Lottery'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Lottery />
        <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
      </div>
    )
  }
}
