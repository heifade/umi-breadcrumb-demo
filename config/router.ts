export const pageRoutes = [
  {
    path: '/',
    breadcrumb: null,
    component: '../layouts/index',
    routes: [
      {
        path: '/user',
        component: './user/page.user',
        name: '用户管理',
      },
      {
        path: '/user/children/:id/:name',
        component: './user/page.user.children',
        name: '子用户管理',
      },
      {
        path: '/user/children/:id/:name/detail/:id/:name',
        component: './page.detail',
        name: '子用户编辑',
      },

      {
        path: '/role',
        component: './role/page.role',
        name: '角色管理',
      },
      {
        path: '/role/children/:id/:name',
        component: './role/page.role.children',
        name: '子角色管理',
      },
      {
        path: '/role/children/:id/detail/:id/:name',
        component: './page.detail',
        name: '子角色编辑',
      },
    ],
  },
];
