<template>
  <button id="download">
    Download
  </button>
</template>

<script>

  export default {
    name: 'Download',
    methods: {

    }
  }
</script>

<style scoped>
  #download {
    -webkit-appearance: none;
    appearance: none;
    background-color: var(--black);
    color: var(--white);
    position: fixed;
    border: none;
    box-shadow: none;
    bottom: 3rem;
    margin: 0 auto;
    padding: 1rem 1.5rem;
    font-size: 1rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.04rem;
  }
</style>
