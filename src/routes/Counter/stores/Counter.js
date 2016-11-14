import { observable, action, runInAction } from 'mobx'

import UiStore from '../../../store/UiStore'

export class CounterStore {
  @observable counter

  constructor (initialCounter = 0) {
    // Cannot decorate with @action constructors and observables can only be modified in actions (useStrict(true))
    runInAction(() => {
      this.counter = initialCounter
    })
  }

  @action
  increment = (value = 1) => {
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

const counterStore = new CounterStore()

export default counterStore
