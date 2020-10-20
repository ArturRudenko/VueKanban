import {v4 as uuidv4} from "uuid";

export default {
  namespaced: true,
  state: {
    tags: [
      {
        id: uuidv4(),
        title: 'Job',
        color: '#FF0000',
        description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
      },
      {
        id: uuidv4(),
        title: 'Home',
        color: '#00FF00',
        description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
      },
      {
        id: uuidv4(),
        title: 'Other',
        color: '#0000FF',
        description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
      },
    ],
  },
  mutations: {
    removeFromTags: function (state, id) {
      state.tags = state.tags.filter((item) => item.id !== id);
    },
    addNewTag: function (state, title) {
      state.tags.push({
        id: uuidv4(),
        title: title,
        color: '#FFFFFF',
        description: 'new tag'
      });
    },
    updateTagContent: function (state, { id, title, description, color }) {
      state.tags.forEach(tag => {
        if(tag.id === id) {
          tag.title = title
          tag.color = color
          tag.description = description
        }
      })
    }
  },
  actions: {
    removeTag: ({ commit }, id) => commit('removeFromTags', id),
    addTag: ({ commit }, title) => commit('addNewTag', title),
    updateTag: ({ commit }, tagData) => commit('updateTagContent', tagData)
  },
  getters: {
    allTags(state) {
      return state.tags
    },
  }
}