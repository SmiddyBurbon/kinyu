<template>
  <div id="app">
    <!--<Landing></Landing>-->
    <!--<Header :isLoggedIn="isLoggedIn"></Header>-->
    <router-view></router-view>
    <cookie-law theme="dark-lime" buttonClass="cookieButton primary" buttonText="Got it"></cookie-law>
  </div>
</template>

<script>
import firebase from 'firebase'
import CookieLaw from 'vue-cookie-law'
//import Header from './components/Header.vue'
//import Landing from './components/Landing.vue'

export default {
  name: 'App',
  data() {
    return {
      isLoggedIn: true,
    }
  },
  components: {
    CookieLaw
    //Header,
    //Landing
  },
  metaInfo: {
    title: 'Feeder',
    // titleTemplate: '%s - Yay!',
    htmlAttrs: {
      lang: 'en',
      amp: true
    }
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
@import url('https://fonts.googleapis.com/css?family=Karla:400,700,400i,700i&display=swap');

:root {
  --white: #FFF;
  --bg-grey: #F7F7F8;
  --grey: #808B96;
  --black: #2C3E50;
  --red: #F50057;
  --turquoise: #14D0BE;
  --blue: #0B84DE;
}
* {
  margin: 0;
  padding: 0;
}
html {
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
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
  border-radius: 400px;
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
input {
  font-weight: inherit;
}
.image-upload > input {
  display: none;
}
.image-upload img {
  max-height: 100%;
  width: auto;
}
.image-upload > * {
  cursor: pointer;
}

.Cookie--bottom {
  background-color: var(--black);
}
.Cookie--bottom .cookieButton {
  background-color: var(--turquoise);
  box-shadow: none;
  outline: none;
  border: none;
  color: var(--white);
  padding: 0.75rem 1.25rem;
}
.cookieButton:hover {
  filter: brightness(120%);
}
</style>
