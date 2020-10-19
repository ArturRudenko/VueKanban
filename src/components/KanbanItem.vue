<template>
  <div class="kanban__item">
    <div class="item__title">
      <p v-if="item.titleIsEditing"><input type="text" @keyup.enter="confirmUpdate(item)" v-model.trim="titleEditValue"></p>
      <h3 v-else>{{ item.title }}</h3>
    </div>
    <div class="item__text">
      <p v-if="item.textIsEditing"><textarea @keyup.enter="confirmUpdate(item)" v-model.trim="textEditValue"/>
      </p>
      <p v-else>{{ item.text }}</p>
    </div>
    <div class="item__controls">
      <button class="btn-remove" @click="removeItem"></button>
      <button class="btn-update" @click="updateItemContent(item)"></button>
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
    ...mapActions('tags' ,[
        'updateItem',
    ]),
    updateItemContent: function (item) {
      this.titleEditValue = item.title;
      this.textEditValue = item.text;
      item.titleIsEditing = !item.titleIsEditing;
      item.textIsEditing = !item.textIsEditing;
    },
    confirmUpdate: function (item) {
      this.updateItem(item.id, this.titleEditValue, this.textEditValue)
      item.titleIsEditing = !item.titleIsEditing;
      item.textIsEditing = !item.textIsEditing;
      this.titleEditValue = '';
      this.textEditValue = '';
    },
    removeItem: function () {
      this.$emit('remove', this.item.id);
    }
  }
}
</script>