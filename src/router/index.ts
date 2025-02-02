import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: DefaultLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import("@/modules/authenticated/home/views/homePage.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: AuthLayout,
    children: [
      {
        path: "/welcome",
        name: "welcome",
        component: () => import("@/modules/anonymous/welcome/views/index.vue"),
      },
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/modules/anonymous/auth/views/login.vue"),
      },
      {
        path: "/auth/register",
        name: "register",
        component: () => import("@/modules/anonymous/auth/views/register.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// guard
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = false;

  if (requiresAuth && !isAuthenticated) {
    next({ name: "welcome" });
  } else {
    next();
  }
});

export default router;
