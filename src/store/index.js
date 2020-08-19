import Vue from "vue";
import Vuex from "vuex";
import MovieService from '@/services/MovieService.js'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
    movie: []
  },
  mutations: {
    ADD_MOVIES(state, movies){
      state.movies = movies
    },
    ADD_MOVIE(state, movie){
      state.movie = movie
    },
    CLEAR(state){
      state.movie = []
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
    FetchMovie({commit, state}, id){
      if (!(state.movie.id == id)) {
        state.movie == []
        return MovieService.getMovie(id)
        .then(response => {
          commit('ADD_MOVIE', response.data)
        })
        .catch(error => {
          return console.log("there was a problem: " + error);
        })
      }
      else {
        console.log('è uguale');
      }
    },
    clear({commit}){
      commit('CLEAR')
    }
  },
  modules: {}
});
