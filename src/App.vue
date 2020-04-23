<template>
  <div id="app">
    <Header :isLoggedIn="isLoggedIn"></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
import Header from './components/Header.vue'

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: true,
    }
  },
  components: {
    Header
  },
  methods: {
    logIn() {
      this.isLoggedIn = true
    },
    logOut() {
      this.isLoggedIn = false
    }
  },
  mounted() {
    if(firebase.auth().currentUser) {
      this.isLoggedIn = true
    }
    else {
      this.isLoggedIn = false
    }

    this.$root.$on('loggedOut', this.logOut);
    this.$root.$on('loggedIn', this.logIn);
  }
}
</script>

<style>
/* @import './assets/css/style.css'; */
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

:root {
  --white: #FFF;
  --bg-grey: #F7F7F8;
  --grey: #808B96;
  --black: #2C3E50;
  --red: #F50057;
  --turquoise: #14D0BE;
}
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100vw;
  width: 100vh;
  overflow: hidden;
}
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
}
#app {
  background: var(--white);
  font-family: Karla, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--black);
  display: grid;
  width: 100vw;
  height: 100vh;
}
#footer_logo {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}
button {
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none;
  outline: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04rem;
  cursor: pointer;
}
button.primary {
  background-color: var(--black);
  border: none;
  color: var(--white);
}
button.primary:hover {
  filter: brightness(120%);
}
button.secondary {
  background-color: var(--white);
  border: 2px solid var(--black);
  color: var(--black);
}
button.secondary:hover {
  filter: brightness(200%);
}
</style>
