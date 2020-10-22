<template>
  <div class="task">
    <h2 class="modal__title">Edit task</h2>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task title:</p>
      </div>
      <div class="col">
        <input type="text" v-model.trim="editedTask.title">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task text:</p>
      </div>
      <div class="col">
        <textarea v-model.trim="editedTask.text"></textarea>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task tags:</p>
      </div>
      <div class="col">
        <Multiselect label="title" identifier="id" :items="allTags" v-model="editedTask.tags" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task status:</p>
      </div>
      <div class="col">
        <select type="text" @input="(evt) => editedTask.status = +evt.target.value" :value="editedTask.status">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
    <p v-show="isEdited" class="add-tooltip">Task has been edited</p>
    <button class="btn-custom" @click="confirmUpdate">Confirm</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
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
        description: function () {
          return {}
        }
      }
    },
    data: function () {
      return {
        isEdited: false,
        editedTask: {
          tags: this.task.tags,
          title: this.task.title,
          text: this.task.text,
          status: this.task.status
        }
      }
    },
    computed: {
      ...mapGetters('tags', ['allTags']),
      ...mapGetters('tasks', ['allItems']),
    },
    methods: {
      ...mapActions('tasks' ,[
          'updateItem',
          'addItem',
      ]),
      confirmUpdate: function () {
        if(this.editedTask.title && this.editedTask.text && this.editedTask.tags) {
          this.isEdited = true;
          setTimeout(() => this.isEdited = false, 5000);

          if (this.allItems.find(item => item.id === this.task.id)) {
            this.updateItem({
              id: this.task.id,
              status: this.editedTask.status,
              title: this.editedTask.title,
              text: this.editedTask.text,
              tags: this.editedTask.tags
            });
          } else {
            this.addItem({
              status: this.editedTask.status,
              title: this.editedTask.title,
              text: this.editedTask.text,
              tags: this.editedTask.tags
            });
          }
        }
      },
    },
    components: {
      Multiselect,
    }
  }
</script>