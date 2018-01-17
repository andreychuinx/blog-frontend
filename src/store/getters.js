export default {
  getStatusLogin: state =>{
    return state.isLoggedIn
  },
  getArticles: state =>{
    return state.articles
  },
  getArticle: state =>{
    return state.article
  },
  getUser: state =>{
    return state.user
  },
  getUserArticles: state =>{
    return state.userArticles
  }
}