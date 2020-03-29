<template>
  <main id="main">
    <div id="preview">
      <Rating v-if="isType('rating')"></Rating>
      <News v-if="isType('news')"></News>
    </div>
  </main>
</template>

<script>
  import Rating from './Rating.vue'
  import News from './News.vue'

  export default {
    name: 'Main',
    components: {
      Rating, News
    },
    mounted() {
      this.resizeCanvas()

      this.$root.$on('updatedObjects', options => {
          if(options.lines < this.objects.length) {
            let diff = this.objects.length - options.lines
            for (var i = 0; i < diff; i++) {
              this.objects.pop()
            }
          }
          else if(options.lines > this.objects.length) {
            var diff = this.objects.length
            for (var j = options.lines; j > diff; j--) {
              this.createObject(this.objects.length)
            }
          }
      });
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
</style>
