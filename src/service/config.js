let apiUrl = 'http://192.168.11.45:8080/pmrest' // 接口域名
// 接口域名
const apiDomain = apiUrl
// 接口返回状态码
const resCode = {
  ERR_OK: 1000,
  ERR_EX: 1005,
  ERR_OR: 1006,
  ERR_XS: 2000,
  ERR_RF: 1004,
  ERR_NR: 1007,
  ERR_NL: 1008
}
const rootFile = ''
/* 返回值 */
function upSwitch (res) {
  switch (res.data.code) {
    case resCode.ERR_OK:
      return res.data
  }
}

// 显示条数
const pageSize = 10
export {
  apiDomain,
  resCode,
  pageSize,
  upSwitch,
  rootFile
}
