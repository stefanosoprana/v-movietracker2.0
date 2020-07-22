<template lang="html">
  <b-container>
    <b-row>
      <b-col cols="12">
        <h1>Search a Movie</h1>
        <SearchBar/>
      </b-col>
    </b-row>

    <b-container>
      <b-row>
        <Card class="col-4" v-for="movie in movies.results" :key="movie.id" :movie="movie"/>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>

  import SearchBar from '@/components/SearchBar.vue'
  import Card from '@/components/Card.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      SearchBar,
      Card
    },
    computed: {
      ...mapState(['movies'])
    }
  }
</script>
