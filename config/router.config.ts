import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/login',
    component: '../layouts/UserLayout'
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    // Routes: ['src/pages/Authorized'],
    // 用来配置路由的权限，如果配置了将会验证当前用户的权限，并决定是否展示
    authority: ['admin', 'user'],
    routes: [
      { path: '/', redirect: '/test/welcome' },
      {
        path: '/test',
        name: '测试页面',
        icon: 'smile',
        routes: [
          {
            path: '/test/welcome',
            name: '欢迎',
            icon: 'table',
            // authority: ['user', 'admin'],
            component: './Welcome/Welcome',
          },
          {
            path: '/test/welcome1',
            name: '欢迎1',
            icon: 'menu',
            // authority: ['user', 'admin'],
            component: './Welcome/Welcome',
          },
        ]
      },
      {
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
export default routes;
