<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"></Header>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/studio?type=demo_table">
            <div class="thumb">
              <img src="img/demo/preview/table.png" />
            </div>
            <span>Premier League Table<br />(auto-filled)</span>
          </router-link>
        </li>
        <li>
          <router-link to="/studio?type=demo_score">
            <div class="thumb">
              <img src="img/demo/preview/score.png" />
            </div>
            <span>Premier League Match Score</span>
          </router-link>
        </li>
        <li>
          <router-link to="/studio?type=demo_formulae">
            <div class="thumb">
              <img src="img/demo/preview/formulae.png" />
            </div>
            <span>Formula E Race Result</span>
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
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,400i,700,700i&display=swap');

.menu {
  width: 100vw;
  overflow: scroll;
}
</style>
