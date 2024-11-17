const routes = [
  {
    path: "/",
    component: () => import("layouts/LandingLayout.vue"),
    children: [
      { path: "", component: () => import("pages/landing/Home.vue") },
      {
        path: "/pricing",
        component: () => import("pages/landing/Pricing.vue"),
      },
      {
        path: "/service",
        component: () => import("pages/landing/Service.vue"),
      },
      {
        path: "/login",
        component: () => import("pages/landing/Login.vue"),
      },
      {
        path: "/register",
        component: () => import("pages/landing/Register.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/IndexPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
