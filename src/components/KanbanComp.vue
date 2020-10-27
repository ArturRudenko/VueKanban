<template>
  <div class="kanban__content">
    <kanban-col v-for="(col) of columns"
                :key="col.alias"
                :data-status="col.alias"
                :items-amount="itemsFilteredByStatuses[col.alias].length"
                @sort="$emit('sort', itemsFilteredByStatuses[col.alias])">
      <template #title>
        {{ col.title }}
      </template>
      <template #items>
        <slot name="kanban-items" :current-col-items="itemsFilteredByStatuses[col.alias]"/>
      </template>
    </kanban-col>
  </div>
</template>

<script>
import KanbanCol from './KanbanCol'

export default {
  props: {
    items: {
      type: Array,
      default: function () {
        return []
      }
    },
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    itemStatusPropertyName: {
      type: String
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    itemsFilteredByStatuses() {
      let filteredItems = {}

      this.columns.forEach(property => {
        filteredItems[property.alias] = this.items.filter(item => item[this.itemStatusPropertyName] === property.alias)
      });

      return filteredItems
    },
  },
  components: {
    KanbanCol,
  }
}
</script>

<style lang="scss">
.kanban{
  &__content {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }
}
</style>