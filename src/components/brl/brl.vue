<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"></Header>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/studio?type=art_standings">
            <div class="thumb">
              <img src="img/brl/preview/art_standings.png" />
            </div>
            <span>Art of Racing<br />Standings</span>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from '../Header.vue'

export default {
  name: 'Menu',
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');

.menu {
  width: 100vw;
  overflow: scroll;
}
</style>
