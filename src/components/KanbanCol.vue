<template>
  <div class="kanban__col column"
        @dragover="onDragover"
        @dragstart="onDragstart"
        @dragend="onDragend"
        @drop="onDrop"
        >
    <h2 class="column__title"><slot name="title" /></h2>
    <p class="column__placeholder" v-if="!itemsAmount">No such cards</p>
    <p v-else class="column__length-info">{{ itemsAmount }} cards</p>
    <p @click="getColSorted" class="column__sort-wrapper">
      <span>sort items by date</span><button :class="['column__sort-btn', {'sorted': isSorted}]"></button>
    </p>
    <div class="column__items">
      <slot name="items" />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'kanbanCol',
  props: {
    itemsAmount: {
      type: Number,
    }
  },
  data: function () {
    return {
      isSorted: false
    }
  },
  methods: {
    ...mapActions('tasks', ['setStatus']),
    onDragover(e) {
     e.preventDefault()
      // if(e.preventDefault) e.preventDefault()
      // return false
    },
    onDragstart(e) {
      if (!e.target.dataset.id) return

      e.target.style.background = '#C0C0C0'
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text', e.target.dataset.id);
    },
    onDragend(e) {
      e.target.style.background = '#FFF'
    },
    onDrop(e) {
      const draggedItem = {
        id: e.dataTransfer.getData('text'),
        status: e.target.dataset.status
      }

      if (!e.target.dataset.status) {
        let target = e.target.closest('.kanban__col')
        draggedItem.status = target.dataset.status
      }

      this.setStatus({
        id: draggedItem.id,
        status: draggedItem.status
      })
    },
    getColSorted: function () {
      this.isSorted = !this.isSorted
      this.$emit('sort')
    }
  },
}
</script>

<style lang="scss">
  .kanban__col {
    width: 31.5%;
    min-height: 60vh;
    padding: 20px 10px 10px 10px;
    border-radius: 8px;
    background: #D3D3D3;
  }
  .column {
    &__title{
      font-size: 1.8em;
    }
    &__placeholder,
    &__length-info {
      margin: 15px 0 10px 0;
      color: #808080;
      font-size: 0.92em;
    }
    &__sort-wrapper{
      margin-bottom: 10px;
      cursor: pointer;
    }
    &__sort-btn{
      width: 15px;
      height: 12px;
      margin-left: 10px;
      background: url('../assets/img/down-arrow.svg');
      background-size: 100%;
      cursor: pointer;
      &.sorted{
        transform: rotate(180deg);
      }
    }
  }
</style>