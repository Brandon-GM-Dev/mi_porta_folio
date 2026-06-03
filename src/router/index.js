import { createRouter, createWebHistory } from "vue-router";
import PortaFolio from "@views/portafolio/PortafolioView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      children: [
        {
          path: "",
          name: "PortaFolio",
          component: PortaFolio,
        },
      ],
    },
  ],
});

export default router;
