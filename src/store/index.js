import Vue from "vue";
import Vuex from "vuex";
import MovieService from '@/services/MovieService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: []
  },
  mutations: {
    ADD_MOVIES(state, movies){
      state.movies = movies
    }
  },
  actions: {
    FetchMovies({commit}, movie){
      return MovieService.getMovies(movie)
        .then(response => {
            commit('ADD_MOVIES', response.data)
        })
        .catch(error => {
          return console.log("there was a problem: " + error);
        })
    },
    FetchMovie(id){
      console.log(id);
      return MovieService.getMovie(id)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
          return console.log("there was a problem: " + error);
        })
    }
  },
  modules: {}
});
