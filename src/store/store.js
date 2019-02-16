import Vue from 'vue'
import Vuex from 'vuex'
import likesMoudle from './likesMoudle'
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
    decrease(state) {state.counter--;},
    nIncrease(state, payload){
      state.counter += payload.num;
    },
  },
  actions: {
    increaseAfterOneSecond(context) {
      setTimeout(function() {
        context.commit('increase')
      }, 1000);
    },
  },
  modules:{
    likes: likesMoudle
  }
})

// export this store
export default store;