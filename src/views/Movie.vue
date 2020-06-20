<template lang="html">
  <b-container>
    <h1>Search a Movie</h1>
    <SearchBar/>
  </b-container>
</template>

<script>

  import SearchBar from '@/components/SearchBar.vue'

  export default {
    components: {
      SearchBar
    },
  }
</script>
