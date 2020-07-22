<template>
  <div>
    <b-card
      :title="movie.title"
      :img-src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '#'"
      img-alt="Image"
      img-top
      tag="div"
      class="custom-margin mt-4 cardHover"
      v-on:click="fetchMovie"
    >
      <b-card-text>
        {{ overviewMin }}
      </b-card-text>

    </b-card>
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
  methods: {
    fetchMovie(){
      // this.$store.dispatch('FetchMovie', this.movie.id)
      console.log(this.movie.id);
    }
  },
  created(){
    let overview = this.movie.overview
    let maxLetter = 150
    if (overview.length > maxLetter) {
      let overviewMin = overview.substring(0, maxLetter - 3) + "..."
      this.overviewMin = overviewMin
    }
  }
}
</script>

<style>
  .custom-margin {
    height: calc(100% - 1.5rem);
  }

  .cardHover {

  }
</style>
