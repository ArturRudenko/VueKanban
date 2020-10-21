<template>
  <div class="task">
    <h2 class="modal__title">Edit task</h2>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task title:</p>
      </div>
      <div class="col">
        <input type="text" v-model="editedTask.title">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task text:</p>
      </div>
      <div class="col">
        <textarea v-model="editedTask.text"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task tags:</p>
      </div>
      <div class="col">
        <Multiselect :tags="allTags" />
      </div>
    </div>
    <p v-show="editedTask.isEdited" class="add-tooltip">Tag has been edited</p>
    <button class="btn-custom" @click="editedTask.isEdited = !editedTask.isEdited">Edit task</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Multiselect from  '@/components/Multiselect'

  export default {
    watch: {
      task(task) {
        this.editedTask = task
      }
    },
    props: {
      task: {
        type: Object,
      }
    },
    data: function () {
      return {
        editedTask: {
          isEdited: false,
          title: this.task.title,
          text: this.task.text,
          tags: this.task.tags
        }
      }
    },
    computed: {
      ...mapGetters('tags',['allTags']),
    },
    components: {
      Multiselect,
    }
  }
</script>