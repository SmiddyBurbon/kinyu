<template>
  <div id="canvas">
    <div id="overlay"></div>
    <div class="content">
      <div class="score">
        <div class="team" id="team1">
          <div>
            <div class="club">
              <img
                class="flag"
                :src="'img/demo/logos/logo_' + team1.logo + '.svg'"
              />
              <input type="text" class="name" v-model="team1.name" @blur="updateName(team1, $event.target.value)" />
            </div>
            <textarea-autosize v-model="team1.scorers" v-if="options.scorers" class="scorers" rows="1" />
          </div>
          <input type="text" class="goals" v-model="team1.goals" />
        </div>
        <div class="separator">
          <span>&mdash;</span>
        </div>
        <div class="team" id="team2">
          <input type="text" class="goals" v-model="team2.goals" />
          <div>
            <div class="club">
              <input type="text" class="name" v-model="team2.name" @blur="updateName(team2, $event.target.value)" />
              <img
                class="flag"
                :src="'img/demo/logos/logo_' + team2.logo + '.svg'"
              />
            </div>
            <textarea-autosize v-model="team2.scorers" v-if="options.scorers" class="scorers" rows="1" />
          </div>
        </div>
      </div>

      <input type="text" class="venue" v-model="options.venue" />
      <input type="text" class="date" v-model="options.date" />
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
          date: '17/04/2020',
          venue: 'Anfield Road',
          scorers: true
        }
      }
    },
    mounted() {
      this.$root.$emit('mounted', this.options)

      this.$root.$on('updatedObjects', options => {
          document.getElementById('canvas').style.backgroundPositionX = (100-options.bgX) + "%";
      });
    },
    methods: {
      updateName(team, name) {
        console.log(team)
        team.logo = getClub(name)
        team.name = name
        // this.objects[i].car = getTeam(name)
      },
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
    width: 100%;
    height: 100%;
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
    background: none;
    border: none;
    outline: none;
    box-shadow: none;
    font-size: 24px;
    font-weight: bold;
  }
  .score .team {
    display: flex;
    flex-direction: row;
    width: 50%;
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
    font-style: italic;
    padding-top: 16px;
    padding-bottom: 32px;
    margin-top: 0;
    margin-bottom: -32px;
  }
  .score .name {
    flex-basis: 1;
    padding: 0 32px;
    text-transform: uppercase;
    letter-spacing: 0.08rem;
    background-color: var(--white);
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
  .score #team1,
  .score #team2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .score #team1 div,
  .score #team2 div {
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: flex-start;
    flex-grow: 1;
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
  .score #team2 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .score #team1 .name,
  .score #team1 .scorers {
    text-align: right;
  }
  .club .flag {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 0;
  }
  #team1 .club .flag {
    left: 0;
  }
  #team2 .club .flag {
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
</style>
