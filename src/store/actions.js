import axios from 'axios'
import * as types from './mutation_types'

export default {
  signin(context, { email, password }) {
    return new Promise((resolve, reject) => {
      axios
        .post('/signin', {
          email,
          password,
        })
        .then(result => {
          console.log(result)
          context.commit(types.SAVE_TOKEN, {
            token: result.data.data,
          })
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  logout(context){
    context.commit(types.LOGOUT)
  },
  dataArticles(context) {
    axios
      .get('/articles')
      .then(result => {
        context.commit(types.GET_ARTICLES, {
          data: result.data.data,
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  dataArticle(context, { id }) {
    return new Promise((resolve, reject)=>{
      axios
      .get(`/articles/${id}`)
      .then(result => {
        context.commit(types.GET_ARTICLE, {
          data: result.data.data,
        })
        resolve(result.data.data)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
    
  },
  dataArticlesUser(context){
    console.log('test')
    axios.get('/articles/user/myarticle')
    .then(result => {
      console.log(result.data.data)
      context.commit(types.GET_USER_ARTICLES, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    
  },
  dataUser(context) {
    axios.get(`/users`)
    .then(result => {
      context.commit(types.GET_USER, {
        data: result.data.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  },
  addArticle(context, { title, article }){
    axios.post(`/articles`, {
      title,
      article
    })
    .then(result =>{
      context.commit(types.ADD_ARTICLE, {
        data: result.data.data
      })
    })
  },
  deleteArticle(context, { id }){
    axios.delete(`/articles/${id}`)
    .then(result => {
      context.commit(types.DELETE_ARTICLE, {
        data: result.data.data
      })
    })
    .catch(err =>{
      console.log(err)
    })
  }
}
