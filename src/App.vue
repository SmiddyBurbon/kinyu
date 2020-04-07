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
  --eFormel-100: #CDFBF2;
  --eFormel-200: #9DF8ED;
  --eFormel-300: #6AEAE5;
  --eFormel-400: #44D0D6;
  --eFormel-500: #11A7BB;
  --eFormel-600: #0C83A0;
  --eFormel-700: #086386;
  --eFormel-800: #05476C;
  --eFormel-900: #033359;
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
#editor {
  display: grid;
  width: 100vw;
  height: calc(100vh - 4rem);
  margin-top: 4rem;
  grid-template-columns: 25vw 75vw;
}
#footer_logo {
  position: absolute;
  bottom: 1.5rem;
  right: 1.5rem;
}
</style>
