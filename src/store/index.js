/**
 * Created by lonelydawn on 2017-11-20.
 */

import Vue from 'vue'
import Vuex from 'vuex'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news
  }
})
