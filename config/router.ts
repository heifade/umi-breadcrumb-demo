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
        path: '/user/children/:id',
        component: './user/page.user.children/$id',
        name: '子用户管理',
      },
      {
        path: '/user/children/:id/detail/:id',
        component: './page.detail/$id',
        name: '子用户编辑',
      },

      {
        path: '/role',
        component: './role/page.role',
        name: '角色管理',
      },
      {
        path: '/role/children/:id',
        component: './role/page.role.children/$id',
        name: '子角色管理',
      },
      {
        path: '/role/children/:id/detail/:id',
        component: './page.detail/$id',
        name: '子角色编辑',
      },
    ],
  },
];
