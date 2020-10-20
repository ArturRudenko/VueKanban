<template>
  <div class="tag-edit">
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag title:</p>
      </div>
      <div class="col">
        <input type="text" v-model="editedTag.titleEditValue">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag description:</p>
      </div>
      <div class="col">
        <textarea type="text" v-model="editedTag.descriptionEditValue" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag color:</p>
      </div>
      <div class="col">
        <input class="color-input" type="color" v-model.lazy="editedTag.colorEditValue">
        <span class="add-tooltip"> * click to choose</span>
      </div>
    </div>
    <p v-show="editedTag.isEdited" class="add-tooltip">Tag has been edited</p>
    <button class="btn-custom" type="button" @click="confirmUpdate">Edit tag</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data: function () {
      return {
        editedTag: {
          isEdited: false,
          titleEditValue: this.tag.title,
          descriptionEditValue: this.tag.description,
          colorEditValue: this.tag.color,
        }
      }
    },
    methods: {
      ...mapActions('tags', ['updateTag']),
      confirmUpdate: function () {
        this.editedTag.isEdited = ! this.editedTag.isEdited;
        this.updateTag({
          id: this.tag.id,
          title: this.editedTag.titleEditValue,
          description: this.editedTag.descriptionEditValue,
          color: this.editedTag.colorEditValue,
        });
      },
    },
    props: {
      tag: {
        type: Object,
        required: true
      }
    },
  }
</script>