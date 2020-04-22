<template>
  <main id="main">
    <div id="preview">
      <EFormelRating v-if="isType('eformel_rating')"></EFormelRating>
      <EFormelNews v-if="isType('eformel_news')"></EFormelNews>

      <DemoTable v-if="isType('demo_table')"></DemoTable>
      <DemoScore v-if="isType('demo_score')"></DemoScore>
    </div>
  </main>
</template>

<script>
  import EFormelRating from './eformel/Rating.vue'
  import EFormelNews from './eformel/News.vue'

  import DemoTable from './demo/Table.vue'
  import DemoScore from './demo/Score.vue'

  export default {
    name: 'Main',
    components: {
      EFormelRating, EFormelNews,
      DemoTable, DemoScore
    },
    mounted() {
      this.resizeCanvas()
    },
    methods: {
      resizeCanvas() {
        var preview = document.getElementById('preview');
        var main = document.getElementById('main');
        var factor = (main.offsetWidth) / preview.offsetWidth;

        if (preview.offsetHeight > main.clientHeight) {
          console.log(main.clientHeight)
          factor = (main.clientHeight) / preview.offsetWidth;
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
    position: relative;
    height: calc(100vh - 4rem);
  }
  #preview {
    width: 1080px;
    height: 1080px;
    transform-origin: 50% 50%;
    /*transform: scale(0.5);*/
    padding: 0;
  }
</style>
