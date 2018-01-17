module.exports = {
  globalAuth : function (to, from, next) {
    if(localStorage.getItem('token')){
      next({
        name : 'homePage'
      })
    }else{
      next()
    }
  },
  adminAuth : function (to, from, next) {
    if(!localStorage.getItem('token')){
      next({
        name : 'loginPage'
      })
    }else{
      next()
    }
  }
}