import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'mobx-react'

// ========================================================
// Developer Tools Setup
// ========================================================
let DevTools = () => null

if (__DEV__) {
  DevTools = require('mobx-react-devtools').default // eslint-disable-line global-require
}

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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
          <Router history={browserHistory}>
            {routes}
          </Router>
        </div>
      </Provider>
    )
  }
}

export default AppContainer
