import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BeerDetail from "../views/BeerDetail.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/beer/:id",
    name: "Beer Detail",
    component: BeerDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
