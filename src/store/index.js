import Vue from "vue";
import Vuex from "vuex";
import MovieService from '@/services/MovieService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    moviesTrack: []
  },
  mutations: {
    ADD_MOVIES(state, movies){
      state.movies = movies
    },
    ADD_MOVIE(state, movie){
      state.moviesTrack.unshift(movie)
    },
    REMOVE_MOVIE(state, itemRemoved){
      state.moviesTrack = itemRemoved
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
    addMovie({commit}, movie){
      commit('ADD_MOVIE', movie)
    },
    removeMovie({commit, state}, movieId){
      let itemRemoved = state.moviesTrack.filter(x => x.id !== movieId)
      commit('REMOVE_MOVIE', itemRemoved)
    }
  },
  modules: {}
});
