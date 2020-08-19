import axios from 'axios'

const apiClient = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

export default {
  getMovies(movie) {
    return apiClient.get('/search/movie', {
      params: {
        api_key: "34da49db03cff40a92cb2b8f356c68fe",
        language: "it",
        query: movie
      }
    })
  },
  getMovie(id) {
    return apiClient.get('/movie/' + id , {
      params: {
        api_key: "34da49db03cff40a92cb2b8f356c68fe",
        language: "it",
      }
    })
  }
}
