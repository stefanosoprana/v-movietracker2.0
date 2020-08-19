<template lang="html">
  <b-container>
    <div class="text-left">
      <h1 class="text-center">{{ movie.title }}</h1>
      <b-img v-bind:src="'https://image.tmdb.org/t/p/original/' + movie.backdrop_path" fluid alt="Responsive image"></b-img>
      <h3 class="mt-5">Genres</h3>
      <ul>
        <li v-for="genre in movie.genres"  :key="genre.id">{{ genre.name }}</li>
      </ul>
      <h3>Overview</h3>
      <p>{{ movie.overview }}</p>
      <h3>Product Company</h3>
      <ul class="d-flex logo_company">
        <li class="" v-for="production_company in movie.production_companies"  :key="production_company.id">
          <b-img v-bind:src="'https://image.tmdb.org/t/p/w500/' + production_company.logo_path" fluid alt="Responsive image"></b-img>
          <span>{{ production_company.name }}</span>
        </li>
      </ul>
      <h3>Release Date</h3>
      <p>{{ movie.release_date }}</p>
    </div>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    movieid: Number
  },
  created(){
    this.$store.dispatch('clear')
  },
  mounted(){
    this.$store.dispatch('FetchMovie', this.movieid)
  },
  computed: {
    ...mapState(['movie'])
  }
}
</script>

<style lang="scss" scoped>
  .logo_company {
    padding: 20px 0;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      padding: 0 20px;
      img {
        height: 30px;
        margin: 10px 0;
      }
    }
  }
</style>
