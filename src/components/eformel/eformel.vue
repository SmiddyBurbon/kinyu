<template>
  <div class="menu">
    <ul>
      <li>
        <router-link to="studio?type=eformel_rating">
          <img src="img/eformel/preview/rating.png" />
          <span>Rating</span>
        </router-link>
      </li>
      <li>
        <router-link to="studio?type=eformel_news">
          <img src="img/eformel/preview/news.png" />
          <span>News</span>
        </router-link>
      </li>
      <li>
        <router-link to="studio?type=eformel_story">
          <img src="img/eformel/preview/story.png" />
          <span>Story</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Menu',
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
  --eFormel-100: #CDFBF2;
  --eFormel-200: #9DF8ED;
  --eFormel-300: #6AEAE5;
  --eFormel-400: #44D0D6;
  --eFormel-500: #11A7BB;
  --eFormel-600: #0C83A0;
  --eFormel-700: #086386;
  --eFormel-800: #05476C;
  --eFormel-900: #033359;
  --eFormel-font: 'Roboto Condensed', sans-serif;
}
</style>
