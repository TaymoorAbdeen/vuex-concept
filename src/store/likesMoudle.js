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
export default likesMoudle;