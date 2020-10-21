<template>
  <div class="multiselect">
    <div class="output">
      <div class="selected-options">

      </div>
      <button @click="areShown = !areShown" class="btn-show-options"></button>
    </div>
    <div v-show="areShown" class="options">
      <div v-for="tag in tags" :key="tag.id" @click="changeSelected(tag)" :class="['options__item', {'selected': tag.isSelected}]">{{ tag.title }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tags: {
        type: Array,
        required: true
      }
    },
    data: function () {
      return {
        areShown: false
      }
    },
    methods: {
      changeSelected: function (tag) {
        console.log(tag.isSelected)
        tag.isSelected = !tag.isSelected
        console.log(tag.isSelected)
      }
    }
  }
</script>