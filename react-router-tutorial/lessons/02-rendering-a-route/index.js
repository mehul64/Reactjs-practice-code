import React from 'react'
import { render } from 'react-dom'
import App from '../01-setting-up/modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from '../01-setting-up/modules/About'
import Repos from '../01-setting-up/modules/Repos'
window.React = React
render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About}/>
      <Route path="/repos" component={Repos}/>
    </Route>
  </Router>
), document.getElementById('app'))
