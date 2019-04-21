'use strict'

module.exports = (startDate, endDate) => {
  if (!(startDate instanceof Date) || !(endDate instanceof Date)) {
    console.error('startDate and endDate expect Date')
  }
  let returnObj = {}
  let date3 = endDate.getTime() - startDate.getTime()  //时间差的毫秒数

  // 计算出相差天数
  let days = Math.floor(date3 / (24 * 3600 * 1000))
  returnObj.days = days

  // 计算出相差年数
  let years = Math.floor(days / 365)
  returnObj.years = years

  // 计算相差月数
  let months = Math.floor(days / 30)
  returnObj.months = months

  // 计算出小时数
  let leave1 = date3 % (24 * 3600 * 1000)    //计算天数后剩余的毫秒数
  let hours = Math.floor(leave1 / (3600 * 1000))
  returnObj.hours = hours

  // 计算相差分钟数
  let leave2 = leave1 % (3600 * 1000)        //计算小时数后剩余的毫秒数
  let minutes = Math.floor(leave2 / (60 * 1000))
  returnObj.minutes = minutes

  // 计算相差秒数
  let leave3 = leave2 % (60 * 1000)      //计算分钟数后剩余的毫秒数
  let seconds = Math.round(leave3 / 1000)
  returnObj.seconds = seconds

  let strTime = ""
  if (years >= 1) {
      strTime = years + "年前"
  } else if (months >= 1) {
      strTime = months + "个月前"
  } else if (days >= 1) {
      strTime = days + "天前"
  } else if (hours >= 1) {
      strTime = hours + "小时前"
  } else {
    if (minutes === 0) {
      strTime = "刚刚"
    } else {
      strTime = minutes + "分钟前"
    }
  }
  returnObj.strTime = strTime;    //帖子,文章,博客发表时间的一种简短表示方法
  return returnObj
}
