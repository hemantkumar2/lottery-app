import React, { Component } from 'react'

import './App.css'

import Ball from './Ball'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Hemant</h1>
        <Ball num='3' />
        <Ball num='4' />
        <Ball num='7' />
      </div>
    )
  }
}
