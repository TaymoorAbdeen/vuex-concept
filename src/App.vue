<template>
  <div id="app">
    <counter :counter="counter"
    v-on:increase="increase"
    v-on:decrease="decrease">
    </counter>
    <info :counter="counter"></info>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Info from './components/Info'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Counter, Info
  },

}


</script>

}

<style>
</style>
