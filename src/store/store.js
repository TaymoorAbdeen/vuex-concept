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
    multiCounter: (state) => (yourNumber) => {
      return state.counter * yourNumber;
    },
    // for map
    doubledCounter(state) {
      return state.counter *2;
    },
    ThirdCounter: (state) => {
      return state.counter * 3;
    },
    fourthCounter: (state) => {
      return state.counter * 4;
    }
  },
  
  mutations: {
    increase(state) {state.counter++;},
    decrease(state) {state.counter--;}
  }
})

// export this store
export default store;