<template>
  <main id="main">
    <div id="preview">
      <EFormelResults v-if="isType('eformel_results')"></EFormelResults>
      <EFormelDrivers v-if="isType('eformel_drivers')"></EFormelDrivers>
      <EFormelTeams v-if="isType('eformel_teams')"></EFormelTeams>
      <EFormelQuali v-if="isType('eformel_quali')"></EFormelQuali>
      <EFormelRating v-if="isType('eformel_rating')"></EFormelRating>
      <EFormelSchedule v-if="isType('eformel_schedule')"></EFormelSchedule>

      <DemoTable v-if="isType('demo_table')"></DemoTable>
      <DemoScore v-if="isType('demo_score')"></DemoScore>
      <DemoFormulaE v-if="isType('demo_formulae')"></DemoFormulaE>

      <XEResults v-if="isType('xe_results')"></XEResults>

      <ARTStandings v-if="isType('art_standings')"></ARTStandings>
      <Table v-if="isType('feeder_table')"></Table>
    </div>
  </main>
</template>

<script>
  import EFormelResults from './eformel/Results.vue'
  import EFormelDrivers from './eformel/Drivers.vue'
  import EFormelTeams from './eformel/Teams.vue'
  import EFormelQuali from './eformel/Quali.vue'
  import EFormelRating from './eformel/Rating.vue'
  import EFormelSchedule from './eformel/Schedule.vue'

  import DemoTable from './demo/Table.vue'
  import DemoScore from './demo/Score.vue'
  import DemoFormulaE from './demo/FormulaE.vue'

  import ARTStandings from './brl/ARTStandings.vue'
  import Table from './feeder/Table.vue'

  import XEResults from './xe/Results.vue'

  export default {
    name: 'Main',
    components: {
      EFormelResults, EFormelDrivers, EFormelTeams, EFormelQuali, EFormelRating, EFormelSchedule,
      DemoTable, DemoScore, DemoFormulaE,
      XEResults,
      ARTStandings,
      Table
    },
    mounted() {
      this.resizeCanvas()
    },
    methods: {
      resizeCanvas() {
        var preview = document.getElementById('preview');
        var main = document.getElementById('main');
        var factor = 0

        if (preview.getBoundingClientRect().height > preview.getBoundingClientRect().width) {
          factor = (main.clientHeight) / (preview.clientHeight);
        }
        else if (preview.getBoundingClientRect().height == preview.getBoundingClientRect().width) {
          if(main.getBoundingClientRect().height > main.getBoundingClientRect().width){
            factor = (main.offsetWidth) / preview.offsetWidth;
          }
          else {
            factor = (main.clientHeight) / (preview.clientHeight);
          }
        }
        else {
          factor = (main.offsetWidth) / preview.offsetWidth;
        }
        preview.style.transform = 'scale(' + factor + ')'
      },
      isType(type) {
        if (this.$route.query.type == type) {
          return true
        }
        else {
          return false
        }
      }
    }
  }
</script>

<style scoped>
  main {
    background-color: var(--bg-grey);
    background-image: url('../assets/img/bg_pattern.svg');
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    height: calc(100vh - 4rem);
  }
  #preview {
    transform-origin: 50% 50%;
    /*transform: scale(0.5);*/
    padding: 0;
    width: auto;
    height: auto;
  }
</style>
