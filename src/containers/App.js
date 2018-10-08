import React, { Component } from 'react'
import { Provider } from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from './main'
import store from '../store'
const { user } = require('../data/contact-data')

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Sidebar user={user} />
          <Main />
        </div>
      </Provider>
    )
  }
}

export default App
