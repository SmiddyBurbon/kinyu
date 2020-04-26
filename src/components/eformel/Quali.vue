<template>
  <div id="canvas" :style="cssVars">
    <div class="headline">
      <div class="country" v-if="this.country"><img :src="'img/eformel/flags/' + this.country + '.png'" /></div>
      <div class="event">
        <h1><input class="inputH1" type="text" v-model="title" /></h1>
        <h2><input class="inputH2" @blur="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
      </div>
      <div v-if="this.options.sponsor" class="sponsor">
        <img src="img/eformel/we_logo.svg" alt="Presented by Würth Elektronik" />
      </div>
    </div>

    <div class="ranking">
      <ul class="group">
        <div class="groupHeader">
          <input value="Group 1" type="text" />
        </div>
        <li v-for="driver in groupOne" :key="driver.name" :id="'item' + driver.index">
          <div>
            <div class="image-upload" v-if="options.flags">
              <label :for="'flag-input-' + driver.index">
                <img
                  class="flag"
                  :src="'img/eformel/flags/' + driver.country + '.png'"
                />
              </label>
              <input :id="'flag-input-' + driver.index" type="file" @change="changeFlag(driver.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Driver / Team"
              :value="[[driver.name]]"
              @blur="updateName(driver.index, $event.target.value)"
            />
          </div>
          <input
            class="team"
            type="text"
            placeholder="Team"
            :value="[[driver.team]]"
            @blur="updateTeam(driver.index, $event.target.value)"
          />
        </li>
      </ul>

      <ul class="group">
        <div class="groupHeader">
          <input value="Group 2" type="text" />
        </div>
        <li v-for="driver in groupTwo" :key="driver.name" :id="'item' + driver.index">
          <div>
            <div class="image-upload" v-if="options.flags">
              <label :for="'flag-input-' + driver.index">
                <img
                  class="flag"
                  :src="'img/eformel/flags/' + driver.country + '.png'"
                />
              </label>
              <input :id="'flag-input-' + driver.index" type="file" @change="changeFlag(driver.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Driver / Team"
              :value="[[driver.name]]"
              @blur="updateName(driver.index, $event.target.value)"
            />
          </div>
          <input
            class="team"
            type="text"
            placeholder="Team"
            :value="[[driver.team]]"
            @blur="updateTeam(driver.index, $event.target.value)"
          />
        </li>
      </ul>

      <ul class="group">
        <div class="groupHeader">
          <input value="Group 3" type="text" />
        </div>
        <li v-for="driver in groupThree" :key="driver.name" :id="'item' + driver.index">
          <div>
            <div class="image-upload" v-if="options.flags">
              <label :for="'flag-input-' + driver.index">
                <img
                  class="flag"
                  :src="'img/eformel/flags/' + driver.country + '.png'"
                />
              </label>
              <input :id="'flag-input-' + driver.index" type="file" @change="changeFlag(driver.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Driver / Team"
              :value="[[driver.name]]"
              @blur="updateName(driver.index, $event.target.value)"
            />
          </div>
          <input
            class="team"
            type="text"
            placeholder="Team"
            :value="[[driver.team]]"
            @blur="updateTeam(driver.index, $event.target.value)"
          />
        </li>
      </ul>

      <ul class="group">
        <div class="groupHeader">
          <input value="Group 4" type="text" />
        </div>
        <li v-for="driver in groupFour" :key="driver.name" :id="'item' + driver.index">
          <div>
            <div class="image-upload" v-if="options.flags">
              <label :for="'flag-input-' + driver.index">
                <img
                  class="flag"
                  :src="'img/eformel/flags/' + driver.country + '.png'"
                />
              </label>
              <input :id="'flag-input-' + driver.index" type="file" @change="changeFlag(driver.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Driver / Team"
              :value="[[driver.name]]"
              @blur="updateName(driver.index, $event.target.value)"
            />
          </div>
          <input
            class="team"
            type="text"
            placeholder="Team"
            :value="[[driver.team]]"
            @blur="updateTeam(driver.index, $event.target.value)"
          />
        </li>
      </ul>
    </div>

    <img id="logo" class="small" src="img/eformel/logo_small.png" />
  </div>
</template>

<script>
  import { getCountry } from '../../assets/js/eformel.js'
  import { getFullTeam } from '../../assets/js/eformel.js'

  export default {
    name: 'Rating',
    data() {
      return {
        title: "Qualifying Groups",
        subline: "E-Prix",
        country: "",
        objects: [],
        width: 1920,
        height: 1080,
        options: {
          bgimage: true,
          flags: true,
          sponsor: false
        }
      }
    },
    mounted() {
      this.createList()
      this.$root.$emit('mounted', this.options)
    },
    methods: {
      setCountry(venue) {
        this.country = getCountry(venue)
      },
      updateName(i, name) {
        this.objects[i].country = getCountry(name)
        this.objects[i].name = name
        this.objects[i].team = getFullTeam(name)
      },
      updateTeam(i, team) {
        this.objects[i].team = team
      },
      updatePosition(i, position) {
        this.objects[i].position = parseInt(position)
        if(this.objects[0].position > 1) {
          document.getElementById("canvas").style.backgroundPositionX = "100%";
        }
        else {
          document.getElementById("canvas").style.backgroundPositionX = "0";
        }
      },
      updatePoints(i, points) {
        this.objects[i].points = parseInt(points)
      },
      createList() {
        for (var i = 0; i < 24; i++) {
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
      }
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width + 'px',
          '--height': this.height + 'px'
        }
      },
      groupOne() {
        console.log(this.objects.slice(0, 6))
        return this.objects.slice(0, 6)
      },
      groupTwo() {
        console.log(this.objects.slice(6, 12))
        return this.objects.slice(6, 12)
      },
      groupThree() {
        console.log(this.objects.slice(12, 18))
        return this.objects.slice(12, 18)
      },
      groupFour() {
        console.log(this.objects.slice(18, 24))
        return this.objects.slice(18, 24)
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
    font-family: var(--eFormel-font);
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
  .ranking {
    display: flex;
    flex-direction: row;
  }
  .ranking .group {
    width: 418px;
    box-sizing: content-box;
  }
  .ranking .group:not(:first-of-type) {
    margin-left: 20px;
  }
  .ranking .group:not(:last-of-type) {
    margin-right: 20px;
  }
  .ranking li {
    height: 72px;
    padding: 16px;
    background-color: var(--white);
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }
  .ranking li > div {
    display: flex;
    flex-direction: row;
  }
  .ranking li:not(:last-of-type) {
    margin-bottom: 4px;
  }
  .ranking .groupHeader {
    background-color: var(--eFormel-800);
    font-size: 32px;
    line-height: 32px;
    padding: 0 16px;
    width: 386px;
    margin-bottom: 4px;
    height: 64px;
    display: flex;
    align-items: center;
  }
  .ranking .groupHeader input {
    color: var(--eFormel-100);
    width: 100%;
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
    display: block;
  }
  .ranking li .team {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
    width: 400px;
    margin-top: 8px;
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
  .image-upload > input {
    display: none;
  }
</style>
