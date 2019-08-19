import { IRoute } from 'umi-types';

const routes: IRoute[] = [
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user'],
    routes: [
      {
        path: '/welcome',
        name: 'welcome',
        icon: 'table',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/login',
    component: '../layouts/UserLayout'
  },
  {
    component: './404',
  },
];
export default routes;
