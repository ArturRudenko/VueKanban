<template>
  <div class="kanban">
    <Modal ref="modal" v-model="modalIsOpen">
      <TaskForm :task="taskData" />
    </Modal>
    <div class="kanban__controls">
      <button class="btn-custom" @click="changeModalStatus">Add new task</button>
      <Multiselect label="title" identifier="id" :items="allTags" />
    </div>
    <KanbanComp @update="changeModalStatus"/>
  </div>
</template>

<script>
import KanbanComp from "@/components/KanbanComp";
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import Multiselect from "@/components/Multiselect";
import { mapGetters } from 'vuex';

export default {
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
    }
  },
  methods: {
    changeModalStatus: function (item) {
      if(item.id) {
        this.taskData = item
      } else this.taskData = {}
      this.modalIsOpen = true
    },
  },
  computed: {
    ...mapGetters('tags', ['allTags']),

  }
}
</script>