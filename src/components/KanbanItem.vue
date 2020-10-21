<template>
  <div class="kanban__item">
    <div class="item__title">
      <p v-if="item.titleIsEditing">
        <input type="text" @keyup.enter="confirmUpdate" v-model.trim="titleEditValue">
      </p>
      <h3 v-else>{{ item.title }}</h3>
    </div>
    <div class="item__text">
      <p v-if="item.textIsEditing">
        <textarea @keyup.enter="confirmUpdate" v-model.trim="textEditValue"/>
      </p>
      <p v-else>{{ item.text }}</p>
    </div>
    <div class="item__controls">
      <button class="btn-remove" @click="removeItem"></button>
      <button class="btn-update" @click="updateItemContent"></button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'kanbanItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data: function () {
    return {
      titleEditValue: '',
      textEditValue: '',
    }
  },
  methods: {
    ...mapActions('tasks' ,[
        'updateItem',
    ]),
    confirmUpdate: function () {
      this.item.titleIsEditing = !this.item.titleIsEditing;
      this.item.textIsEditing = !this.item.textIsEditing;
      this.updateItem({
        id: this.item.id,
        title: this.titleEditValue,
        text: this.textEditValue
      })
      this.titleEditValue = '';
      this.textEditValue = '';
    },
    updateItemContent: function () {
      this.$emit('update', this.item)
    },
    removeItem: function () {
      this.$emit('remove', this.item.id);
    }
  }
}
</script>