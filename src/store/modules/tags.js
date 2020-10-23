import {v4 as uuidv4} from "uuid";

export default {
  namespaced: true,
  state: {
    tags: [],
  },
  mutations: {
    setTags: function (state, tags) {
      tags.forEach(tag => state.tags.push(tag))
    },
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
    },
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