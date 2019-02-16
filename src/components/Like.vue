<template>
  <div>
    <div>Likes: {{likes}}</div>
    <button v-if="liked" @click="toggleLike">Dislike</button>
    <button v-if="! liked" @click="toggleLike">Like</button>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(["likes", "liked"]),
    },
    methods: {
        toggleLike(){
            this.$store.dispatch('toggleLike');
        }
    },
}
</script>