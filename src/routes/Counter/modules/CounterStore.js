import { observable, action } from 'mobx';

class Counter {
  @observable counter = 0

  @action
  increment = (value=1) => {
    this.counter = this.counter + value
  }

  @action
  doubleAsync = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.increment(this.counter)
        resolve()
      }, 500)
    })
  }
}

const CounterStore = new Counter()

export default CounterStore
