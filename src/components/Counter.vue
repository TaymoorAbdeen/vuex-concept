<template>
<div>
    <h2>Counter </h2>
    Counter is {{counter}}
    <br />
    Counter*2 is {{doubledCounter}}
    <button @click="increase">Increase</button>
    <button @click="decrease">Decrease</button>
</div>
</template>

<script>

export default {
  computed: {
      counter() {
          return this.$store.state.counter;
      },
      doubledCounter() {
          return this.$store.getters.doubledCounter;
      }
  },
  methods: {
      increase() {
          this.$store.state.counter++;
      },
      decrease() {
          this.$store.state.counter--;
      }
  },
}
</script>