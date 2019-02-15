import Vue from 'vue'
import Vuex from 'vuex'


// use vuex as plugin ex Vue.use(plugin name)
Vue.use(Vuex);

//  go create new store 
const store = new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    doubledCounter(state) {
      return state.counter *2;
    }
  }
})

// export this store
export default store;