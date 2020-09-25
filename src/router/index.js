import Vue from "vue";
import VueRouter from "vue-router";
import Movie from "../views/Movie.vue";
import MovieID from "../views/MovieID.vue";
import Tracker from "../views/Tracker.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Movie",
    component: Movie
  },
  {
    path: "/movie/:movieid",
    name: "MovieID",
    component: MovieID,
    props: true
  },
  {
    path: "/tracker",
    name: "Tracker",
    component: Tracker,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
