import { createRouter, createWebHistory } from "vue-router";
import PortaFolio from "@views/portafolio/PortafolioView.vue";
import BaseLayout from "@layouts/BaseLayout.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: BaseLayout,
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
