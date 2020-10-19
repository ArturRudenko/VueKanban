import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Tags from '../views/Tags'
import Kanban from "../views/Kanban"
import Tag from '../views/Tag'

export default new Router({
  routes: [
      {
          path: '/',
          name: 'kanban',
          component: Kanban
      },
      {
        path: '/tags',
        name: 'tags',
        component: Tags
      },
      {
          path: '/tags/tag',
          name: 'tag',
          component: Tag
      }
  ]
})