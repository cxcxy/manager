import moment from 'moment'
import {
  getStorage
} from 'api/user'

let clientId = 'web_garsia'
let clientSecret = 'web_garsia'
if (location.host.indexOf('pm.xb969.com') >= 0) {
  clientId = '351217a1-60cd-4693-a2f9-4d29e6b85515'
  clientSecret = 'e1ba041e-b4df-4dd4-86c7-118865c59641'
}

function getCommonData () {
  const version = getStorage('version')
  const commonData = {
    privatefield: '',
    reqtime: moment().format('YYYY-MM-DD HH:mm:ss'),
    version: version === '' ? 'V20180412' : version.version
  }
  return commonData
}

function LongFormatData (long) {
  return moment(long).format('YYYY-MM-DD HH:mm:ss')
}

function fromDateFormat (value) {
  let nowDate = moment().format('YYYY-MM-DD')
  let date = moment(value).format('YYYY-MM-DD')
  let nowY = moment().format('YYYY')
  let createY = moment(value).format('YYYY')
  if (nowDate === date) {
    return moment(value).format('HH:mm')
  } else if (nowY === createY) {
    return moment(value).format('MM-DD')
  } else {
    return moment(value).format('YYYY-MM-DD')
  }
}
// timeType 1 为天数 2为小时
function DateDiff (startDt, endDt, timeType = 1) {
  let sDate = moment(startDt)
  let eDate = moment(endDt)
  let longTime = eDate.diff(sDate)
  let hour = longTime / (60 * 60 * 1000)
  // 向上取整,有小数就整数部分加1
  hour = Math.ceil(hour)
  let modDay = hour % 24
  modDay = (modDay > 8) ? 8 : modDay
  let day = hour / 24
  // 丢弃小数部分,保留整数部分
  day = parseInt(day)
  if (timeType === 1) {
    let workDay = day + modDay / 8
    // 四舍五入
    workDay = Math.round(workDay * 100) / 100
    return workDay
  } else if (timeType === 2) {
    let workHour = 0
    if (modDay > 8) {
      workHour = day * 8 + 8
    } else {
      workHour = day * 8 + modDay
    }
    return workHour
  }
  return null
  //  向下取整
  // Math.floor(7 / 2)
}

export {
  getCommonData,
  LongFormatData,
  clientId,
  clientSecret,
  DateDiff,
  fromDateFormat
}
