import * as types from './mutation_types'
import router from '@/router'
import axios from 'axios'

export default {
  [types.SAVE_TOKEN](state, { token }){
    localStorage.setItem('token', token)
    axios.defaults.headers.common['authorization'] = token
    state.isLoggedIn = true
  },
  [types.GET_ARTICLES](state, { data }){
    state.articles = data
  },
  [types.GET_ARTICLE](state, { data }){
    state.article = data
  },
  [types.GET_USER](state, { data }){
    state.user = data
  },
  [types.GET_USER_ARTICLES](state, { data}){
    state.userArticles = data
  },
  [types.LOGOUT](state){
    localStorage.removeItem('token')
    state.isLoggedIn = false
    
  },
  [types.ADD_ARTICLE](state, { data }){
    state.articles.push(data)
  },
  [types.DELETE_ARTICLE](state, { data }){
    state.articles = state.articles.filter(article =>{
      return article._id !== data._id
    })
  }
}