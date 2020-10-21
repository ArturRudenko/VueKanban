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
      updateItemContent: function (state, { id, title, text }) {
      state.items.forEach(item => {
        if(item.id === id) {
        item.title = title
        item.text = text
        }
      })
    }
  },
  actions: {
    removeItem: ({ commit }, id) => {
      commit('removeFromItems', id)
    },
    updateItem: ({ commit }, itemData) => {
      commit('updateItemContent', itemData)
    }
  },
  getters: {
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