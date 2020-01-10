import router from "./router";
import store from "./store";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/util/auth";

NProgress.configure({ showSpinner: false }); // NProgress Configuration

// permission judge function
function hasPermission(roles, permissionRoles) {
  if (roles.indexOf("ADMIN") >= 0) return true; // admin permission passed directly
  if (!permissionRoles) return true;
  return roles.some(role => permissionRoles.indexOf(role) >= 0);
}

const whiteList = ["/login", "/404"]; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar

  if (getToken()) {
    // determine if there has token
    /* has token */
    if (to.path === "/login") {
      console.log("login啊");
      next({ path: "/" });
      // if current page is dashboard will not trigger	afterEach hook, so manually handle it
      NProgress.done();
    } else {
      if (store.state.user.roles.length === 0) {
        // 判断当前用户是否已拉取完user_info信息
        console.log("拉取角色信息");
        store
          .dispatch("user/GetUserInfo")
          .then(res => {
            // 拉取user_info
            const roles = res.data.roles; // note: roles must be a array! such as: ['editor','develop']
            console.log(roles);
            // store.dispatch('GenerateRoutes', { roles }).then(() => { // 根据roles权限生成可访问的路由表
            //   router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
            next({ ...to, replace: true }); // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
            // })
          })
          .catch(error => {
            store.dispatch("user/FedLogOut").then(() => {
              // Message.error(err || 'Verification failed, please login again')
              console.log(error);
              next({ path: "/" });
            });
          });
      } else {
        // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
        if (hasPermission(store.state.user.roles, to.meta.roles)) {
          console.log("判断角色信息");
          next();
          // NProgress.done()
        } else {
          console.log("没有权限403");
          next({ path: "/403", replace: true, query: { noGoBack: true } });
        }
      }
    }
  } else {
    console.log(to.path);
    /* has no token */
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next(`/login?redirect=${to.path}`); // 否则全部重定向到登录页
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
