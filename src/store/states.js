export default {
  isLoggedIn: localStorage.getItem('token') !== null ? true : false,
  articles: [],
  article: {},
  user: {},
  userArticles: [],
}