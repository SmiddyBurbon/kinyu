<template>
  <aside>
    <p>Sidebar</p>
    <Download></Download>
  </aside>
</template>

<script>

  import Download from './Download.vue'

  export default {
    name: 'Sidebar',
    components: {
      Download
    }
  }
</script>

<style scoped>
  aside {
    background-color: var(--white);
    padding: 2.5rem 1.5rem;
    color: var(--grey);
  }
</style>
