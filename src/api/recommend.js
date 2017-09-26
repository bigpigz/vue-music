/**
 * Created by BigZ on 17/9/25.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'


export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin:0,
    sin:0,
    ein:29,
    sortId:5,
    needNewCode:0,
    categoryId:10000000,
    rnd:Math.random()

  })
  return jsonp(url, data, options)
}

/*rnd:0.25785322317711423,
  g_tk:2097507928,
  jsonpCallback:'getPlaylist',
  loginUin:493971184,
  hostUin:0,
  format:'jsonp',
  inCharset:'utf8',
  outCharset:'utf-8',
  notice:0,
  platform:'yqq',
  needNewCode:0,
  categoryId:10000000,
  sortId:5,
  sin:0,
  ein:29*/
