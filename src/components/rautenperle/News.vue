<template>
  <div id="canvas" :style="cssVars">
    <div id="overlay"></div>

    <img id="quotes" src="img/rautenperle/quotes.svg" />

    <!--<h1><textarea-autosize rows="1" class="inputH1" v-model="headline" resize="none" /></h1>-->
    <h1 contenteditable="true" class="inputH1">Hier Kommt das Zitat hin</h1>

    <span contenteditable="true" class="name">Vorname Nachname</span>

    <div class="footer">
      <span>#nurderhsv</span>
      <div class="line"></div>
      <span>rautenperle.com</span>
      <div class="line"></div>
      <img id="logo" class="small left top" src="img/rautenperle/logo.svg" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        headline: "Zitat",
        roofline: "Vorname Nachname",
        country: "",
        objects: [],
        width: 1080,
        height: 1080,
        options: {
          bgimage: true,
          bgX: 50
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
    background-color: var(--rautenperle-blue);
    font-family: var(--rautenperle-font);
  }
  #overlay {
    width: 100%;
    height: 100%;
    background-color: var(--rautenperle-darkblue);
    mix-blend-mode: multiply;
    opacity: .8;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  #quotes {
    width: 234px;
    height: auto;
    position: absolute;
    top: -5px;
    right: 60px;
    z-index: 2;
  }
  h1 {
    font-size: 92px;
    color: var(--white);
    font-family: var(--rautenperle-font);
    font-weight: 700;
    text-transform: uppercase;
    z-index: 2;
    position: absolute;
    left: 92px;
    top: 92px;
    text-align: left;
    margin-right: 80px;
    line-height: 1;
    letter-spacing: 0.024rem;
    max-width: 640px;
  }
  .name {
    z-index: 2;
    border: 1px solid var(--rautenperle-white);
    position: absolute;
    left: 92px;
    bottom: 220px;
    font-size: 36px;
    font-weight: 400;
    color: var(--rautenperle-white);
    background: none;
    width: auto;
    padding: 20px 12px;
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
  .footer {
    position: absolute;
    left: 92px;
    bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--rautenperle-white);
    font-size: 36px;
    z-index: 1;
    text-transform: uppercase;
    flex-direction: row;
    width: 896px;
  }
  .footer .line {
    height: 2px;
    flex-grow: 1;
    margin: 0 20px;
    background-color: var(--rautenperle-white);
  }
  #logo {
    width: 80px;
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
