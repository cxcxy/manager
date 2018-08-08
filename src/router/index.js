import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login')
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage')
// const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const addClient = r => require.ensure([], () => r(require('@/page/editClient/addClient')), 'addClient')
const editClient = r => require.ensure([], () => r(require('@/page/editClient/editClient')), 'editClient')
const createKey = r => require.ensure([], () => r(require('@/page/editClient/createKey')), 'createKey')
const addUser = r => require.ensure([], () => r(require('@/page/user/addUser')), 'addUser')
const addRole = r => require.ensure([], () => r(require('@/page/roleAuth/addRole')), 'addRole')
const editAuth = r => require.ensure([], () => r(require('@/page/roleAuth/editAuth')), 'editAuth')
const roleAuth = r => require.ensure([], () => r(require('@/page/roleAuth/roleAuth')), 'roleAuth')
const allotRole = r => require.ensure([], () => r(require('@/page/userRole/allotRole')), 'allotRole')
const addUserClient = r => require.ensure([], () => r(require('@/page/userRole/addUserClient')), 'addUserClient')

// const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
// const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
// const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
// const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
// const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
// const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
// const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
// const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
// const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet')
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain')

const routes = [
  {
    path: '/',
    component: login
  },
  {
    path: '/manage',
    component: manage,
    name: '',
    children: [{
      path: '/addUser',
      component: addUser,
      meta: ['用户维护', '新增用户']
    }, {
      path: '/allotRole',
      component: allotRole,
      meta: ['用户角色分配', '分配角色']
    }, {
      path: '/addUserClient',
      component: addUserClient,
      meta: ['用户角色分配', '用户角色分配']
    }, {
      path: '/addRole',
      component: addRole,
      meta: ['角色权限维护', '新增角色']
    }, {
      path: '/roleAuth',
      component: roleAuth,
      meta: ['角色权限维护', '已分配权限查看']
    }, {
      path: '/editAuth',
      component: editAuth,
      meta: ['角色权限维护', '权限维护']
    }, {
      path: '/addClient',
      component: addClient,
      meta: ['客户端维护', '新增客户端']
    }, {
      path: '/editClient',
      component: editClient,
      meta: ['客户端维护', '编辑客户端']
    }, {
      path: '/createKey',
      component: createKey,
      meta: ['客户端维护', '生成密钥对']
    }, {
      path: '/explain',
      component: explain,
      meta: ['说明', '说明']
    }]
  }
]

export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
})
