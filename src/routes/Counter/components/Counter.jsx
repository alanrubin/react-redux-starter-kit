import React from 'react'
import { observer, PropTypes } from 'mobx-react'

const Counter = (props) => {
  const { counter, increment, doubleAsync } = props.CounterStore
  const { appIsInSync } = props.UiStore

  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Counter: {counter}</h2>
      { !appIsInSync ? <h3>Waiting for requests...</h3> : null}
      <button className="btn btn-default" onClick={() => increment()}>
        Increment
      </button>
      {' '}
      <button className="btn btn-default" onClick={() => doubleAsync()}>
        Double (Async)
      </button>
    </div>
  )
}

Counter.propTypes = {
  CounterStore: PropTypes.observableObject.isRequired,
  UiStore: PropTypes.observableObject.isRequired,
}

export default observer(Counter)
