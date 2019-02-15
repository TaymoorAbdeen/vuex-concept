<template>
<div>
    <h2>Info: </h2>
    <counter-info :counter="counter"></counter-info>
</div>
</template>

<script>
import CounterInfo from './CounterInfo'

export default {
  props: ['counter'],
  components:{
      CounterInfo
  }
}
</script>