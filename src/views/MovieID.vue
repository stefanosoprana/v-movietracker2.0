<template lang="html">
  <b-container>
    <div class="text-left">
      <h1 class="text-center">{{ movie.title }}</h1>
      <button type="button" name="button" class="btn btn-primary mb-4" @click="addMovie">Visto</button>
      <!-- <button class="mb-4" type="button" name="button" @click="addMovie">{{ this.addButton ? 'visto' : 'da vedere' }}</button> -->
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
import MovieService from '@/services/MovieService.js'
import { mapState } from 'vuex'

export default {
  props: ['movieid'],
  data: function() {
    return {
      // addButton: true,
      movie: {}
    }
  },
  methods: {
    // add movie to moviesTrack
    addMovie(){
      // create an object to send to store
      let movie = {
        id: this.movie.id,
        title: this.movie.title,
        image: this.movie.poster_path,
        runtime: this.movie.runtime
      }
      // check if the item exist in the store
      let checkItem = this.moviesTrack.filter(x => x.id === movie.id)
      if (checkItem.length > 0) {
        alert('già visto')
      } else {
        // if not send to store
        this.$store.dispatch('addMovie', movie)
      }
    }
  },
  computed: {
    ...mapState(['moviesTrack'])
  },
  created(){
    console.log(this.moviesTrack.map(x => console.log(x)));
    return MovieService.getMovie(this.movieid)
    .then(response => {
      this.movie = response.data
    })
    .catch(error => {
      return console.log("there was a problem: " + error);
    })
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
