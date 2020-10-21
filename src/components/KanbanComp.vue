<template>
  <div class="kanban_content">
    <kanbanCol @update="updateItem" @remove="removeFromItems"  col-title="In queue" class-name="kanban__col" :items="inQueueItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-title="In work" class-name="kanban__col" :items="inWorkItems"/>
    <kanbanCol @update="updateItem" @remove="removeFromItems" col-title="Finished" class-name="kanban__col" :items="finishedItems"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import kanbanCol from './KanbanCol'

export default {
  computed: {
    ...mapGetters('tasks', [
      'inQueueItems',
      'inWorkItems',
      'finishedItems',
    ])
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