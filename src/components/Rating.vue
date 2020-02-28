<template>
  <div id="preview">
    <div id="canvas">
      <div class="headline">
        <div class="country" v-if="this.country"><img :src="'img/flags/' + this.country + '.png'" /></div>
        <div class="event">
          <h1><input class="inputH1" type="text" value="Fahrerwertung" /></h1>
          <h2><input class="inputH2" @blur="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
        </div>
      </div>

      <ul class="ranking">
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
              placeholder="Driver / Team"
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
  </div>
</template>

<script>
  import { getCountry } from '../assets/js/mapping.js'
  import { getTeam } from '../assets/js/mapping.js'

  export default {
    name: 'Header',
    props: [
      'cars',
      'gap',
      'lines',
      'minLines',
      'maxLines'
    ],
    data() {
      return {
        headline: "Fahrerwertung",
        subline: "E-Prix",
        country: "",
        objects: [],
        width: 1024,
        height: 1024,
        options: {
          cars: true,
          gap: true,
          lines: 12,
          minLines: 1,
          maxLines: 12
        }
      }
    },
    mounted() {
      this.createList()
      this.resizeCanvas(this.width, this.height)
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
        for (var i = 0; i < this.options.lines; i++) {
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
      },
      resizeCanvas(width, height) {
        var preview = document.getElementById('preview');
        var main = document.getElementById('main');
        console.log(width)
        console.log(height)
        var factor = (main.offsetWidth - 80) / preview.offsetWidth;

        if (preview.offsetHeight > main.clientHeight) {
          factor = (main.clientHeight - 80) / preview.offsetWidth;
        }
        preview.style.transform = 'scale(' + factor + ')';
      }
    }
  }
</script>

<style>
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
    line-height: 1;
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
    right: 16px;
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
</style>
