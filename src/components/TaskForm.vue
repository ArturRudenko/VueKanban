<template>
  <div class="task-form">
    <h2 class="modal__title">Edit task</h2>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task title:</p>
      </div>
      <div class="col">
        <input type="text" v-model.trim="editedTask.title" class="col__input">
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task text:</p>
      </div>
      <div class="col">
        <textarea v-model.trim="editedTask.text" class="col__input"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task tags:</p>
      </div>
      <div class="col">
        <multi-select label="title" identifier="id" :items="allTags" v-model="editedTask.tags"/>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="col__title">Choose task status:</p>
      </div>
      <div class="col">
        <select v-model="editedTask.status" class="col__input task-form__select">
          <option value="in queue">in queue</option>
          <option value="in work">in work</option>
          <option value="finished">finished</option>
        </select>
      </div>
    </div>
    <btn-comp @click.native="confirmUpdate">Confirm</btn-comp>
    <tooltip-comp v-show="isEdited" class="task-form__tooltip">Task has been edited</tooltip-comp>
  </div>
</template>

<script>
import MultiSelect from '@/components/MultiSelect';
import BtnComp from "@/components/BtnComp";
import TooltipComp from "@/components/TooltipComp";
import {mapGetters, mapActions} from 'vuex';

export default {
  watch: {
    task(task) {
      this.setTaskObject(task)
    }
  },
  components: {
    MultiSelect,
    BtnComp,
    TooltipComp,
  },
  props: {
    task: {
      type: Object,
      default: function () {
        return {}
      },
    }
  },
  data: function () {
    return {
      isEdited: false,
      editedTask: {},
    }
  },
  computed: {
    ...mapGetters('tags', ['allTags']),
    ...mapGetters('tasks', ['allItems']),
  },
  methods: {
    ...mapActions('tasks', [
      'updateItem',
      'addItem',
    ]),
    setTaskObject: function (task) {
      this.editedTask = {
        tags: Object.assign([], this.task.tags),
        title: task.title,
        text: task.text,
        status: task.status
      }
    },
    confirmUpdate: function () {
      if (!this.editedTask.title && this.editedTask.text && this.editedTask.tags && this.editedTask.status) return

      this.allItems.find(item => item.id === this.task.id) ?
      this.updateItem({
        id: this.task.id,
        status: this.editedTask.status,
        title: this.editedTask.title,
        text: this.editedTask.text,
        tags: this.editedTask.tags
      }) :
      this.addItem({
        status: this.editedTask.status,
        title: this.editedTask.title,
        text: this.editedTask.text,
        tags: this.editedTask.tags
      });

      this.isEdited = true;
      setTimeout(() => this.isEdited = false, 5000);
    },
  },
}
</script>

<style lang="scss">
.task-form {
  &__tooltip {
    margin-left: 20px;
  }

  &__select {
    position: relative;
    background: transparent;
    appearance: none;
    cursor: pointer;
  }

  .row:last-of-type .col:last-child {
    position: relative;

    &::before {
      position: absolute;
      content: '';
      top: 10px;
      right: 7px;
      width: 20px;
      height: 20px;
      background: transparent url('../assets/img/down-arrow.svg');
      background-size: 100%;
    }
  }
}
</style>