import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import './styles/main.css'
import * as serviceWorker from './serviceWorker'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import { HashRouter } from 'react-router-dom'
import store from './store'

const render = () => {
  ReactDOM.render(
    <HashRouter>
      <App />
    </HashRouter>,
    document.getElementById('root')
  )

  console.log(`Rendered with state`)
  console.log(store.getState())
}
render()

store.subscribe(render)

serviceWorker.register()
