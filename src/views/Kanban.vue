<template>
  <div class="kanban">
    <Modal ref="modal" v-model="modalIsOpen">
      <TaskForm :task="taskData" />
    </Modal>
    <div class="kanban__controls">
      <button class="btn-custom" @click="changeModalStatus">Add new task</button>
      <Multiselect label="title" identifier="id" :items="allTags" v-model="chosenFilterTags" />
    </div>
    <KanbanComp :items="tasks" @update="changeModalStatus"/>
  </div>
</template>

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
    ...mapActions('tasks', ['filterItems']),
    changeModalStatus: function (item) {
      if(item.id) {
        this.taskData = item
      } else this.taskData = {}
      this.modalIsOpen = true
    },
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