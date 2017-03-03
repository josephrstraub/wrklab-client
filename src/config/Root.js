import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import wrklabApp from '../reducers'
import { Provider } from 'react-redux'
import App from '../components/App'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const logger = createLogger()

const store = createStore(
  wrklabApp,
  applyMiddleware(thunk, promise, logger),
  autoRehydrate()
)

persistStore(store, {blacklist: ['routing', 'modalIsVisible', 'mainMenuIsVisible', 'previousLocation', 'form']})

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={App} />
        </Router>
      </Provider>
    )
  }
}
