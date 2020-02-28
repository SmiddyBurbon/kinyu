<template>
  <main id="main">
    <Rating></Rating>
  </main>
</template>

<script>
  import Rating from './Rating.vue'

  export default {
    name: 'Main',
    components: {
      Rating
    }
  }
</script>

<style scoped>
  main {
    background-color: var(--bg-grey);
    background-image: url('../assets/img/bg_pattern.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
</style>
