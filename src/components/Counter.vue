<template>
<div>
    <h2>Counter </h2>
    Counter is {{counter}}<br />
    Counter*2 is {{doubledCounter}}<br />
    Counter*3 is {{ThirdCounter}}<br />
    Counter*4 is {{fourthCounter}}<br />
    <hr>
    Counter*3 is {{multiCounter}}<br />
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
      counter() {
          return this.$store.state.counter;
      },

      // map getters
      ...mapGetters(["doubledCounter", "ThirdCounter", "fourthCounter"]),

      doubledCounter() {
          return this.$store.getters.doubledCounter;
      },
      multiCounter() {
          return this.$store.getters.multiCounter(3);
      }
  },

  methods: {
    increase() {this.$store.commit('increase');},
    decrease() {this.$store.commit('decrease');}
  }
}
</script>