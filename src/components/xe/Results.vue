<template>
  <div id="canvas" :style="cssVars">
    <div class="container">
      <div class="headline">
        <div class="country" v-if="this.venue.country"><img :src="'img/eformel/flags/' + this.venue.country + '.png'" /></div>
        <div class="event">
          <h1><input class="inputH1" type="text" v-model="venue.title" @blur="updateEvent($event.target.value)" /></h1>
          <h2><input class="inputH2" @blur="updateEvent($event.target.value)" v-model="venue.subline" type="text" placeholder="X-Prix" /></h2>
        </div>
        <!--<div v-if="this.options.sponsor" class="sponsor">
          <img src="img/eformel/we_logo.svg" alt="Presented by Würth Elektronik" />
        </div>-->
      </div>

      <ul class="ranking">
        <li v-for="object in objects" :key="object.index" :id="'item' + object.index">
          <input
            class="position"
            type="text"
            :placeholder="[[object.position]]"
            v-model="object.position"
            @blur="updatePosition(object.index, $event.target.value)"
          />
          <div class="left">
            <div class="image-upload" v-if="options.flags">
              <label :for="'flag-input-' + object.index">
                <img
                  class="flag"
                  :src="'img/eformel/flags/' + object.country + '.png'"
                />
              </label>
              <input :id="'flag-input-' + object.index" type="file" @change="changeFlag(object.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Team"
              v-model="object.name"
              @blur="updateName(object.index, $event.target.value)"
            />
          </div>
          <div class="right">
            <input
              v-if="options.gap"
              class="gap"
              type="text"
              placeholder="Gap"
              v-model="object.gap"
            />
            <div class="image-upload" v-if="options.cars">
              <label :for="'car-input-' + object.index">
                <img
                  class="car"
                  v-if="options.cars"
                  :src="'img/xe/cars/' + object.car + '.png'"
                />
              </label>
              <input :id="'car-input-' + object.index" type="file" @change="changeCar(object.index)" />
            </div>
            <input
              v-if="options.points"
              class="points"
              type="number"
              placeholder="0"
              v-model="object.points"
              @blur="updatePoints(object.index, $event.target.value)"
            />
          </div>
        </li>
      </ul>
    </div>

    <img id="logo" class="small" src="img/eformel/logo_small.png" />
  </div>
</template>

<script>
  import { getCountry } from '../../assets/js/eformel.js'

  export default {
    name: 'Results',
    props: [
      'cars',
      'gap'
    ],
    data() {
      return {
        venue: {
          title: '',
          subline: '',
          country: '',
        },
        objects: [],
        width: 1024,
        height: 1024,
        options: {
          bgimage: true,
          lines: 9,
          flags: true,
          cars: true,
          gap: false,
          points: true
        }
      }
    },
    mounted() {
      if(localStorage.xeResults) {
        this.objects = JSON.parse(localStorage.getItem('xeResults'));
      }
      else {
        this.createList()
      }

      if(localStorage.xeResultsVenue) {
        this.venue.title = JSON.parse(localStorage.getItem('xeResultsVenue')).title;
        this.venue.subline = JSON.parse(localStorage.getItem('xeResultsVenue')).subline;
        this.venue.country = JSON.parse(localStorage.getItem('xeResultsVenue')).country;
      }
      else {
        this.venue.title = 'Results'
        this.venue.subline = 'X-Prix'
        this.venue.country = ''
      }

      this.$root.$emit('mounted', this.options)

      this.$root.$on('csvImported', results => {
        this.parseCSV(results)
      })

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
      updateEvent() {
        this.setCountry(this.venue.subline)
        this.persistVenue(this.venue)
      },
      setCountry(venue) {
        this.venue.country = getCountry(venue)
      },
      updateName(i, input) {
        var driver = this.objects[i]
        this.axios.get('./json/xe_2021.json').then((response) => {
          for (var j = 0; j < response.data.length; j++) {
            if(input != "" && input != " ") {
              if(response.data[j].name.toLowerCase().includes(input) || response.data[j].name.toLowerCase() == input.toLowerCase() || response.data[j].tla.toLowerCase().includes(input) || response.data[j].number == input) {
                driver.name = response.data[j].name
                driver.country = response.data[j].nationality
                driver.car = response.data[j].team

                this.persistObjects(this.objects)
              }
            }
          }
        })
      },
      updatePosition(i, position) {
        this.objects[i].position = parseInt(position)
        this.persistObjects(this.objects)
      },
      updatePoints(i, points) {
        this.objects[i].points = parseInt(points)
        this.persistObjects(this.objects)
      },
      createList() {
        for (var i = 0; i < this.options.lines; i++) {
          this.createObject(i)
        }
      },
      createObject(i) {
        let object = {}
        object.index = i
        object.position = i + 1
        object.name = ""
        object.flag = ""
        object.gap = ""
        object.car = ""
        object.points = ""
        this.objects.push(object);
      },
      changeFlag(id) {
        var file = document.getElementById('flag-input-' + id).files[0];
        var reader = new FileReader();

        reader.onload = function(readerEvent) {
          var image = new Image();
          image.onload = function (/*imageEvent*/) {
            var max_size = 1200;
            var w = image.width;
            var h = image.height;

            if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
            } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }

            var canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(image, 0, 0, w, h);
          }
          image.src = readerEvent.target.result;
          var img = document.getElementById('item' + id).getElementsByClassName('flag')[0].src = reader.result;
        }

        if(file){
          reader.readAsDataURL(file);
        }
      },
      changeCar(id) {
        var file = document.getElementById('car-input-' + id).files[0];
        var reader = new FileReader();

        reader.onload = function(readerEvent) {
          var image = new Image();
          image.onload = function (/*imageEvent*/) {
            var max_size = 1200;
            var w = image.width;
            var h = image.height;

            if (w > h) {  if (w > max_size) { h*=max_size/w; w=max_size; }
            } else     {  if (h > max_size) { w*=max_size/h; h=max_size; } }

            var canvas = document.createElement('canvas');
            canvas.width = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(image, 0, 0, w, h);
          }
          image.src = readerEvent.target.result;
          var img = document.getElementById('item' + id).getElementsByClassName('car')[0].src = reader.result;
        }

        if(file){
          reader.readAsDataURL(file);
        }
      },
      persistObjects(objects) {
        localStorage.setItem('xeResults', JSON.stringify(objects))
      },
      persistVenue(venue) {
        localStorage.setItem('xeResultsVenue', JSON.stringify(venue))
      }
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
  * {
    box-sizing: content-box;
  }
  #preview {
    width: var(--width);
    height: var(--height);
    transform-origin: 50% 50%;
    /*transform: scale(0.5);*/
    padding: 0;
  }
  #canvas {
    width: var(--width);
    height: var(--height);
    padding: 64px;
    background-color: var(--xe-700);
    color: var(--black);
    box-sizing: border-box;
    background-size: 2048px auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 100%;
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
    font-family: var(--xe-font);
    color: var(--black);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    display: inline-block;
  }
  input::placeholder {
    color: var(--black);
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
    margin-top: -24px;
  }
  h2 {
    margin-top: -8px;
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
    background-color: var(--xe-400);
    color: var(--black);
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
    color: var(--black);
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
    display: block;
  }
  .ranking li .gap {
    font-size: 24px;
    text-align: right;
    width: 120px;
  }
  .ranking li .car {
    width: 91px;
    height: 40px;
    margin-left: 16px;
  }
  .ranking .points {
    background-color: var(--black);
    color: var(--xe-400);
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
  .image-upload > input {
    display: none;
  }
</style>
