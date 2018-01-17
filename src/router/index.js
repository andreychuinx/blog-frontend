import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'

import home from '@/components/home'
import article from '@/components/article'
import profile from '@/components/profile'
import addArticle from '@/components/AddArticle'
import editArticle from '@/components/EditArticle'
import authentification from './authentification'

Vue.use(Vuex)
Vue.use(Router)

export default new Router({
  lickActiveCLass : 'is-active',
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: home,
    },
    {
      path: '/article',
      component: article,
      props: true,
      children: [
        
        {
          path: ':id/detail',
          component: article
        },
        
      ]
    },
    {
      path: '/profile',
      component: profile,
      children: [
        {
          path: 'addarticle',
          component: addArticle
        },
      ]
    },
    {
      path: '/article/:id/edit',
      component: editArticle
    }
  ]
})
