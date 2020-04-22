<template>
  <div class="menu">
    <ul>
      <li>
        <router-link to="/studio?type=demo_table">
          <img src="img/demo/preview/table.png" />
          <span>Table</span>
        </router-link>
      </li>
      <li>
        <router-link to="/studio?type=demo_score">
          <img src="img/demo/preview/score.png" />
          <span>Score</span>
        </router-link>
      </li>
    </ul>
    <FooterLogo></FooterLogo>
  </div>
</template>

<script>
import FooterLogo from '../FooterLogo.vue'

export default {
  name: 'Menu',
  components: {
    FooterLogo
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
