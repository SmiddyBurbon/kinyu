<template>
  <main id="main">
    <div id="preview">
      <Rating v-if="isType('rating')"></Rating>
      <News v-if="isType('news')"></News>
    </div>
  </main>
</template>

<script>
  import Rating from './eformel/Rating.vue'
  import News from './eformel/News.vue'

  export default {
    name: 'Main',
    components: {
      Rating, News
    },
    mounted() {
      this.resizeCanvas()
    },
    methods: {
      resizeCanvas() {
        var preview = document.getElementById('preview');
        var main = document.getElementById('main');
        var factor = (main.offsetWidth - 80) / preview.offsetWidth;

        if (preview.offsetHeight > main.clientHeight) {
          factor = (main.clientHeight - 80) / preview.offsetWidth;
        }
        preview.style.transform = 'scale(' + factor + ')';
      },
      isType(type) {
        if (this.$route.query.type == type) {
          return true
        }
        else {
          return false
        }
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
  #preview {
    width: 1024px;
    height: 1024px;
    transform-origin: 50% 50%;
    /*transform: scale(0.5);*/
    padding: 0;
  }
</style>
