<template>
  <div id="app">
    <counter></counter>
    <info></info>
    <hr>
    <like></like>
  </div>
</template>

<script>
import Counter from './components/Counter'
import Info from './components/Info'
import Like from './components/Like'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Counter, Info,Like
  },

}


</script>

}

<style>
</style>
