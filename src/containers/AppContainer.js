import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'mobx-react'

// ========================================================
// Developer Tools Setup
// ========================================================
let DevTools = () => null

if (__DEV__) {
  DevTools = require('mobx-react-devtools').default
}

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    const { routes, store } = this.props

    return (
      <Provider {...store}>
        <div style={{ height: '100%' }}>
          <DevTools />
          <Router history={browserHistory} children={routes} />
        </div>
      </Provider>
    )
  }
}

export default AppContainer
