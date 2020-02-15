<template>
  <div id="app">
    <Header></Header>
    <div id="editor">
      <Sidebar></Sidebar>
      <Main></Main>
    </div>
    <img src="./assets/img/logo_footer.svg" id="footer_logo" alt="kinyu" />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Header, Sidebar, Main
  }
}
</script>

<style>
@import './assets/css/style.css';
@import url('https://fonts.googleapis.com/css?family=Karla:400,700&display=swap');

:root {
  --white: #fff;
  --bg-grey: #F7F7F8;
  --grey: #808B96;
  --black: #2c3e50;
  --eFormel-500: #11a7bb;
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
