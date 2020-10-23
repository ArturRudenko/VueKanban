<template>
  <div class="kanban">
    <Modal ref="modal" v-model="modalIsOpen">
      <TaskForm :task="taskData" />
    </Modal>
    <div class="kanban__controls">
      <button class="btn-custom" @click="changeModalStatus">Add new task</button>
      <Multiselect label="title" identifier="id" :items="allTags" v-model="chosenFilterTags" />
    </div>
    <KanbanComp :items="tasks" @remove="removeFromItems" @update="changeModalStatus"/>
  </div>
</template>

/*

- Перенести стили в компоненты + переименовать классы по бэм
- Проверить компонент редактирования тэга
- Написать метод для кланирования таска в форме

*/

<script>
import KanbanComp from "@/components/KanbanComp";
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import Multiselect from "@/components/Multiselect";
import { mapGetters, mapActions } from 'vuex';

export default {
  watch: {
    async chosenFilterTags(selectedTags) {
      this.tasks = await this.filterItems(selectedTags)
    },
  },
  components: {
    KanbanComp,
    Modal,
    TaskForm,
    Multiselect,
  },
  data: function () {
    return {
      modalIsOpen: false,
      taskData: {},
      tasks: [],
      chosenFilterTags: []
    }
  },
  methods: {
    ...mapActions('tasks', ['filterItems', 'removeItem']),
    changeModalStatus: function (item) {
      if(item.id) {
        this.taskData = item
      } else this.taskData = {}
      this.modalIsOpen = true
    },
     removeFromItems: async function (itemId) {
      await this.removeItem(itemId)
      this.tasks = await this.filterItems(this.chosenFilterTags)
    }
  },
  async created() {
    this.tasks = await this.filterItems([])
  },
  computed: {
    ...mapGetters('tags', ['allTags']),
    ...mapGetters('tasks', ['allItems']),
  }
}
</script>