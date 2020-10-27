<template>
  <div class="kanban">
    <modal v-model="modalIsOpen">
      <task-form :task="taskData" />
    </modal>
    <div class="kanban__controls controls">
      <btn-comp class="controls__btn" @click.native="changeModalStatus">Add new task</btn-comp>
      <multi-select label="title" identifier="id" :items="allTags" v-model="chosenFilterTags" />
    </div>
    <kanban-comp :items="tasks" :columns="allColumns" itemStatusPropertyName="status" @sort="sortItemsByDate">
      <template v-slot:kanban-items="{ currentColItems }">
          <kanban-item  v-for="item in currentColItems"
                        :key="item.id"
                        :data-id="item.id"
                        :item="item"
                        @update="changeModalStatus"
                        @remove="removeFromItems"
                        draggable="true"/>
      </template>
    </kanban-comp>
  </div>
</template>

<script>
import KanbanComp from "@/components/KanbanComp";
import KanbanItem from '../components/KanbanItem.vue';
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import MultiSelect from "@/components/MultiSelect";
import BtnComp from "@/components/BtnComp";
import { mapGetters, mapActions } from 'vuex';

export default {
  watch: {
    async chosenFilterTags(selectedTags) {
      this.tasks = await this.filterItems(selectedTags)
    },
  },

  components: {
    KanbanComp,
    KanbanItem,
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
    },
    sortItemsByDate: function (items) {
      items.isBeenSorted = !items.isBeenSorted
      items.isBeenSorted ?
      items.sort((prevItem, nextItem) => prevItem.date.getTime() - nextItem.date.getTime()):
      items.sort((prevItem, nextItem) => nextItem.date.getTime() - prevItem.date.getTime())
    },
  },
  async created() {
    this.tasks = await this.filterItems([])
  },
  computed: {
    ...mapGetters('tags', ['allTags']),
    ...mapGetters('tasks', ['allItems']),
    ...mapGetters('columns', ['allColumns']),
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