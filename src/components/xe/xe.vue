<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"></Header>
    <div class="menu">
      <ul>
        <li>
          <router-link to="studio?type=xe_results">
            <div class="thumb">
              <img src="img/xe/preview/results.png" />
            </div>
            <span>Results</span>
          </router-link>
        </li>
        <!--<li>
          <router-link to="studio?type=xe_rating">
            <div class="thumb">
              <img src="img/xe/preview/rating.png" />
            </div>
            <span>Driver Rating</span>
          </router-link>
        </li>-->
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

:root {
  --xe-100: #E6FFEF;
  --xe-200: #ACFECF;
  --xe-300: #74FCB4;
  --xe-400: #54FFAF;
  --xe-500: #22EE8E;
  --xe-600: #14D987;
  --xe-700: #0CB979;
  --xe-800: #088D61;
  --xe-900: #065940;
  --black: #282828;
  --xe-font: 'Roboto Condensed', sans-serif;
}
</style>
