import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 路由重定向
  {
    path: "/",
    redirect: "/login",
  },
  // 登录组件
  {
    path: "/login",
    component: () => import("../components/Login.vue"),
  },
  // 管理主页
  {
    path: "/home",
    component: () => import("../components/Home.vue"),
    name: "home",
    redirect: "/home/admin",
    children: [
      // 管理员页面
      {
        path: "admin",
        name: "admin",
        component: () => import("../components/biz/Administrator.vue"),
      },
      // 知识库页面
      {
        path: "knowledgebase",
        name: "knowledgebase",
        component: () => import("../components/biz/KnowledgeBase.vue"),
      },
      // 知识图谱
      {
        path: "knowledgegraph",
        name: "knowledgegraph",
        component: () => import("../components/biz/KnowledgeGraph.vue"),
      },
      // 语义理解
      {
        path: "semantic",
        name: "semantic",
        component: () => import("../components/biz/SemanticUnderstand.vue"),
      },
      // 情绪感知
      {
        path: "emotion",
        name: "emotion",
        component: () => import("../components/biz/EmotionalPerception.vue"),
      },
      // 对话管理
      {
        path: "dialog",
        name: "dialog",
        component: () => import("../components/biz/DialogueManage.vue"),
      }
    ],
  },
  // 注册页
  {
    path: "/signup",
    component: () => import("../components/Regist.vue"),
  },
  // 重置密码页
  {
    path: "/forgot",
    component: () => import("../components/Forgot.vue"),
  },
];

const router = new VueRouter({
  routes,
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
