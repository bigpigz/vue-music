/**
 * Created by BigZ on 17/9/27.
 */
import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state,singer){
    state.singer = singer
  }
}

export default mutations
