import Vue from 'vue'
import Router from 'vue-router'

const layout = () => import('@/components/layout');
const reload = () => import('@/components/reLoad');

const main = () => import('@/views/index');
const table = () => import('@/views/example/table/index');
const tableFirst = () => import('@/views/example/table/tableFirst');
const tableSecond = () => import('@/views/example/table/tableSecond');
const tree = () => import('@/views/example/tree');


Vue.use(Router)

export const fixedRouter = [
  {
    path: '',
    component: reload,
    hidden: true
  },
  {
    path: '',
    component: layout,
    children: [
      {
        path: 'main',
        component: main,
        meta: {
          title: '首页',
          roles: ['user', 'admin'],
          icon: 'el-icon-info'
        }
      }
    ]
  }
];

export const permissionRouter = [
  {
    path: '/example',
    component: layout,
    name: 'Example',
    meta: {
      title: '案例',
      icon: 'el-icon-success',
      roles: ['admin', 'user']
    },
    children: [
      {
        path: '/example/table',
        name: 'Table'
      }
    ]
  }
];

export default new Router({
  routes: fixedRouter
})
