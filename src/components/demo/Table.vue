<template>
  <div id="canvas" :style="cssVars">
    <div class="content">
      <div class="border"></div>
      <ul class="ranking">
        <li class="title">
          <input class="matchweek" type="text" v-model="title" />
          <div class="right">
            <input v-if="options.played" type="text" placeholder="P" />
            <input v-if="options.goaldiff" type="text" placeholder="GD" />
            <input v-if="options.points" type="text" placeholder="PTS" />
          </div>
        </li>
        <li v-for="object in objects" :key="object.name" :id="'item' + object.index">
          <input
            class="position"
            type="text"
            :placeholder="[[object.position]]"
            v-model="object.position"
            @blur="updatePosition(object.index, $event.target.value)"
          />
          <div class="left">
            <div class="image-upload" v-if="options.logos">
              <label :for="'logo-input-' + object.index">
                <img
                  class="logo"
                  :src="'img/demo/logos/logo_' + object.logo + '.svg'"
                />
              </label>
              <input :id="'logo-input-' + object.index" type="file" @change="changeLogo(object.index)" />
            </div>
            <input
              class="name"
              type="text"
              placeholder="Team"
              :value="[[object.name]]"
              @blur="updateName(object.index, $event.target.value)"
            />
          </div>
          <div class="right">
            <input
              v-if="options.played"
              class="played"
              type="text"
              v-model="object.played"
              placeholder="0"
            />
            <input
              v-if="options.goaldiff"
              class="goaldiff"
              type="text"
              placeholder="0"
              v-model="object.goaldiff"
            />
            <input
              v-if="options.points"
              class="points"
              type="text"
              placeholder="0"
              v-model="object.points"
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getClub } from '../../assets/js/demo.js'

  export default {
    name: 'Table',
    props: [
      'cars',
      'gap',
      'lines',
      'minLines',
      'maxLines',
    ],
    data() {
      return {
        title: "Premier League – Matchweek #",
        objects: [],
        width: 1080,
        height: 1080,
        options: {
          api: true,
          bgimage: true,
          logos: true,
          bgX: 50,
          lines: 20,
          minLines: 1,
          maxLines: 20,
          played: true,
          goaldiff: true,
          points: true
        }
      }
    },
    mounted() {
      this.createList()
      this.$root.$emit('mounted', this.options)

      this.axios
        .get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021')
        .then(
          response => (
            this.setData(response)
          )
        );

      this.$root.$on('getData', () => {
        this.axios
          .get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=2020-2021')
          .then(
            response => (
              this.setData(response)
            )
          );
      });

      this.$root.$on('updatedObjects', options => {
          document.getElementById('canvas').style.backgroundPositionX = (100-options.bgX) + "%";

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

      /*var i

      this.axios
        .get('https://www.thesportsdb.com/api/v1/json/1/lookuptable.php?l=4328&s=1920')
        .then(
          response => (
            this.fillData(response),
            console.log(response.data.table)
          )
        );*/
    },
    methods: {
      setData(response) {
        var i;
        for(i = 0; i < this.objects.length; i++) {
          this.objects[i].name = response.data.table[i].strTeam
          this.objects[i].logo = getClub(this.objects[i].name)

          this.objects[i].played = response.data.table[i].intPlayed
          this.objects[i].goaldiff = response.data.table[i].intGoalDifference
          this.objects[i].points = response.data.table[i].intPoints
        }
        console.log(this.objects)
      },
      updateName(i, name) {
        this.objects[i].logo = getClub(name)
        this.objects[i].name = name
        // this.objects[i].car = getTeam(name)
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
        for (var i = 0; i < this.options.lines; i++) {
          this.createObject(i)
        }
      },
      createObject(i) {
        let object = {}
        object.index = i
        object.position = i + 1
        object.name = ""
        object.logo = ""
        object.played = ""
        object.goaldiff = ""
        object.points = ""
        this.objects.push(object);
      },
      changeLogo(id) {
        var file = document.getElementById('logo-input-' + id).files[0];
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
          var img = document.getElementById('item' + id).getElementsByClassName('logo')[0].src = reader.result;
        }

        if(file){
          reader.readAsDataURL(file);
        }
      },
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
    padding: 40px 160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-image: url('../../assets/img/demo/bg.png');
    color: var(--demo-black);
    box-sizing: border-box;
    background-size: cover;
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
    color: var(--demo-black);
    font-weight: 900;
    font-size: 20px;
    display: inline-block;
  }
  input::placeholder {
    color: var(--demo-black);
    opacity: .64;
  }
  .content {
    position: relative;
    overflow: hidden;
  }
  .border {
    width: 8px;
    height: 100%;
    background-image: linear-gradient(#993AFA, #ED0A76);
    position: absolute;
    border-radius: 2px 0 0 2px;
    top: 0;
    left: 0;
  }
  .title,
  .title input {
    font-size: 20px;
    font-weight: 700;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-style: italic;
    text-transform: uppercase;
  }
  .matchweek {
    margin-left: 8px;
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
    padding: 0 16px 16px;
    background-color: var(--white);
    border-radius: 2px;
    box-shadow: 0 4px 16px rgba(0,0,0,.12);
  }
  .ranking li {
    height: 36px;
    background-color: var(--white);
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    border-bottom: 1px solid var(--demo-lightGrey);
  }
  .ranking li.title {
    height: 44px;
  }
  .ranking li:first-of-type,
  .ranking li:first-of-type input {
    text-transform: uppercase;
  }
  .ranking li:first-of-type,
  .ranking li:last-of-type {
    border: none;
  }
  .ranking li .logo {
    height: 36px;
    width: 36px;
    margin-right: 8px;
    display: inline;
  }
  .ranking li:not(:first-of-type) input {
    line-height: 36px;
  }
  .ranking li .position {
    color: var(--demo-black);
    width: 48px;
    text-align: center;
    font-style: italic;
    height: 36px;
    line-height: 36px;
  }
  .ranking li .position::placeholder {
    color: var(--demo-black);
    opacity: 1;
  }
  .ranking li .name {
    font-size: 20px;
    color: var(--demo-black);
    width: 460px;
  }
  .ranking li .left, #ranking li .right {
    display: flex;
    flex-direction: row;
  }
  .ranking li .right {
    position: absolute;
    right: 0;
  }
  .ranking li .right input {
    width: 72px;
    height: 36px;
    line-height: 36px;
    padding: 0 16px;
    text-align: right;
    display: inline-block;
  }
  .ranking li .right input:not(:first-of-type) {
    border-left: 1px solid var(--demo-lightGrey);
  }
  .ranking li.title .right input {
    border-left: none;
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
