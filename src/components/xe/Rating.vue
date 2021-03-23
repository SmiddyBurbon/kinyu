<template>
  <div id="canvas" :style="cssVars">
    <div class="left">
      <input
        class="position"
        type="text"
        :placeholder="driver.position"
        v-model="driver.position"
      />

      <div class="image-upload">
        <label for="portrait-input">
          <img
            class="portrait"
            :src="'img/eformel/drivers/' + driver.portrait + '.png'"
          />
        </label>
        <input id="portrait-input" type="file" @change="changePortrait" />
      </div>
    </div>

    <div class="center">
      <div class="image-upload">
        <label :for="'flag-input-' + driver.index">
          <img
            class="flag"
            :src="'img/eformel/flags/' + driver.country + '.png'"
          />
        </label>
        <input id="'flag-input" type="file" @change="changeFlag" />
      </div>
      <div class="driver">
        <input
          class="name"
          type="text"
          placeholder="Driver"
          v-model="driver.name"
          @blur="updateName($event.target.value)"
        />
        <input
          class="team"
          type="text"
          placeholder="Team"
          :value="[[driver.team]]"
        />
      </div>
    </div>

    <div class="right">
      <div class="rating">
        <input type="text" v-model="driver.seasonRating" />
        <input type="text" value="Saison" />
      </div>

      <div class="rating">
        <input type="text" v-model="driver.raceRating" />
        <input type="text" value="Rennen" />
      </div>
    </div>
  </div>
</template>

<script>
  import { getCountry } from '../../assets/js/eformel.js'
  import { getTeam } from '../../assets/js/eformel.js'
  import { getFullTeam } from '../../assets/js/eformel.js'
  import { getPortrait } from '../../assets/js/eformel.js'

  export default {
    name: 'Rating',
    data() {
      return {
        width: 1200,
        height: 120,
        driver: {
          position: 1,
          name: '',
          country: '',
          portrait: '',
          team: '',
          seasonRating: '0.0',
          raceRating: '0.0'
        }
      }
    },
    mounted() {
      this.$root.$emit('mounted', this.options)

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
      updateName(input) {
        var driver = this.driver
        this.axios.get('json/eformel_202021.json').then((response) => {
          for (var j = 0; j < response.data.length; j++) {
            if(input != "" && input != " ") {
              driver.portrait = getPortrait(driver.name)
              if(response.data[j].name.toLowerCase().includes(input) || response.data[j].name.toLowerCase() == input.toLowerCase() || response.data[j].tla.toLowerCase().includes(input) || response.data[j].number == input) {
                driver.name = response.data[j].name
                driver.country = response.data[j].nationality
                driver.team = response.data[j].fullTeam
                console.log(driver)
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
      },
      updatePoints(i, points) {
        this.objects[i].points = parseInt(points)
      },
      changeFlag() {
        var file = document.getElementById('flag-input').files[0];
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
          var img = document.getElementsByClassName('flag')[0].src = reader.result;
        }

        if(file){
          reader.readAsDataURL(file);
        }
      },
      changePortrait() {
        var file = document.getElementById('portrait-input').files[0];
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
          var img = document.getElementsByClassName('portrait')[0].src = reader.result;
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
    background-color: var(--white);
    color: var(--black);
    position: relative;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-between;
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
  .position {
    background-color: var(--eFormel-800);
    color: var(--eFormel-100);
    font-style: italic;
    letter-spacing: -0.4rem;
    width: 200px;
    padding-right: 40px;
    text-align: center;
    font-size: 96px;
    height: 120px;
    line-height: 120px;
    margin: 0 16px 0 0;
  }
  .position::placeholder {
    color: var(--eFormel-100);
    opacity: 1;
  }
  .portrait {
    height: 240px;
    width: auto;
    position: absolute;
    top: -16px;
    left: 140px;
  }
  .name {
    font-size: 28px;
    color: var(--eFormel-700);
    width: 460px;
  }
  .left, .center, .right {
    display: flex;
    flex-direction: row;
  }
  .left {
    margin-right: 80px;
  }
  .center {
    align-items: center;
  }
  .driver {
    display: flex;
    flex-direction: column;
  }
  .team {
    font-size: 20px;
    font-weight: 400;
    width: 100%;
  }
  .flag {
    height: 50px;
    width: 80px;
    margin-right: 16px;
    display: block;
  }
  .right {
    align-self: flex-end;
  }
  .rating {
    display: flex;
    flex-direction: column;
    background-color: var(--eFormel-200);
    color: var(--eFormel-700);
    margin: 0 8px;
    height: 120px;
    width: 120px;
    align-items: center;
    justify-content: center;
  }
  .rating input {
    width: 100%;
    text-align: center;
  }
  .rating input:last-of-type {
    font-size: 20px;
    font-weight: 400;
  }
  .image-upload > input {
    display: none;
  }
  .image-upload img {
    max-height: none;
  }
</style>
