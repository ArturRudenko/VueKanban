import {v4 as uuidv4} from "uuid";

export default {
  namespaced: true,
  state: {
    newTagValue: '',
    editValue: '',
    tags: [
      {
        title: 'Job',
        isEditing: false,
        id: uuidv4(),
      },
      {
        title: 'Home',
        isEditing: false,
        id: uuidv4(),
      },
      {
        title: 'Other',
        isEditing: false,
        id: uuidv4(),
      },
    ],
  },
  mutations: {
    removeFromTags: function (state, id) {
      state.tags = state.tags.filter((item) => item.id !== id);
    },
    addNewTag: function (state) {
      state.tags.push({
        title: state.newTagValue,
        isEditing: false,
        id: uuidv4(),
      });
      state.newTagValue = '';
    }
  },
  actions: {
    removeTag: ({ commit }, id) => commit('removeFromTags', id),
    addTag: ({commit}) => commit('addNewTag')
  },
  getters: {
    allTags(state) {
      return state.tags
    }
  }
}