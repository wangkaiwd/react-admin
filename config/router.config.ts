import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/login',
    component: '../layouts/UserLayout'
  },
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/',
        name: '欢迎',
        icon: 'table',
        component: './Welcome/Welcome',
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
