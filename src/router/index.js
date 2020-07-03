import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import VideoDetails from "../views/VideoDetails.vue";
import ChannelDetails from "../views/ChannelDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/search",
    name: "Home",
    component: Home
  },
  {
    path: "/video/:id",
    name: "Video",
    component: VideoDetails
  },
  {
    path: "/playlist/:id",
    name: "Playlist",
    component: VideoDetails
  },
  {
    path: "/channel/:id",
    name: "Channel",
    component: ChannelDetails
  },
  {
    path: "*",
    redirect: { name: "Home" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;
