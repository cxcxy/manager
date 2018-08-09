import vue from 'vue'
import { clientId, clientSecret } from 'common/js/reqdata'
import { getStorage } from './user'

function getVersion () {
  const url = 'public/login/getversion'
  return vue.axios.post(url, {
    version: 'V20180329'
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

function refershToken () {
  const url = 'public/login/refreshtoken'
  const token = getStorage('token')
  return vue.axios.post(url, {
    reqdata: {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: token.refresh_token
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export {
  getVersion,
  refershToken
}
