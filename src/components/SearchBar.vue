<template lang="html">
  <b-form-input type="search" size="lg" v-model="movie" v-on:keyup.enter="search" placeholder="insert movie title"></b-form-input>
</template>

<script>
  export default {
    data() {
      return {
        movie: "",
      }
    },
    methods: {
      search(){
        this.$store.dispatch('FetchMovies', this.movie)
      }
    }
  }
</script>
