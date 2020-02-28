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
    },
    mounted() {
      this.resizeCanvas(this.width, this.height)
    },
    methods: {
      resizeCanvas(width, height) {
        var preview = document.getElementById('preview');
        var main = document.getElementById('main');
        console.log(width)
        console.log(height)
        var factor = (main.offsetWidth - 80) / preview.offsetWidth;

        if (preview.offsetHeight > main.clientHeight) {
          factor = (main.clientHeight - 80) / preview.offsetWidth;
        }
        preview.style.transform = 'scale(' + factor + ')';
      }
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
