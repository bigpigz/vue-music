/**
 * Created by BigZ on 17/9/25.
 */
import orginJSONP from 'jsonp'

export default function jsonp(url, data, option) {
  //如果没有问号，第一个拼接一个问号
  url += (url.indexOf('?')<0 ? '?' : '&') +param(data)
  return new Promise((resolve, reject) => {
    orginJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += `&${k}=${encodeURIComponent(value)}`
  }
  //如果有data 去掉第一个& ，没有就返回空''
  return url ? url.substring(1) : ''
}
