<template>
  <div :class="className">
    <h2 class="section-title">{{ colTitle }}</h2>
    <p class="col__placeholder" v-if="!items.length">No such cards</p>
    <p v-else class="col__length-info">{{ items.length }} cards</p>
    <kanbanItem @update="updateItem" @remove="removeItem" v-for="item in items" :key="item.id" :item="item"></kanbanItem>
  </div>
</template>

<script>
import kanbanItem from './KanbanItem'

export default {
  name: 'kanbanCol',
  props: {
    colTitle: {
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