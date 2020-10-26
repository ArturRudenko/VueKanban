<template>
  <div class="kanban__item item">
    <div class="item__title">
      <h3>{{ item.title }}</h3>
    </div>
    <div class="item__tags">
      <span v-for="tag in item.tags" :key="tag.id" :style="{background: tag.color}" class="item__tag">{{ tag.title }}</span>
    </div>
    <div class="item__date">
      <p>created {{ item.date.getDate() }}.{{ item.date.getMonth() }}.{{ item.date.getFullYear() }}</p>
    </div>
    <div class="item__controls">
      <button class="item__btn-remove" @click="removeItem"></button>
      <button class="item__btn-update" @click="updateItemContent"></button>
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

<style scoped lang="scss">
  .kanban__item {
    padding: 10px;
    margin-bottom: 10px;
    background: #F8F8FF;
    position: relative;
  }
  .item {
    &__title {
      font-size: 1.2em;
      line-height: 1.1em;
      margin-bottom: 10px;
      font-weight: bold;
    }
    &__tag {
      display: inline-block;
      color: #FFF;
      padding: 7px;
      margin: 0 5px 0 0;
      border-radius: 4px;
    }
    &__date{
      margin-top: 10px;
    }
    &__controls {
      position: absolute;
      height: 100%;
      padding: 5px;
      top: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    [class^="item__btn"] {
      position: relative;
      width: 15px;
      height: 15px;
      border: none;
      cursor: pointer;
      opacity: .5;
      background: transparent;
      transition: opacity .4s;
      &:hover {
        opacity: 1;

        &::before {
          visibility: visible;
          opacity: 1;
        }
      }
      &::before {
        position: absolute;
        content: '';
        top: -140%;
        left: -240%;
        width: 90px;
        background: rgba(128, 128, 128, .5);
        visibility: hidden;
        opacity: 0;
        transition: visibility .4s, opacity .4s;
      }
    }
    &__controls .item__btn-remove {
      background-image: url('../assets/img/close.svg');
      background-size: 100%;

      &::before {
        width: 100px;
        content: 'Remove task';
      }
    }
    &__controls .item__btn-update {
      background-image: url('../assets/img/pencil.svg');
      background-size: 100%;

      &::before {
        content: 'Edit task';
      }
    }
  }
</style>