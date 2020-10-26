<template>
  <div class="tag-edit">
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag title:</p>
      </div>
      <div class="col">
        <input type="text" v-model="editedTag.titleEditValue" class="col__input">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag description:</p>
      </div>
      <div class="col">
        <textarea v-model="editedTag.descriptionEditValue"  class="col__input"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose tag color:</p>
      </div>
      <div class="col">
        <input type="color" v-model="editedTag.colorEditValue" class="col__input">
        <tooltip-comp> * click to choose</tooltip-comp>
      </div>
    </div>
    <p class="tag-edit__tooltip"><tooltip-comp v-show="editedTag.isEdited">Tag has been edited</tooltip-comp></p>
    <btn-comp @click.native="confirmUpdate">Edit tag</btn-comp>
  </div>
</template>

<script>
import TooltipComp from "@/components/TooltipComp";
import BtnComp from "@/components/BtnComp";
import { mapActions } from 'vuex'

  export default {
  name: 'EditTagComp',
    props: {
      tag: {
        type: Object,
        required: true
      }
    },
    components: {
      TooltipComp,
      BtnComp,
    },
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
  }
</script>

<style lang="scss">
  .tag-edit__tooltip{
    margin-bottom: 20px;
  }
</style>