import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Main from  '@/layouts/Main'
import Kanban from '@/views/Kanban'
import Tags from '@/views/Tags'
import Tag from '@/views/Tag'

export default new Router({
  routes: [
      {
          path: '/',
          name: 'main',
          component: Main,
          children: [
              {
                  path: '',
                  name: 'kanban',
                  component: Kanban,
                  meta: {
                      title: 'Kanban',
                  }
              },
              {
                  path: 'tags',
                  name: 'tags',
                  component: Tags,
                  meta: {
                      title: 'Tags',
                  }
              },
              {
                  path: 'tags/:id',
                  name: 'tag',
                  component: Tag,
                  meta: {
                      title: 'Edit tag',
                  }
              }
          ]
      },
  ]
})