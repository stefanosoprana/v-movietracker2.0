<template lang="html">
  <div class="box">
    <div class="box-left">
      <img class="box-left__image" :src="movieTrack.image ? `https://image.tmdb.org/t/p/w200${movieTrack.image}` : '#'">
    </div>
    <div class="box-right">
      <div class="box-right__text text-left">
        <h3>{{movieTrack.title}}</h3>
        <h4>{{`${movieTrack.runtime} min`}}</h4>
      </div>
      <div class="box-right__button">
        <button class="btn btn-danger" type="button" name="button" @click="remove">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieTrack: Object,
  },
  methods: {
    remove(){
      this.$store.dispatch('removeMovie', this.movieTrack.id)
    }
  },
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.125);
  width: 50%;
  margin: 10px auto;
  padding: 10px;
  border-radius: 0.25rem;
  &-left {
    &__image {
      width: 100px;
    }
  }
  &-right {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__text {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }
}
</style>
