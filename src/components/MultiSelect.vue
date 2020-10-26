<template>
  <div class="multi-select">
    <div @click="show = !show" class="multi-select__output">
      <span v-for="item in selectedItems" :key="getId(item)" class="selected-options__item">{{ getLabel(item) }}</span>
    </div>
    <div v-show="show" class="multi-select__options available-options">
      <div v-for="item in copyItems" :key="getId(item.source)" @click="changeSelected(item)" :class="['available-options__item', {'selected-item': item._isSelected}]">
        {{ getLabel(item.source) }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MultiSelect',
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
        for(let item of this.copyItems) {
          item._isSelected = !!this.selectedItems.find(curItem => this.getId(curItem) === this.getId(item.source));
        }
      },
      changeSelected: function (item) {
        let index = this.selectedItems.findIndex((curEl) => {
          return (this.getId(curEl) === this.getId(item.source))
        });
        if(index === -1) {
          this.selectedItems.push(item.source)
        } else this.selectedItems.splice(index, 1)
        item._isSelected = !item._isSelected
        this.$emit('input', this.selectedItems)
      }
    },
    computed: {
      copyItems() {
        return this.items.map(item => {
          return  {
            isSelected:false,
            source: item
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  .multi-select{
    position: relative;
    &__output{
      position: relative;
      display: flex;
      padding: 7px;
      min-height: 41px;
      background: #fff;
      border: 1px solid #C0C0C0;
      cursor: pointer;
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
      .selected-options__item{
        display: inline-block;
        padding: 4px;
        margin: 0 5px 0 0;
        border-radius: 8px;
        background: #C0C0C0;
        font-size: .88em;
      }
    }
    &__options{
      position: absolute;
      z-index: 1;
      background: #fff;
      top: 100%;
      left: 0;
      width: 100%;
      max-height: 180px;
      overflow-y: auto;
      margin-top: -1px;
      border: 1px solid #C0C0C0;
      box-shadow: 0 5px 12px rgba(0, 0, 0, .2);
      .available-options__item{
        padding: 7px;
        cursor: pointer;
        &:hover{
          background: #C0C0C0;
        }
      }
    }
  }
  .selected-item{
    background: #C0C0C0;
  }
</style>