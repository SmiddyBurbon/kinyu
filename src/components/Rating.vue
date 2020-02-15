<template>
  <div class="canvas">
    <div class="headline">
      <div id="country"><img :src="'../img/flags/' + this.country + '.png'" /></div>
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
  // import Utils from '../assets/js/mapping.js'

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
        this.country = this.getCountry(venue)
        console.log(this.country)
      },
      getCountry(venue) {
        var country = venue.toLowerCase();

        if (country.includes("diriyya")) { return "sa"; }
        else if (country.includes("marrakesch")) { return "ma"; }
        else if (country.includes("santiago")) { return "cl"; }
        else if (country.includes("mexico")) { return "mx"; }
        else if (country.includes("hong")) { return "hk"; }
        else if (country.includes("sanya")) { return "cn"; }
        else if (country.includes("rom")) { return "it"; }
        else if (country.includes("paris")) { return "fr"; }
        else if (country.includes("monaco")) { return "mc"; }
        else if (country.includes("berlin")) { return "de"; }
        else if (country.includes("bern")) { return "ch"; }
        else if (country.includes("swiss")) { return "ch"; }
        else if (country.includes("york")) { return "us"; }
        else if (country.includes("seoul")) { return "sk"; }
        else if (country.includes("london")) { return "uk"; }
        else if (country.includes("jakarta")) { return "in"; }
        else if (country.includes("valencia")) { return "es"; }
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
