<template>
  <div id="canvas" :style="cssVars">
    <div id="overlay"></div>
    <div id="text" class="top left">
      <h2><textarea-autosize rows="1" class="inputH2" v-model="roofline" type="text" /></h2>
      <h1><textarea-autosize rows="1" class="inputH1" v-model="headline" resize="none" /></h1>
    </div>

    <div id="logo"></div>
  </div>
</template>

<script>
  export default {
    name: 'Story',
    data() {
      return {
        headline: "Headline",
        roofline: "Roofline",
        country: "",
        objects: [],
        width: 1080,
        height: 1920,
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
    width: var(--width);
    height: var(--height);
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
    padding: 40px 0;
    position: absolute;
    margin: 0 80px;
    width: 920px;
  }
  #text.top {
    top: 240px;
  }
  #text.bottom {
    bottom: 240px;
  }
  #text.left {
    padding-left: 40px;
    text-align: left;
    border-left: 16px solid var(--eFormel-200);
  }
  #text.right {
    padding-right: 40px;
    text-align: right;
    border-right: 16px solid var(--eFormel-200);
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
    width: 100%;
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
