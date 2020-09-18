<template lang="html">
  <div class="box">
    <div class="box-left">
      <img class="box-left__image" :src="movieTrack.image ? `https://image.tmdb.org/t/p/w200${movieTrack.image}` : '#'">
    </div>
    <div class="box-right">
      <h3>{{movieTrack.title}}</h3>
      <h4>{{`${movieTrack.runtime} min`}}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movieTrack: Object,
  }
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
}
</style>
