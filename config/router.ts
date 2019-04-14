export const pageRoutes = [
  {
    path: '/:menuId',
    breadcrumb: null,
    component: '../layouts/index',
    routes: [
      {
        path: '/:menuId/department',
        component: './staff',
        name: '部门管理',
        routes: [
          {
            path: '/:menuId/department',
            component: './staff/page.department',
            name: '部门管理',
          },
          {
            path: '/:menuId/department/staff/:id/:name',
            component: './staff/page.staff',
            name: '用户管理',
          },
          {
            path: '/:menuId/department/staff/:id/:name/detail/:id/:name',
            component: './page.userEdit',
            name: '用户编辑',
          },
        ],
      },
      {
        path: '/:menuId/user',
        component: './user',
        name: '用户管理',
        routes: [
          {
            path: '/:menuId/user',
            component: './user/page.user',
            name: '用户管理',
          },
          {
            path: '/:menuId/user/detail/:id/:name',
            component: './page.userEdit',
            name: '用户编辑',
          },
        ],
      },
      {
        path: '/:menuId/article/:id',
        component: './page.article',
        name: '文章管理',
        routes: [
          {
            path: '/:menuId/article/:id',
            component: './page.article',
            name: '文章管理',
          },
          // {
          //   path: '/:menuId/user/detail/:id/:name',
          //   component: './page.userEdit',
          //   name: '用户编辑',
          // },
        ],
      },
    ],
  },
];
