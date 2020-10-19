import {v4 as uuidv4} from "uuid";

export default {
    namespaced: true,
    state: {
        items: [
            {
                id: uuidv4(),
                status: 1,
                title: 'Sunt aut facere repellat',
                text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 3,
                title: 'Qui est esse quasi',
                text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 3,
                title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
                text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 2,
                title: 'Molestias',
                text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 1,
                title: 'Aut facere repellat provident occaecati excepturi optio reprehenderit',
                text: 'Consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 2,
                title: 'Repellat provident occaecati excepturi optio reprehenderit',
                text: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
            {
                id: uuidv4(),
                status: 3,
                title: 'Optio reprehenderit',
                text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
                titleIsEditing: false,
                textIsEditing: false,
            },
        ]
    },
    mutations: {
        removeFromItems: function (state, id) {
           state.items = state.items.filter((item) => item.id !== id)
        },
        updateItemContent: function (state, id, title, text) {
            state.items = state.items.map((item) => {
                if(item.id === id) {
                    item.title = title;
                    item.text = text;
                }
            });
        }
    },
    actions: {
        removeItem: ({ commit }, id) => {
            commit('removeFromItems', id)
        },
        updateItem: ({ commit }, id, title, text) => {
            commit('updateItemContent', id, title, text)
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