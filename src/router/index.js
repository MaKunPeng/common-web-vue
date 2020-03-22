import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: "/login"
  },
  // 登录组件
  {
    path: "/login",
    component: () => import("../components/Login.vue")
  },
  // 管理主页
  {
    path: "/home",
    component: () => import("../components/Home.vue")
  },
  // 注册页
  {
    path: "/signup",
    component: () => import("../components/Regist.vue")
  },
  // 重置密码页
  {
    path: "/forgot",
    component: () => import("../components/Forgot.vue")
  }
];

const router = new VueRouter({
  routes
});

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   // 如果用户访问登录页，放行
//   if (to.path === "/login") return next();
//   // 否则，验证是否存在token
//   const tokenStr = window.sessionStorage.getItem("token");
//   if (!tokenStr) {
//     return next("/login");
//   }
//   return next();
// });

export default router;
