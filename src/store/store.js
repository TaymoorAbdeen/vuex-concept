import Vue from 'vue'
import Vuex from 'vuex'

// use vuex as plugin ex Vue.use(plugin name)
Vue.use(Vuex);

// create module likesMoudle
const likesMoudle = {
  state:{
    liked: false,
    likes: 10
  },
  getters:{
    likes(state) {
      return state.likes;
    },
    liked(state) {
      return state.liked;
    },
  },
  mutations:{
    toggleLike(state){
      state.liked = ! state.liked;
    },
    increaseLike(state){
      state.likes++;
    },
    decreaseLike(state){
      state.likes--;
    }
  },
  actions:{
      toggleLike(context){
      
      setTimeout(() => {
        
        context.commit('toggleLike')
        if(context.state.liked){
          context.commit('increaseLike');
        } else {
          context.commit('decreaseLike')
        }

      }, 1000);

    }
  },
}

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