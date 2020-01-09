export default [
  {
    path: "*",
    meta: {
      public: true
    },
    redirect: {
      path: "/404"
    }
  },
  {
    path: "/404",
    meta: {
      public: true
    },
    name: "NotFound",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/NotFound.vue`
      )
  },
  {
    path: "/403",
    meta: {
      public: true
    },
    name: "AccessDenied",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/Deny.vue`
      )
  },
  {
    path: "/500",
    meta: {
      public: true
    },
    name: "ServerError",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/Error.vue`
      )
  },
  {
    path: "/login",
    meta: {
      public: true
    },
    name: "Login",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/Login.vue`
      )
  },
  {
    path: "/",
    meta: {},
    name: "Root",
    redirect: {
      name: "Dashboard"
    }
  },
  {
    path: "/admin/dashboard",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "Dashboard",
    title: "桌面",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/dashboard.vue`
      )
  },
  {
    path: "/admin/user/list",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "userlist",
    title: "用户列表",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/user/list/index.vue`
      )
  },
  {
    path: "/admin/user/add",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "useradd",
    title: "用户添加",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/user/add/index.vue`
      )
  },
  {
    path: "/admin/role/list",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "rolelist",
    title: "角色列表",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/role/list/index.vue`
      )
  },
  {
    path: "/admin/article/add",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "articleadd",
    title: "写文章",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/article/add/index.vue`
      )
  },
  {
    path: "/admin/article/edit",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "articleedit",
    title: "修改文章",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/article/edit/index.vue`
      )
  },
  {
    path: "/admin/article/list",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "articlelist",
    title: "文章列表",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/article/list/index.vue`
      )
  },
  {
    path: "/admin/article/category",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "category",
    title: "分类目录",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/article/category/index.vue`
      )
  },
  {
    path: "/admin/article/label",
    meta: { breadcrumb: true, roles: ["ADMIN"] },
    name: "label",
    title: "标签云管理",
    component: () =>
      import(
        /* webpackChunkName: "routes" */
        /* webpackMode: "lazy-once" */
        `@/views/admin/article/label/index.vue`
      )
  }
];
