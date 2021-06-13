<template>
  <div id="canvas" :style="cssVars">
    <div class="headline">
      <div class="country" v-if="this.venue.country"><img :src="'img/eformel/flags/' + this.venue.country + '.png'" /></div>
      <div class="event">
        <h1><input class="inputH1" type="text" v-model="venue.title" @blur="updateEvent($event.target.value)" /></h1>
        <h2><input class="inputH2" @blur="updateEvent($event.target.value)" v-model="venue.subline" type="text" placeholder="E-Prix" /></h2>
      </div>
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
            placeholder="Driver / Team"
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
                :src="'img/eformel/cars/' + object.car + '.png'"
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

    <div class="watermark">
      <p>Created with<br /><strong>feeder.vercel.app</strong></p>
      <img id="logo" class="small" src="img/icons/ic_logo.svg" />
    </div>
  </div>
</template>

<script>
  import { getCountry } from '../../assets/js/eformel.js'

  export default {
    name: 'Results',
    props: [
      'cars',
      'gap',
      'lines',
      'minLines',
      'maxLines',
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
          csv: true,
          bgimage: true,
          flags: true,
          cars: true,
          gap: true,
          lines: 12,
          minLines: 1,
          maxLines: 12,
          sponsor: false,
          points: false
        }
      }
    },
    mounted() {
      if(localStorage.EFormelResults) {
        this.objects = JSON.parse(localStorage.getItem('EFormelResults'));
      }
      else {
        this.createList()
      }

      if(localStorage.EFormelResultsVenue) {
        this.venue.title = JSON.parse(localStorage.getItem('EFormelResultsVenue')).title;
        this.venue.subline = JSON.parse(localStorage.getItem('EFormelResultsVenue')).subline;
        this.venue.country = JSON.parse(localStorage.getItem('EFormelResultsVenue')).country;
      }
      else {
        this.venue.title = 'Rating'
        this.venue.subline = 'E-Prix'
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
      parseCSV(results) {
        if(results[0][6] && results[0][6].includes("QUALIFYING")) {
          for(let i = 1; i < results.length; i++) {
            this.objects[i-1].position = results[i][0]
            this.objects[i-1].name = results[i][28] + " " + results[i][29]
            this.objects[i-1].gap = results[i][3]
            this.options.gap = true
            this.options.points = false

            this.updateName(i-1, this.objects[i-1].name)
          }
        }
        else {
          if(results[1][26]) {
            for(let i = 1; i < results.length; i++) {
              this.objects[i-1].position = results[i][0]
              this.objects[i-1].name = results[i][26] + " " + results[i][27]
              this.objects[i-1].gap = results[i][5]
              this.options.gap = true
              this.options.points = false

              this.updateName(i-1, this.objects[i-1].name)
            }
          }
          else {
            for(let i = 0; i < results.length; i++) {
              this.objects[i].position = results[i][0]
              this.objects[i].name = results[i][1]
              this.objects[i].points = results[i][3]
              this.options.gap = false
              this.options.points = true

              this.updateName(i, this.objects[i].name)
            }
          }
        }
        console.log(this.objects)
      },
      setCountry(venue) {
        this.venue.country = getCountry(venue)
      },
      updateName(i, input) {
        var driver = this.objects[i]
        this.axios.get('json/eformel_202021.json').then((response) => {
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
        if(this.objects[0].position > 1) {
          document.getElementById("canvas").style.backgroundPositionX = "100%";
        }
        else {
          document.getElementById("canvas").style.backgroundPositionX = "0";
        }
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
        localStorage.setItem('EFormelResults', JSON.stringify(objects))
      },
      persistVenue(venue) {
        localStorage.setItem('EFormelResultsVenue', JSON.stringify(venue))
      }
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width + 'px',
          '--height': this.height + 'px',
          '--fe-purple': '#3c0050',
          '--fe-blue': '#14B7ED',
          '--fe-black': '#31333C'
        }
      }
    }
  }
</script>

<style scoped>
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
    padding: 64px 64px 0 64px;
    background-color: var(--eFormel-500);
    color: var(--black);
    box-sizing: border-box;
    background-image: url('../../assets/img/demo/fe_bg.png');
    background-size: 2048px auto;
    display: flex;
    flex-direction: column;
  }
  .flex {
    width: 100%;
  }
  .headline {
    background-color: var(--white);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 88px;
    overflow: hidden;
    margin-bottom: 24px;
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
    font-family: inherit;
    letter-spacing: -0.04rem;
    color: var(--fe-black);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    display: inline-block;
  }
  input::placeholder {
    color: var(--fe-black);
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
    margin-top: -16px;
    height: 80px;
  }
  h2 {
    margin-top: -16px;
    height: 40px;
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
    height: 64px;
    background-color: var(--white);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .ranking li .position {
    background-color: var(--fe-blue);
    color: var(--fe-purple);
    width: 72px;
    text-align: center;
    height: 100%;
    margin: 0 16px 0 0;
  }
  .ranking li .position::placeholder {
    color: var(--fe-blue);
    opacity: 1;
  }
  .ranking li .name {
    font-size: 28px;
    color: var(--fe-black);
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
    width: 253px;
    height: 64px;
    margin-left: 16px;
  }
  .ranking .points {
    background-color: var(--fe-black);
    color: var(--white);
    text-align: right;
    width: 72px;
    height: 64px;
    padding-right: 40px;
    margin-left: 16px;
  }
  .ranking .position,
  .ranking .points {
    line-height: 64px;
  }
  .ranking .points::placeholder {
    color: var(--white);
  }
  .points::-webkit-inner-spin-button,
  .points::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .watermark {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    text-align: right;
    margin-top: 20px;
  }
  .watermark p {
    line-height: 1;
    font-size: 12px;
  }
  #logo {
    width: 40px;
    height: 40px;
    margin-left: 16px;
  }
</style>
