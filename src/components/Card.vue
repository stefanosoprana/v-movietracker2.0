<template>
  <div>
    <router-link :to="{ name: 'MovieID', params: { movieid: movie.id} }">
      <b-card
        :title="movie.title"
        :img-src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '#'"
        img-alt="Image"
        img-top
        tag="div"
        class="custom-margin mt-4 cardHover"
      >
        <b-card-text>
          {{ overviewMin }}
        </b-card-text>

      </b-card>
    </router-link>
  </div>

</template>

<script>
export default {
  props: {
    movie: Object
  },
  data(){
    return {
      overviewMin: ""
    }
  },
  created(){
    let overview = this.movie.overview
    let maxLetter = 150
    if (overview.length > maxLetter) {
      this.overviewMin = overview.substring(0, maxLetter - 3) + "..."
    }
  }
}
</script>

<style>
  .custom-margin {
    height: calc(100% - 1.5rem);
  }
</style>
