import vue from 'vue'
import storage from 'good-storage'
import axios from 'axios'
import store from '@/store'

function setStorage (key, value) {
  storage.set(key, value)
  if (key === 'token') {
    axios.defaults.headers.common['xibenesb-accesstoken'] = value.access_token
  }
}

function getStorage (key) {
  return storage.get(key) || ''
}

function removeStorage (key) {
  storage.remove(key)
}
// 获取用户信息
function getUserInfo (userid, phone) {
  const url = 'security/masterdata/getuserinfo'
  return vue.axios.post(url, {
    reqdata: {
      userid: userid,
      phone: phone
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

function getQrCode (biztype, bizid) {
  const url = 'unauth/qrcode/create'
  return vue.axios.post(url, {
    reqdata: {
      biztype: biztype,
      bizid: bizid
    }
  }).then(res => {
    return Promise.resolve(res.data)
  })
}

function loginOut () {
  // removeStorage('token')
  // removeStorage('user')
  // removeStorage('currentCompany')
  storage.clear()
  storage.session.clear()
  setTimeout(() => {
    store.commit('loginOutSet')
  }, 20)
}

export {
  getQrCode,
  setStorage,
  getStorage,
  removeStorage,
  loginOut,
  getUserInfo
}
