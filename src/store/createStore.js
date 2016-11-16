import { useStrict } from 'mobx'
import makeRootStore from './stores'

// Allow only @actions to modify state
useStrict(true)

export default (initialState = {}) => {
  // ======================================================
  // Store Instantiation Setup
  // ======================================================
  const store = makeRootStore(initialState)

  if (module.hot) {
    module.hot.accept('./stores', () => {
      // const stores = require('./stores').default
      // TODO HMR support for global stores ?
      // store.replaceReducer(stores())
    })
  }

  return store
}
