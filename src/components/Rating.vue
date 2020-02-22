<template>
  <div class="canvas">
    <div class="headline">
      <div id="country" v-if="this.country"><img :src="'img/flags/' + this.country + '.png'" /></div>
      <div id="event">
        <h1><input id="inputH1" type="text" value="Fahrerwertung" /></h1>
        <h2><input id="inputH2" @blur="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
      </div>
    </div>

    <ul id="ranking">
      <li v-for="object in objects" :key="object.name">
        <input class="position" type="text" :placeholder="[[ object.position ]]" />
        <div class="left">
          <img
            class="flag"
            :src="'img/flags/' + object.country + '.png'"
            v-if="object.country"
          />
          <input
            class="name"
            type="text"
            placeholder="Driver or Team Name"
            :value=[[object.name]]
            @blur="updateObject(object.position, $event.target.value)"
          />
        </div>
        <div class="right">
          <input
            class="gap"
            type="text"
            placeholder="Gap"
          />
          <img
            class="car"
            v-if="object.car"
            :src="'img/cars/' + object.car + '.png'"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getCountry } from '../assets/js/mapping.js'
  import { getTeam } from '../assets/js/mapping.js'

  export default {
    name: 'Header',
    data() {
      return {
        headline: "Fahrerwertung",
        subline: "E-Prix",
        country: "",
        lines: 12,
        objects: []
      }
    },
    mounted() {
      this.createList()
    },
    methods: {
      setCountry(venue) {
        this.country = getCountry(venue)
      },
      updateObject(pos, name) {
        this.objects[pos - 1].country = getCountry(name)
        this.objects[pos - 1].name = name
        this.objects[pos - 1].car = getTeam(name)
      },
      createList() {
        for (var i = 0; i < this.lines; i++) {
          this.createObject(i)
        }
      },
      createObject(i) {
        let object = {}
        object.position = i + 1
        object.name = ""
        object.flag = ""
        object.gap = ""
        object.car = ""
        this.objects.push(object);
        console.log(this.objects)
      }
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
    transform-origin: 50% 50%;
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
  #event {
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
  #ranking li {
    height: 56px;
    background-color: var(--white);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  #ranking li:not(:last-of-type) {
    margin-bottom: 4px;
  }
  #ranking li .position {
    background-color: var(--eFormel-800);
    color: var(--eFormel-100);
    width: 72px;
    text-align: center;
    height: 100%;
    margin-right: 16px;
  }
  #ranking li .position::placeholder {
    color: var(--eFormel-100);
    opacity: 1;
  }
  #ranking li .name {
    font-size: 28px;
    color: var(--eFormel-700);
    width: 460px;
  }
  #ranking li .left, #ranking li .right {
    display: flex;
    flex-direction: row;
  }
  #ranking li .right {
    position: absolute;
    right: 16px;
  }
  #ranking li .flag {
    height: 32px;
    width: 56px;
    margin-right: 16px;
    display: inline;
  }
  #ranking li .gap {
    font-size: 24px;
    text-align: right;
    width: 120px;
  }
  #ranking li .car {
    width: 221px;
    height: 56px;
    margin-left: 16px;
  }
</style>
