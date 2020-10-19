<template>
  <div class="kanban_content">
    <kanbanCol @remove="removeFromItems" col-title="In queue" class-name="kanban__col" :items="inQueueItems"/>
    <kanbanCol @remove="removeFromItems" col-title="In work" class-name="kanban__col" :items="inWorkItems"/>
    <kanbanCol @remove="removeFromItems" col-title="Finished" class-name="kanban__col" :items="finishedItems"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import kanbanCol from './KanbanCol'

export default {
  data: function () {
    return {
      viewTitle: 'Kanban',
      linkData: 'tags'
    }
  },
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
    }
  },
  components: {
    kanbanCol,
  }
}
</script>