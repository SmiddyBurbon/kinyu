<template>
  <div id="canvas" :style="cssVars">
    <div id="overlay" class="left"></div>
    <div id="text" class="left">
      <h1><textarea-autosize rows="1" class="inputH1" v-model="headline" resize="none" /></h1>
      <h2><textarea-autosize rows="1" class="inputH2" v-model="roofline" type="text" /></h2>
    </div>

    <img id="logo" class="small left top" src="img/eformel/logo_small.png" />
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
        width: 1920,
        height: 1080,
        options: {
          bgimage: true,
          bgX: 50,
          layoutX: "left",
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
    width: 50%;
    height: 100%;
    background-color: var(--eFormel-500);
    mix-blend-mode: multiply;
    opacity: 0.8;
    position: absolute;
    top: 0;
    z-index: 1;
  }
  #overlay.left {
    left: 0;
  }
  #overlay.right {
    right: 0;
  }
  #text {
    z-index: 2;
    padding: 2.5rem 0;
    position: absolute;
    top: 80px;
  }
  #text.left {
    left: 80px;
    padding-left: 40px;
    text-align: left;
    border-left: 16px solid var(--eFormel-200);
    padding-right: 80px;
  }
  #text.right {
    right: 80px;
    padding-right: 40px;
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
