import { CounterStore } from './Counter'

describe('(Store) Counter', () => {
  let store

  beforeEach(() => {
    // Initialize store on each test
    store = new CounterStore()
  })

  it('Should initialize with a counter of 0 (Number).', () => {
    expect(store.counter).to.equal(0)
  })

  describe('increment', () => {
    it('Should be exported as a function.', () => {
      expect(store.increment).to.be.a('function')
    })
  })

  describe('doubleAsync', () => {
    it('Should be exported as a function.', () => {
      expect(store.doubleAsync).to.be.a('function')
    })

    it('Should return a promise from that thunk that gets fulfilled.', () =>
       store.doubleAsync().should.eventually.be.fulfilled,
    )

    it('Should produce a state that is double the previous state.', () => {
      store = new CounterStore(2)

      return store.doubleAsync()
        .then(() => {
          expect(store.counter).to.equal(4)
        })
    })
  })
})
