import { v4 as uuidv4 } from "uuid";

const tags = [
  {
    id: uuidv4(),
    title: 'Job',
    color: '#FF0000',
    isSelected: false,
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Home',
    color: '#00FF00',
    isSelected: false,
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
  {
    id: uuidv4(),
    title: 'Other',
    color: '#0000FF',
    isSelected: false,
    description: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
  },
];

const tasks = [
  {
    id: uuidv4(),
    status: 1,
    tags: [tags[0],tags[2]],
    title: 'Sunt aut facere repellat',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 3,
    tags: [tags[1]],
    title: 'Qui est esse quasi',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 3,
    tags: [tags[1]],
    title: 'Ea molestias quasi exercitationem repellat qui ipsa sit aut',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 2,
    tags: [tags[0]],
    title: 'Molestias',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 1,
    tags: [tags[1]],
    title: 'Aut facere repellat provident occaecati excepturi optio reprehenderit',
    text: 'Consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 2,
    tags: [tags[1],tags[0]],
    title: 'Repellat provident occaecati excepturi optio reprehenderit',
    text: 'Suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
  {
    id: uuidv4(),
    status: 3,
    tags: [tags[2]],
    title: 'Optio reprehenderit',
    text: 'Quia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cumquia et suscipit nsuscipit recusandae consequuntur expedita et cum quia et suscipit nsuscipit recusandae consequuntur expedita et cum',
    titleIsEditing: false,
    textIsEditing: false,
  },
];

const run = function (store) {
  store.commit('tasks/setItems', tasks)
  store.commit('tags/setTags', tags)
}

export default {
  run
}
