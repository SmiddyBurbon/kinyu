<template>
  <div class="canvas">
    <div class="headline">
      <div id="country"><img :src="'img/flags/' + this.country + '.png'" /></div>
      <div id="event">
        <h1><input id="inputH1" type="text" value="Fahrerwertung" /></h1>
        <h2><input id="inputH2" v-on:keyup="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
      </div>

      <ul id="ranking">
      </ul>
    </div>
  </div>
</template>

<script>
  import { getCountry } from '../assets/js/mapping.js'

  export default {
    name: 'Header',
    data() {
      return {
        headline: "Fahrerwertung",
        subline: "E-Prix",
        country: "de",
        lines: 12,
        objects: []
      }
    },
    /*mounted: {
      createList() {

      }
    },*/
    methods: {
      setCountry(venue) {
        this.country = getCountry(venue)
        console.log(this.country)
      },
      /*createList() {
        for (var i = 0; i < this.lines; i++) {
          this.createObject();
        }
      },
      createObject() {
        let object;
        console.log(object);
      }*/
    }
  }
</script>

<style scoped>
  .canvas {
    width: 1024px;
    height: 1024px;
    padding: 64px;
    background-color: var(--eFormel-500);
    color: var(--black);
    transform-origin: 50% 75%;
    transform: scale(0.5);
    box-sizing: border-box;
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
  #country {
    margin-right: 20px;
    width: 140px;
    height: 88px;
  }
  #country img {
    display: block;
    width: auto;
    height: 88px;
  }
  #country, #event {
    display: inline;
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
    color: var(--main-700);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    display: inline-block;
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
  h2 {
    margin-top: -4px;
  }
</style>
