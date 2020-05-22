<template>
  <div id="canvas" :style="cssVars">
    <div class="logos">
      <img id="art_logo" src="../../assets/img/brl/art_logo.svg" />
      <img id="brl_logo" src="../../assets/img/brl/brl_logo.svg" />
    </div>
    <div class="flex">
      <div class="headline">
        <div class="event">
          <h1><input class="inputH1" type="text" v-model="title" /></h1>
          <h2><input class="inputH2" @blur="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
        </div>
      </div>

      <ul class="ranking">
        <li v-for="object in objects" :key="object.name" :id="'item' + object.index">
          <div class="position">
            <input
              type="text"
              :placeholder="[[object.position]]"
              v-model="object.position"
              @blur="updatePosition(object.index, $event.target.value)"
            />
          </div>

          <div class="left">
            <div class="name">
              <input
                type="text"
                placeholder="Driver / Team"
                :value="[[object.name]]"
                @blur="updateName(object.index, $event.target.value)"
              />
            </div>
          </div>
          <div class="right">
            <div class="points" v-if="options.points">
              <input
                class="points"
                type="number"
                placeholder="0"
                v-model="object.points"
                @blur="updatePoints(object.index, $event.target.value)"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { getCountry } from '../../assets/js/eformel.js'
  import { getTeam } from '../../assets/js/eformel.js'

  export default {
    name: 'Results',
    props: [
      'lines',
      'minLines',
      'maxLines',
    ],
    data() {
      return {
        title: "Standings",
        subline: "Round x of xx",
        objects: [],
        width: 1920,
        height: 1080,
        options: {
          // bgimage: true,
          lines: 10,
          minLines: 1,
          maxLines: 10,
          points: true
        }
      }
    },
    mounted() {
      this.createList()
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
      setCountry(venue) {
        this.country = getCountry(venue)
      },
      updateName(i, name) {
        this.objects[i].country = getCountry(name)
        this.objects[i].name = name
        this.objects[i].car = getTeam(name)
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
        object.points = ""
        this.objects.push(object);
      },
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width + 'px',
          '--height': this.height + 'px',
          '--art-blue': '#5697F2',
          '--art-black': '#0B0D11',
          '--art-yellow': '#FCAF02',
          '--art-red': '#A7091B'
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
    overflow: hidden;
  }
  #canvas {
    width: var(--width);
    height: var(--height);
    color: var(--white);
    box-sizing: border-box;
    background-image: url('../../assets/img/brl/art_bg.png');
    background-size: cover;
    background-position: -160px center;
    overflow: hidden;
    font-family: 'Oswald', sans-serif;
  }
  .logos {
    width: 38.2%;
    height: 1080px;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .logos #art_logo {
    width: 61.8%;
    position: relative;
    top: 400px;
  }
  .logos #brl_logo {
    width: 12%;
    position: relative;
    top: 800px;
  }
  .flex {
    width: 61.8%;
    height: 100%;
    position: absolute;
    box-sizing: border-box;
    top: 0;
    right: 0;
    background-image: url('../../assets/img/brl/art_bg_content.svg');
    background-size: cover;
    background-position: left center;
    padding: 0 240px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

  }
  .headline {
    color: var(--white);
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    height: 88px;
    overflow: hidden;
    margin-bottom: 24px;
  }
  .event {
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
    font-size: 40px;
    width: 400px;
    height: 64px;
    line-height: 64px;
  }
  h2 input {
    font-size: 24px;
    height: 32px;
    line-height: 32px;
    position: relative;
    top: -8px;
    font-weight: 400;
    width: 400px;
    color: var(--art-blue);
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
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
  }
  .ranking li:not(:last-of-type) {
    margin-bottom: 16px;
  }
  .ranking li .position {
    background-color: var(--art-blue);
    width: 72px;
    height: 100%;
    margin: 0 16px 0 0;
    transform: skewX(-4deg);
    overflow: hidden;
  }
  .ranking li .position input {
    background: none;
    color: var(--art-red);
    width: 80px;
    height: 140px;
    position: relative;
    top: -48px;
    margin-top: 4px;
    left: -4px;
    text-align: center;
    font-size: 96px;
    font-weight: 700;
    line-height: 116px;
    transform: skewX(4deg);
  }
  .ranking li .position::placeholder {
    color: var(--white);
    opacity: 1;
  }
  .ranking li .name {
    font-size: 40px;
    color: var(--art-black);
    background-color: var(--white);
    height: 64px;
    transform: skewX(-4deg);
    padding: 0 24px;
    width: 400px;
    flex-grow: 1;
  }
  .ranking li .name input {
    background: none;
    transform: skewX(4deg);
    top: -4px;
    position: relative;
    height: 64px;
    line-height: 62px;
  }
  .ranking li .left, #ranking li .right {
    display: flex;
    flex-direction: row;
  }
  .ranking li .right {
    position: relative;
    right: 0;
    display: flex;
    align-items: center;
  }
  .ranking .points {
    background-color: var(--art-yellow);
    text-align: right;
    width: 120px;
    height: 64px;
    line-height: 64px;
    padding-right: 24px;
    box-sizing: border-box;
    margin-left: 16px;
    transform: skewX(-4deg);
    overflow: hidden;
  }
  .ranking .points input {
    transform: skewX(4deg);
    background: none;
    color: var(--art-black);
    width: 120px;
    height: 72px;
    position: relative;
    top: -7px;
    right: 24px;
    overflow: hidden;
    text-align: right;
    font-size: 40px;
    font-weight: 700;
    line-height: 64px;
  }
  .ranking .points::placeholder {
    color: var(--art-black);
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
