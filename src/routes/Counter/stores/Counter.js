import { observable, action } from 'mobx'

import UiStore from '../../../store/UiStore'

class Counter {
  @observable counter = 0

  @action
  increment = (value=1) => {
    this.counter = this.counter + value
  }

  @action
  doubleAsync = () => {
    return new Promise((resolve) => {
      UiStore.startRequest()
      setTimeout(() => {
        this.increment(this.counter)
        UiStore.endRequest()
        resolve()
      }, 500)
    })
  }
}

const counterStore = new Counter()

export default counterStore
