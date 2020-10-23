<template>
  <div class="kanban_content">
    <kanbanCol @update="updateItem" @remove="removeFromItems"  col-title="In queue" class-name="kanban__col" :items="inQueueItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-title="In work" class-name="kanban__col" :items="inWorkItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-title="Finished" class-name="kanban__col" :items="finishedItems"/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import kanbanCol from './KanbanCol'

export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  computed: {
    inQueueItems() {
      return  this.items.filter((item) => item.status === "in queue")
    },
    inWorkItems() {
      return this.items.filter((item) => item.status === "in work")
    },
    finishedItems() {
      return this.items.filter((item) => item.status === "finished")
    }
  },
  methods: {
    ...mapActions('tasks', ['removeItem']),
    removeFromItems: function (itemId) {
      this.removeItem(itemId)
    },
    updateItem: function (item){
      this.$emit('update', item)
    }
  },
  components: {
    kanbanCol,
  }
}
</script>