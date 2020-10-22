import {v4 as uuidv4} from "uuid";

export default {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    setItems: function (state, tasks) {
      tasks.forEach(task => state.items.push(task))
      //tasks.forEach(item => console.log(item))
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
    }
  },
  getters: {
    allItems(state) {
      return state.items
    },
    inQueueItems(state) {
      return state.items.filter((item) => item.status === 1)
    },
    inWorkItems(state) {
      return state.items.filter((item) => item.status === 2)
    },
    finishedItems(state) {
      return state.items.filter((item) => item.status === 3)
    }
  }
}