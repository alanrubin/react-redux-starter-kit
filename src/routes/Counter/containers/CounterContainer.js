import { inject } from 'mobx-react'

/*  This is a container component. Notice it does not contain any JSX,
    nor does it import React. This component is **only** responsible for
    wiring in the actions and state necessary to render a presentational
    component - in this case, the counter:   */

import Counter from '../components/Counter'
import CounterStore from '../stores/Counter'

const mapStoreToProps = (stores) => ({
  CounterStore,
  UiStore: stores.UiStore
})

export default inject(mapStoreToProps)(Counter)
