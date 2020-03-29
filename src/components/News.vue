<template>
  <div id="canvas" class="news">
    <div class="headline">
      <div v-if="this.options.sponsor" class="sponsor">
        <img src="img/we_logo.svg" alt="Presented by Würth Elektronik" />
      </div>
    </div>

    <img id="logo" class="small" src="img/logo_small.png" />
  </div>
</template>

<script>
  export default {
    name: 'News',
    data() {
      return {
        title: "News",
        subline: "E-Prix",
        country: "",
        objects: [],
        width: 1024,
        height: 1024,
        options: {
          sponsor: false,
        }
      }
    },
    mounted() {
      this.$root.$emit('mounted', this.options)
      console.log(this.options)
    },
    methods: {
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700&display=swap');

  #preview {
    width: 1024px;
    height: 1024px;
    transform-origin: 50% 50%;
    /*transform: scale(0.5);*/
    padding: 0;
  }
  #canvas {
    width: 100%;
    height: 100%;
    padding: 64px;
    background-color: var(--eFormel-500);
    color: var(--black);
    box-sizing: border-box;
    background-size: 2048px auto;
  }
  .headline {
    background-color: var(--white);
    margin-bottom: 28px;
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 88px;
  }
  .country {
    width: 140px;
    height: 88px;
  }
  .country img {
    display: block;
    width: auto;
    height: 88px;
  }
  .country, .event {
    display: inline;
  }
  .event {
    margin-left: 24px;
  }
  input,
  textarea {
    -webkit-appearance: none;
    border: none;
    outline: none;
    box-shadow: none;
    background: none;
    color: none;
    font-family: 'Roboto Condensed', sans-serif;
    color: var(--eFormel-700);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    display: inline-block;
  }
  input::placeholder {
    color: var(--main-700);
    opacity: .64;
  }
  h1 input {
    font-size: 32px;
    width: 400px;
  }
  h2 input {
    font-size: 24px;
    font-weight: 400;
    width: 400px;
  }
  h1 {
    margin-top: -2px;
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
  .ranking li {
    height: 56px;
    background-color: var(--white);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .ranking li:not(:last-of-type) {
    margin-bottom: 4px;
  }
  .ranking li .position {
    background-color: var(--eFormel-800);
    color: var(--eFormel-100);
    width: 72px;
    text-align: center;
    height: 100%;
    margin: 0 16px 0 0;
  }
  .ranking li .position::placeholder {
    color: var(--eFormel-100);
    opacity: 1;
  }
  .ranking li .name {
    font-size: 28px;
    color: var(--eFormel-700);
    width: 460px;
  }
  .ranking li .left, #ranking li .right {
    display: flex;
    flex-direction: row;
  }
  .ranking li .right {
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
  }
  .ranking li .flag {
    height: 32px;
    width: 56px;
    margin-right: 16px;
    display: inline;
  }
  .ranking li .gap {
    font-size: 24px;
    text-align: right;
    width: 120px;
  }
  .ranking li .car {
    width: 221px;
    height: 56px;
    margin-left: 16px;
  }
  .ranking .points {
    background-color: var(--eFormel-100);
    color: var(--eFormel-700);
    text-align: right;
    width: 72px;
    height: 56px;
    padding-right: 40px;
    margin-left: 16px;
  }
  .ranking .position,
  .ranking .points {
    line-height: 56px;
  }
  .points::-webkit-inner-spin-button,
  .points::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  #logo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80px;
    position: absolute;
    bottom: 0;
    left: calc(50% - 40px);
  }
</style>
