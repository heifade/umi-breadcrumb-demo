export const pageRoutes = [
  {
    path: '/',
    breadcrumb: null,
    component: '../layouts/index',
    routes: [
      {
        path: '/department',
        component: './staff',
        name: '部门管理',
        routes: [
          {
            path: '/department',
            component: './staff/page.department',
            name: '部门管理',
          },
          {
            path: '/department/staff/:id/:name',
            component: './staff/page.staff',
            name: '用户管理',
          },
          {
            path: '/department/staff/:id/:name/detail/:id/:name',
            component: './page.userEdit',
            name: '用户编辑',
          },
        ],
      },
      {
        path: '/user',
        component: './user',
        name: '用户管理',
        routes: [
          {
            path: '/user',
            component: './user/page.user',
            name: '用户管理',
          },
          {
            path: '/user/detail/:id/:name',
            component: './page.userEdit',
            name: '用户编辑',
          },
        ],
      },
    ],
  },
];
