/**
 * Created by BigZ on 17/10/3.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey() {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'
  const data = Object.assign({},commonParams,{
    platform:'h5',
    needNewCode:1
  })
  return jsonp(url, data, options)
}
/*
g_tk:2097507928
uin:493971184
format:json
inCharset:utf-8
outCharset:utf-8
notice:0
platform:h5
needNewCode:1
_:1506997140505*/
