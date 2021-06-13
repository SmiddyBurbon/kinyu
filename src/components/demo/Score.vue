<template>
  <div id="canvas" :style="cssVars">
    <div id="overlay"></div>
    <div class="content">
      <div class="score">

        <div class="team" id="team1">
          <div class="club">
            <div class="image-upload" v-if="options.logos">
              <label for="file-input-1">
                <img
                  class="flag"
                  :src="'img/demo/flags/' + team1.logo + '.png'"
                />
              </label>
              <input id="file-input-1" type="file" @change="readURL('1')" />
            </div>
            <input type="text" class="name" v-model="team1.name" @blur="updateName(team1, $event.target.value)" />
          </div>
          <textarea-autosize v-model="team1.scorers" v-if="options.scorers" class="scorers" rows="1" />
        </div>

        <div class="separator">
          <input type="text" class="goals" v-model="team1.goals" />
          <span>&mdash;</span>
          <input type="text" class="goals" v-model="team2.goals" />
        </div>

        <div class="team" id="team2">
          <div class="club">
            <input type="text" class="name" v-model="team2.name" @blur="updateName(team2, $event.target.value)" />
            <div class="image-upload" v-if="options.logos">
              <input id="file-input-2" type="file" @change="readURL('2')" />
              <label for="file-input-2">
                <img
                  class="flag"
                  :src="'img/demo/flags/' + team2.logo + '.png'"
                />
              </label>
            </div>
          </div>
          <textarea-autosize v-model="team2.scorers" v-if="options.scorers" class="scorers" rows="1" />
        </div>

      </div>
      <input type="text" class="venue" v-model="options.venue" v-show="options.venue" />
      <input type="text" class="date" v-model="options.date" v-show="options.date" />
    </div>

    <div class="watermark">
      <p>Created with<br /><strong>feeder.vercel.app</strong></p>
      <img id="logo" class="small" src="img/icons/ic_logo.svg" />
    </div>
  </div>
</template>

<script>
  import { getClub } from '../../assets/js/demo.js'

  export default {
    name: 'Score',
    data() {
      return {
        team1: {
          name: 'Club Name',
          logo: '',
          goals: 0,
          scorers: "Scorers"
        },
        team2: {
          name: 'Club Name',
          logo: '',
          goals: 0,
          scorers: "Scorers"
        },
        width: 1080,
        height: 1080,
        options: {
          bgimage: true,
          bgX: 50,
          logos: true,
          date: '',
          venue: 'Venue',
          scorers: true
        }
      }
    },
    mounted() {
      this.$root.$emit('mounted', this.options)

      this.$root.$on('updatedObjects', options => {
          document.getElementById('canvas').style.backgroundPositionX = (100-options.bgX) + "%";
      });
      this.setDate()
    },
    methods: {
      updateName(team, name) {
        console.log(team)
        team.logo = getClub(name)
        team.name = name
      },
      setDate() {
        var today = new Date();
        var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
        this.options.date = date
      },
      readURL(team) {
        var file = document.getElementById('file-input-' + team).files[0];
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
          var img = document.getElementById('team' + team).getElementsByClassName('flag')[0].src = reader.result;
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
  #preview {
    width: 1024px;
    height: 1024px;
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
    background-size: cover;
    position: relative;
  }
  #overlay {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1));
    mix-blend-mode: multiply;
    opacity: 0.4;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .content {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 40px 40px 40px;
    z-index: 99;
  }
  .score {
    width: 100%;
    display: flex;
    flex-direction: row;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 16px;
  }
  .score input {
    height: 64px;
    line-height: 64px;
  }
  input {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    white-space: normal;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 24px;
    font-family: inherit;
    font-weight: bold;
  }
  .score .team {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  .score .team textarea {
    height: 40px;
    width: auto;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 24px;
    line-height: 32px;
    font-weight: normal;
    margin-top: 1rem;
    color: var(--white);
    text-transform: uppercase;
    font-family: inherit;
    font-style: italic;
    padding-top: 16px;
    padding-bottom: 32px;
    margin-top: 0;
    margin-bottom: -80px;
  }
  .score .name {
    flex-basis: 1;
    padding: 0 32px;
    text-transform: uppercase;
    background-color: var(--white);
    font-family: inherit;
    font-weight: 700;
  }
  .score .goals {
    background-color: var(--turquoise);
    color: var(--white);
    width: 64px;
    height: 64px;
    text-align: center;
    font-size: 2rem;
    padding: 0;
    box-shadow: inset 240px solid var(--turquoise);
  }
  .score .team .club {
    flex-direction: row;
    position: relative;
    background-color: var(--white);
  }
  .score #team1 div,
  .score #team2 div {
    display: flex;
    justify-content: flex-start;
  }
  .score #team1 div {
    justify-content: flex-end;
  }
  .score #team2 div {
    justify-content: flex-start;
  }
  .score #team1 textarea {
    text-align: right;
    padding-right: 32px;
  }
  .score #team2 textarea {
    padding-left: 32px;
  }
  .score #team1 .name,
  .score #team1 .scorers {
    text-align: right;
  }
  .club .image-upload {
    position: absolute;
  }
  .club .flag {
    width: 102px;
    height: 64px;
    position: relative;
    top: 0;
  }
  #team1 .club .image-upload {
    left: 0;
  }
  #team2 .club .image-upload {
    top: 0;
    right: 0;
  }
  .separator {
    height: 64px;
    flex-grow: 64px;
    background-color: var(--turquoise);
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .venue, .date {
    width: 100%;
    text-align: center;
    color: var(--white);
    text-transform: uppercase;
    font-size: 16px;
  }
  .date {
    font-weight: normal;
  }
  .image-upload > input {
    display: none;
  }

  .watermark {
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: right;
    width: 100%;
    text-align: right;
    margin-top: 20px;
    position: absolute;
    top: 40px;
    right: 40px;
    z-index: 800;
  }
  .watermark p {
    line-height: 1;
    font-size: 16px;
  }
  #logo {
    width: 40px;
    height: 40px;
    margin-left: 16px;
  }
</style>
