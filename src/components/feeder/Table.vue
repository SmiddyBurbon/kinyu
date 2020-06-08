<template>
  <div id="canvas" :style="cssVars">
    <div class="headline">
      <div class="country" v-if="this.country"><img :src="'img/eformel/flags/' + this.country + '.png'" /></div>
      <div class="event">
        <h1><input class="inputH1 apply-font" type="text" v-model="title" /></h1>
        <h2><input class="inputH2" @blur="setCountry(subline)" v-model="subline" type="text" placeholder="E-Prix" /></h2>
      </div>
      <div v-if="this.options.sponsor" class="sponsor">
        <img src="img/eformel/we_logo.svg" alt="Presented by Würth Elektronik" />
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
</template>

<script>
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
        title: "Rating",
        subline: "E-Prix",
        country: "",
        objects: [],
        width: 1024,
        height: 1024,
        fontFamily: 'Karla',
        options: {
          fontpicker: true,
          bgimage: true,
          gap: true,
          lines: 12,
          minLines: 1,
          maxLines: 12,
          points: true,
          colors: {
            primary: '#05476C',
            secondary: '#CDFBF2'
          }
        }
      }
    },
    mounted() {
      this.createList()
      this.$root.$emit('mounted', this.options)

      this.$root.$on('fontChanged', newFont => {
        this.updateFont(newFont)
      })

      this.$root.$on('colorsChanged', colors => {
        console.log(colors)
        this.options.colors.primary = colors.primary
        this.options.colors.secondary = colors.secondary
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
      updateName(i, name) {
        this.objects[i].name = name
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
        object.gap = ""
        object.points = ""
        this.objects.push(object);
      },
      updateFont(font) {
        this.fontFamily = font;
      }
    },
    computed: {
      cssVars() {
        return {
          '--width': this.width + 'px',
          '--height': this.height + 'px',
          '--fontFamily': this.fontFamily,
          '--primaryColor': this.options.colors.primary,
          '--secondaryColor': this.options.colors.secondary
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
    font-family: var(--fontFamily);
    color: var(--primaryColor);
    text-transform: uppercase;
    font-weight: 900;
    font-size: 32px;
    display: inline-block;
  }
  input::placeholder {
    color: var(--primaryColor);
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
    background-color: var(--primaryColor);
    color: var(--secondaryColor);
    width: 72px;
    text-align: center;
    height: 100%;
    margin: 0 16px 0 0;
  }
  .ranking li .position::placeholder {
    color: var(--secondaryColor);
    opacity: 1;
  }
  .ranking li .name {
    font-size: 28px;
    color: var(--primaryColor);
    width: 460px;
    line-height: 56px;
    height: 56px;
  }
  .ranking li .left, #ranking li .right {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    width: 221px;
    height: 56px;
    margin-left: 16px;
  }
  .ranking .points {
    background-color: var(--secondaryColor);
    color: var(--primaryColor);
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
