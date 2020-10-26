<template>
  <div class="kanban">
    <modal v-model="modalIsOpen">
      <task-form :task="taskData" />
    </modal>
    <div class="kanban__controls controls">
      <btn-comp class="controls__btn" @click.native="changeModalStatus">Add new task</btn-comp>
      <multi-select label="title" identifier="id" :items="allTags" v-model="chosenFilterTags" />
    </div>
    <kanban-comp :items="tasks" :columns="allColumns" itemStatusPropertyName="status" @remove="removeFromItems" @update="changeModalStatus"/>
  </div>
</template>

/*

- вынести метод сортировки в канбан
- сделать слот под канбан-айтем с передачей пропса (слоты с ограниченной областью видимости)
- Починить drag-and-drop

*/

<script>
import KanbanComp from "@/components/KanbanComp";
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import MultiSelect from "@/components/MultiSelect";
import BtnComp from "@/components/BtnComp";
import columnProperties from "@/utils/columnProperties";
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
    MultiSelect,
    BtnComp,
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
    allColumns() {
      return  columnProperties
    }
  }
}
</script>

<style scoped lang="scss">
  .kanban {
    &__controls{
      display: flex;
      justify-content: space-between;
      .controls__btn {
        width: 160px;
      }
      .multi-select{
        width: 340px;
      }
    }
  }
</style>