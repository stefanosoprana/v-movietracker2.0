<template lang="html">
  <b-container>
    <div class="row">
      <div class="col-12">
        <h1>Tracker</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="wrapper">
          <div class="row">
            <div class="col-12">
              <h1>{{time}}</h1>
              <TrackerCard v-for="movieTrack in moviesTrack" :key="movieTrack.id" :movieTrack="movieTrack"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>

import TrackerCard from '@/components/TrackerCard.vue'
import { mapState } from 'vuex'
import moment from 'moment'


export default {
  components: {
    TrackerCard
  },
  computed: {
    ...mapState(['moviesTrack']),
    time: function () {
      // Take the sum of each time of each movie
      let sum = 0
      this.moviesTrack.map( x => {
        sum += x.runtime
      })
      // pass the sum to moment.js to format the numbers
      let duration = moment.duration(sum, 'minutes')
      // invert the object by dividing it into two arrays and then re-trasform it into one object
      let values = Object.values(duration._data).reverse()
      let keys = Object.keys(duration._data).reverse()
      let objectReverse = Object.assign(...keys.map((k, i) => ({[k]: values[i]})))
      // Iterate the Object and get key and value
      let format = ""
      for (var time in objectReverse) {
        if (objectReverse[time]) {
          format += ` ${objectReverse[time]} ${time} `
        }
      }
      return format
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
