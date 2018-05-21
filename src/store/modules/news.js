/**
 * Created by lonelydawn on 2017-11-20.
 */

import * as types from '../types/news'
import news from '../../ajax/news'

const state = {
  news: []
}

const getters = {
  news: state => state.news
}

const actions = {
  getNews ({commit}, {type, keyword}) {
    news.getNews(type, keyword, (news) => commit(types.SET_NEWS, {news}))
  }
}

const mutations = {
  [types.SET_NEWS] (state, {news}) {
    state.news = news
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
