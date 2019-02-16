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
    <button @click="nIncrease">N Increase</button>
    <button @click="increase_after_one_second">Increase afer 1 second</button>
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

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
      ...mapMutations(['increase', 'decrease']),
    nIncrease() {this.$store.commit('nIncrease', {
        num: 5
});
    },
    increase_after_one_second(){
        this.$store.dispatch('increaseAfterOneSecond');
    }
  }
}
</script>