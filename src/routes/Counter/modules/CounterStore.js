import {observable} from 'mobx';

const counterStore = observable({
  counter: 0
})
counterStore.increment = function (value=1) {
  counterStore.counter = counterStore.counter + value
}
counterStore.doubleAsync = function() {
  setTimeout(() => {
    counterStore.increment(counterStore.counter)
  }, 1000)
}
module.exports = counterStore;
