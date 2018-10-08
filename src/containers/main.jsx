import React, { Component } from 'react'
import EmptyScreen from './EmptyScreen'
import Router from '../routing/router'

export class Main extends Component {
  render() {
    return (
      <main className="main">
        <Router />
      </main>
    )
  }
}

export default Main
