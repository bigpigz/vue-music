/**
 * Created by BigZ on 17/10/2.
 */
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList() {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'
  const data = Object.assign({}, commonParams, {
    g_tk:2097507928,
    inCharset:'utf-8',
    outCharset:'utf-8',
    platform:'h5',
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

