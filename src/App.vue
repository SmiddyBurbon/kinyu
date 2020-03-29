<template>
  <div id="app">
    <router-link to="/studio">Studio</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    }
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
  --eFormel-100: #CDFBF2;
  --eFormel-700: #086386;
  --eFormel-500: #11A7BB;
  --eFormel-800: #05476C;
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
