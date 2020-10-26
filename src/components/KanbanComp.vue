<template>
  <div class="kanban__content">
    <kanban-col v-for="(col) of columns"
                :key="col.alias"
                :items-amount="itemsFilteredByStatuses[col.alias].length"
                @sort="sortItemsByDate(itemsFilteredByStatuses[col.alias])">
      <template #title>
        {{ col.title }}
      </template>
      <template #items>
        <kanban-item  v-for="item in itemsFilteredByStatuses[col.alias]"
                      :key="item.id"
                      :item="item"
                      @update="updateItem"
                      @remove="removeFromItems"/>
      </template>
    </kanban-col>
  </div>
</template>

<script>
import KanbanCol from './KanbanCol'
import KanbanItem from "@/components/KanbanItem";

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
  methods: {
    sortItemsByDate: function (items) {
      items.isBeenSorted = !items.isBeenSorted
      if (items.isBeenSorted) {
        items.sort((prevItem, nextItem) => prevItem.date.getTime() - nextItem.date.getTime())
      } else items.sort((prevItem, nextItem) => nextItem.date.getTime() - prevItem.date.getTime())
    },
    removeFromItems: function (itemId) {
      this.$emit('remove', itemId)
    },
    updateItem: function (item){
      this.$emit('update', item)
    }
  },
  components: {
    KanbanItem,
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