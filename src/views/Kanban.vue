<template>
  <div class="kanban">
    <Modal ref="modal" v-model="modalIsOpen"><TaskForm :task="taskData" /></Modal>
    <button class="btn-custom" @update="changeModalStatus" @click="changeModalStatus">Add new task</button>
    <KanbanComp @update="changeModalStatus"/>
  </div>
</template>

<script>
import KanbanComp from "@/components/KanbanComp";
import Modal from '@/components/Modal'
import TaskForm from '@/components/TaskForm'

export default {
  components: {
    KanbanComp,
    Modal,
    TaskForm,
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
  }
}
</script>