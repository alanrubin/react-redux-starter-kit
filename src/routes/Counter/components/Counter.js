import React from 'react'
import {observer} from 'mobx-react'

export const Counter = (props) => {

  const { counter, increment, doubleAsync } = props.CounterStore
  const { appIsInSync } = props.UiStore

  return (
    <div style={{ margin: '0 auto' }} >
      <h2>Counter: {counter}</h2>
      { !appIsInSync ? <h3>Waiting for requests...</h3> : null}
      <button className='btn btn-default' onClick={() => increment()}>
        Increment
      </button>
      {' '}
      <button className='btn btn-default' onClick={() => doubleAsync()}>
        Double (Async)
      </button>
    </div>
  )

}

Counter.propTypes = {
  counter     : React.PropTypes.number.isRequired,
  doubleAsync : React.PropTypes.func.isRequired,
  increment   : React.PropTypes.func.isRequired
}

export default observer(Counter)
