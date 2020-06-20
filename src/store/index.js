import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: ""
  },
  mutations: {
    SET_MOVIE(state, movie){
      state.movie = movie
    }
  },
  actions: {
    FetchMovies({commit}, movie){
      return commit('SET_MOVIE', movie)
    }
  },
  modules: {}
});
