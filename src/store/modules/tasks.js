import {v4 as uuidv4} from "uuid";

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItems: function (state, tasks) {
      tasks.forEach(task => state.items.push(task))
    },
    removeFromItems: function (state, id) {
      state.items = state.items.filter(item => item.id !== id)
      },
    updateItemContent: function (state, { id, title, text, tags, status }) {
      state.items.forEach(item => {
        if(item.id === id) {
          item.status = status
          item.tags = tags
          item.title = title
          item.text = text
        }
      })
    },
    addNewItem: function (state, { title, text, tags, status }) {
      state.items.push({
        id: uuidv4(),
        status: status,
        tags: tags,
        title: title,
        text: text
      });
    },
  },
  actions: {
    removeItem: ({ commit }, id) => {
      commit('removeFromItems', id)
    },
    updateItem: ({ commit }, itemData) => {
      commit('updateItemContent', itemData)
    },
    addItem: ({ commit }, itemData) => {
      commit('addNewItem', itemData)
    },
    filterItems: (store, tags) => {
      if(tags.length < 1) {
        return store.getters.allItems
      }
      return store.getters.allItems.filter(item => {
        for(let tag of tags) {
          if(!item.tags.find(curTag => curTag.id === tag.id)) return false
        }
        return true
      });
    }
  },
  getters: {
    allItems(state) {
      return state.items
    },
  }
}