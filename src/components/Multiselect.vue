<template>
  <div class="multi-select">
    <div @click="show = !show" class="output">
      <div class="selected-options">
        <span v-for="item in selectedItems" :key="getId(item)" class="selected-options__item">{{ getLabel(item) }}</span>
      </div>
      <button class="btn-show-options"></button>
    </div>
    <div v-show="show" class="options">
      <div v-for="item in items" :key="getId(item)" @click="changeSelected(item)" :class="['options__item', {'selected': item._isSelected}]">{{ getLabel(item) }}</div>
    </div>
  </div>
</template>

// TODO каждый новый айтем должен оборачиваться в новый объект

<script>
  export default {
    watch: {
      value(value) {
        this.selectedItems = value;
        this.initUpdatedOptions();
      },
    },
    props: {
      items: {
        type: Array,
        required: true
      },
      value: {
        type: Array,
        default: function () {
          return [];
        }
      },
      label: {
        type: String,
        required: true,
      },
      identifier: {
        type: String,
        required: true,
      }
    },
    data: function () {
      return {
        show: false,
        selectedItems: this.value,
      }
    },
    methods: {
      getLabel: function (item) {
        return item[this.label]
      },
      getId: function (item) {
         return item[this.identifier]
      },
      initUpdatedOptions: function () {
        for(let item of this.items) {
          item._isSelected = !!this.selectedItems.find(curItem => this.getId(curItem) === this.getId(item));
        }
      },
      changeSelected: function (item) {
        let index = this.selectedItems.findIndex((curEl) => {
          return (this.getId(curEl) === this.getId(item))
        });
        if(index === -1) {
          this.selectedItems.push(item)
        } else this.selectedItems.splice(index, 1)
        item._isSelected = !item._isSelected
        this.$emit('input', this.selectedItems)
      }
    }
  }
</script>