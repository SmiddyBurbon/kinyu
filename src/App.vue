<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <ul id="menu">
      <li>
        <router-link to="/studio?type=rating">Rating</router-link>
      </li>
      <li>
        <router-link to="/studio?type=news">News</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
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
#menu {
  display: grid;
  width: 61.8%;
  margin: 4rem auto 0;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2rem;
  grid-auto-rows: minmax(min-content, max-content);
  padding-top: 4rem;
}
#menu li {
  background: var(--white);
  -webkit-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 4px 16px 0px rgba(0,0,0,0.08);
  -webkit-transition: 0.2s;
  -moz-transition: 0.2s;
  transition: 0.2s;
  border-radius: 16px;
  display: inline;
  width: 100%;
  box-sizing: border-box;
}
#menu li:hover {
  -webkit-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  -moz-box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.08);
  transform: scale(1.04);
  -webkit-transform: scale(1.04);
  -moz-transform: scale(1.04);
  cursor: pointer;
}
#menu li a {
  padding: 2rem 3rem;
  display: block;
}
#menu li a,
#menu li a:visited {
  text-decoration: none;
  color: var(--black);
  font-weight: 700;
}
</style>
