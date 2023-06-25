import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../pages/IndexPage.vue')
      },
      {
        path: 'list_dinguss',
        component: () => import('../pages/dingus/ListDingussPage.vue')
      },
      {
        path: 'create_dingus',
        component: () => import('../pages/dingus/CreateDingusPage.vue')
      },
      {
        path: 'detail_dingus',
        component: () => import('../pages/dingus/DetailDingusPage.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('../pages/ErrorNotFound.vue'),
  },
];

export default routes;
