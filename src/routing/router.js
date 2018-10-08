import React from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import EmptyScreen from '../containers/EmptyScreen'
import SearchContacts from '../containers/SearchContacts'
import Messages from '../components/Messages/Messages'
import User from '../components/Users/User'
import App from '../containers/App'

export default () => (
  <Switch>
    <Route exact path="/" component={EmptyScreen} />
    <Route path="/search" component={SearchContacts} />
    <Route path="/user/:id" component={User} />
    <Route path="/messages/:id" component={Messages} />
    <Redirect to="/" />
  </Switch>
)
