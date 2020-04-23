<template>
  <div id="canvas" :style="cssVars">
    <div id="overlay"></div>
    <div id="text" class="top left top">
      <h2><textarea-autosize rows="1" class="inputH2" v-model="roofline" type="text" /></h2>
      <h1><textarea-autosize rows="1" class="inputH1" v-model="headline" resize="none" /></h1>
    </div>

    <!-- <img id="logo" class="small left top" src="img/eformel/logo_small.png" /> -->
  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        headline: "Headline",
        roofline: "Roofline",
        country: "",
        objects: [],
        width: 1024,
        height: 1024,
        options: {
          bgimage: true,
          bgX: 50,
          layoutX: "left",
          layoutY: "top",
          sponsor: false
        }
      }
    },
    mounted() {
      this.$root.$emit('mounted', this.options)

      this.$root.$on('updatedObjects', options => {
          document.getElementById('canvas').style.backgroundPositionX = (100-options.bgX) + "%";
      });

      var preview = document.getElementById('canvas')

      console.log(preview.offsetWidth)
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width + 'px',
          '--height': this.height + 'px'
        }
      }
    }
  }
</script>

<style scoped>
  #canvas {
    width: 1024px;
    height: 1024px;
    background-position: center center;
    background-size: cover;
    position: relative;
    background-color: var(--eFormel-500);
  }
  #overlay {
    width: 100%;
    height: 100%;
    background-color: var(--eFormel-900);
    mix-blend-mode: multiply;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  #text {
    z-index: 2;
    padding: 2.5rem 0;
    position: absolute;
    left: 5rem;
  }
  #text.top {
    top: 5rem;
  }
  #text.bottom {
    bottom: 5rem;
  }
  #text.left {
    padding-left: 2rem;
    text-align: left;
    border-left: 16px solid var(--eFormel-200);
    margin-right: 80px;
  }
  #text.right {
    padding-right: 2rem;
    text-align: right;
    border-right: 16px solid var(--eFormel-200);
    margin-left: 80px;
  }
  #text.right textarea {
    text-align: right;
  }
  textarea {
    -webkit-appearance: none;
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    color: none;
    font-family: var(--eFormel-font);
    font-weight: 700;
    font-style: italic;
    display: inline-block;
  }
  textarea::placeholder {
    opacity: .64;
  }
  h1 textarea {
    font-size: 80px;
    color: var(--white);
    text-transform: none;
  }
  h2 textarea {
    font-size: 32px;
    color: var(--eFormel-200);
    text-transform: uppercase;
  }
  .sponsor {
    display: flex;
    position: absolute;
    right: 0;
  }
  .sponsor img {
    transform-origin: right;
    transform: scale(0.8);
    margin-right: 16px;
    width: auto;
  }
  #logo {
    width: 80px;
    position: absolute;
    bottom: 0;
    z-index: 2;
  }
  #logo.left {
    left: 4rem;
  }
  #logo.right {
    right: 4rem;
  }
  #logo.bottom {
    top: 0;
  }
</style>
