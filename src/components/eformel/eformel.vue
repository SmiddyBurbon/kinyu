<template>
  <div>
    <Header :isLoggedIn="isLoggedIn"></Header>
    <div class="menu">
      <ul>
        <li>
          <router-link to="studio?type=eformel_results">
            <div class="thumb">
              <img src="img/eformel/preview/results.png" />
            </div>
            <span>Ergebnisse</span>
          </router-link>
        </li>
        <li>
          <router-link to="studio?type=eformel_drivers">
            <div class="thumb">
              <img src="img/eformel/preview/drivers.png" />
            </div>
            <span>Fahrerwertung</span>
          </router-link>
        </li>
        <li>
          <router-link to="studio?type=eformel_teams">
            <div class="thumb">
              <img src="img/eformel/preview/teams.png" />
            </div>
            <span>Teamwertung</span>
          </router-link>
        </li>
         <li>
          <router-link to="studio?type=eformel_schedule">
            <div class="thumb">
              <img src="img/eformel/preview/schedule.png" />
            </div>
            <span>Rennkalender</span>
          </router-link>
        </li>
        <!--<li>
          <router-link to="studio?type=eformel_news">
            <div class="thumb">
              <img src="img/eformel/preview/news.png" />
            </div>
            <span>News</span>
          </router-link>
        </li>
        <li>
          <router-link to="studio?type=eformel_story">
            <div class="thumb">
              <img src="img/eformel/preview/story.png" />
            </div>
            <span>Story</span>
          </router-link>
        </li>-->
        <li>
          <router-link to="studio?type=eformel_quali">
            <div class="thumb">
              <img src="img/eformel/preview/quali.png" />
            </div>
            <span>Quali</span>
          </router-link>
        </li>
        <!--<li>
          <router-link to="studio?type=eformel_rating">
            <div class="thumb">
              <img src="img/eformel/preview/rating.png" />
            </div>
            <span>Driver Rating</span>
          </router-link>
        </li>
        <li>
          <router-link to="studio?type=eformel_quote">
            <div class="thumb">
              <img src="img/eformel/preview/quote.png" />
            </div>
            <span>Quote</span>
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
