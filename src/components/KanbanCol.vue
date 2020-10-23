<template>
  <div class="kanban__col">
    <h2 class="section-title">{{ colStatus}}</h2>
    <p class="col__placeholder" v-if="!items.length">No such cards</p>
    <p v-else class="col__length-info">{{ items.length }} cards</p>
    <kanbanItem draggable="true"
                @dragover="onDragover"
                @dragstart="onDragstart"
                @drop="onDrop"
                @update="updateItem"
                @remove="removeItem"
                v-for="item in items"
                :key="item.id"
                :data-id="item.id"
                :item="item">
    </kanbanItem>
  </div>
</template>

<script>
import kanbanItem from './KanbanItem'
import { mapActions } from 'vuex'

export default {
  name: 'kanbanCol',
  props: {
    colStatus: {
      type: String,
    },
    className: {
      type: String,
    },
    items: {
      type: Array,
      required: true,
    },
  },

  data: function () {
    return {}
  },
  methods: {
    ...mapActions('tasks', ['setStatus']),
    onDragover(e) {
      if(e.preventDefault) {
        e.preventDefault()
      }

      return false
    },
    onDragstart(e) {
      if (!e.target.dataset.id) {
        return ;
      }
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', e.target.dataset.id);
    },
    onDrop(e) {
      console.log(e)
      const draggedItem = e.target.dataTransfer.getData('text')
      this.setStatus({
        id: draggedItem.id,
        status: draggedItem.status
      })
    },
    removeItem: function (itemId) {
      this.$emit('remove', itemId);
    },
    updateItem: function (item) {
      this.$emit('update', item)
    }
  },
  components: {
    kanbanItem,
  }
}
</script>