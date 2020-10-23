<template>
  <div class="kanban_content">
    <kanbanCol @update="updateItem" @remove="removeFromItems"  col-status="in queue" :items="inQueueItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-status="in work" :items="inWorkItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-status="finished" :items="finishedItems"/>
  </div>
</template>

<script>
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
    removeFromItems: function (itemId) {
      this.$emit('remove', itemId)
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