const Menu = [
  { header: "看板" },
  {
    title: "桌面看板",
    group: "apps",
    icon: "mdi-monitor-dashboard",
    name: "dashboard",
    href: '/admin/dashboard'
  },
  { header: "用户" },
  {
    title: "用户管理",
    group: "user",
    icon: "mdi-account-tie",
    items: [
      { name: "list", title: "用户列表", component: "userlist" },
      { name: "add", title: "用户添加", component: "useradd" }
    ]
  },
  {
    title: "角色管理",
    group: "role",
    icon: "mdi-account-supervisor",
    items: [{ name: "list", title: "角色列表", component: "rolelist" }]
  },
  { header: "站点资源" },
  {
    title: "文章",
    group: "article",
    icon: "mdi-book-open-page-variant",
    items: [
      { name: "write", title: "写文章", component: "articleadd" },
      { name: "list", title: "文章列表", component: "articlelist" },
      { name: "menu", title: "分类目录", component: "category" },
      { name: "label", title: "标签云管理", component: "label" }
    ]
  },
  {
    title: "媒体",
    group: "media",
    icon: "mdi-home-circle",
    items: [
      { name: "list", title: "媒体库", component: "Dashboard" },
      { name: "write", title: "添加", component: "Dashboard" }
    ]
  }
];
// reorder menu
Menu.forEach(item => {
  if (item.items) {
    // item.items.sort((x, y) => {
    //   const textA = x.name.toUpperCase();
    //   const textB = y.name.toUpperCase();
    //   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    // });
  }
});

export default Menu;
