<template>
  <div class="kanban__item">
    <div class="item__title">
      <h3>{{ item.title }}</h3>
    </div>
    <div class="item__tags">
      <span v-for="tag in item.tags" :key="tag.id" :style="{background: tag.color}" class="item__tag">{{ tag.title }}</span>
    </div>
    <div class="item__controls">
      <button class="btn-remove" @click="removeItem"></button>
      <button class="btn-update" @click="updateItemContent"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kanbanItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateItemContent: function () {
      this.$emit('update', this.item)
    },
    removeItem: function () {
      this.$emit('remove', this.item.id);
    }
  }
}
</script>