import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '@/router'
import moment from 'moment'
import { getCommonData } from 'common/js/reqdata.js'
import { resCode, apiDomain } from 'service/config'
import { refershToken } from 'api/baseapi'
import { notice } from 'common/js/tip'
import { setStorage, getStorage, loginOut } from 'api/user'
/* axios 配置 */
let tokenFull = getStorage('token')
axios.defaults.baseURL = apiDomain
axios.defaults.data = getCommonData()
axios.defaults.timeout = 5000

if (tokenFull) {
  axios.defaults.headers.common['xibenesb-accesstoken'] = tokenFull.access_token
}

function refshToken () {
  return new Promise((resolve, reject) => {
    refershToken().then(res => {
      if (res.code === resCode.ERR_OK) {
        tokenFull = res.resdata
        setStorage('token', res.resdata)
        resolve(res.resdata)
      }
    })
  })
}
const getToakenAsync = async function (config) {
  let result = await refshToken()
  config.headers.common['xibenesb-accesstoken'] = result.access_token
  return config
}

function crateToast (title, desc) {
  notice(title, '')
}
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  if (response.data.code === resCode.ERR_EX) {
    refshToken()
    // .then(res => {
    //   if (res) {
    //     // location.href = `${location.href}?id=${Math.random()}`
    //     loginOut()
    //     crateToast(response.data.msg, '')
    //     router.replace({ name: 'login' })
    //   }
    // })
  } else if (response.data.code === resCode.ERR_OR || response.data.code === resCode.ERR_RF) {
    loginOut()
    crateToast(response.data.msg, '')
    router.replace({ name: 'login' })
  } else if (response.data.code === resCode.ERR_XS) {
    if (response.data.msg.indexOf('档案的查看权限') === -1) {
      crateToast(response.data.msg, '')
    }
    if (response.data.msg.indexOf('网络异常') > -1 && router.history.current.name !== 'error-500') {
      router.push({ name: 'error-500', params: { isgoback: true } })
    }
  }
  return response
}, function (error) {
  crateToast('网络错误', '请检查网络或稍候重试')
  if (router.history.current.name !== 'error-500') {
    router.push({ name: 'error-500', params: { isgoback: true } })
  }
  return Promise.reject(error)
})

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  if (!config.url.match(/public/) && tokenFull) {
    const nowDate = moment()
    const endDate = moment(tokenFull.access_token_createtimestamp).add(tokenFull.access_token_expirein
      , 's')
    const isRefresh = endDate.isBefore(nowDate)
    if (isRefresh) {
      return getToakenAsync(config)
    } else {
      return config
    }
  } else {
    return config
  }
  // return config
}, function (error) {
  return Promise.reject(error)
})

Vue.use(VueAxios, axios)
/* axios 配置end */
