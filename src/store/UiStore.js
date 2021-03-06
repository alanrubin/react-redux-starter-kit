import { observable, computed, action } from 'mobx'

class UiStore {
    // @observable language = "en_US";
    @observable pendingRequestCount = 0

    // asStructure makes sure observer won't be signaled only if the
    // dimensions object changed in a deepEqual manner
    // @observable windowDimensions = asStructure({
    //     width: jquery(window).width(),
    //     height: jquery(window).height()
    // })

    // constructor() {
    //     jquery.resize(() => {
    //         this.windowDimensions = getWindowDimensions();
    //     })
    // }

    @computed get appIsInSync() {
      return this.pendingRequestCount === 0
    }

    @action startRequest() {
      this.pendingRequestCount = this.pendingRequestCount + 1
    }

    @action endRequest() {
      this.pendingRequestCount = this.pendingRequestCount - 1
    }
}

const uiStore = new UiStore()

export default uiStore
