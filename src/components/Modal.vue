<template>
  <transition name="fade">
    <div class="modal" v-show="value">
      <div @click.self="toggleModal" class="modal__body">
        <div class="modal__content">
          <slot />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    watch: {
      value(value) {
        this.show = value
      }
    },
    data: function () {
      return {
        show: this.value
      }
    },
    props: {
      value: Boolean,
    },
    methods: {
      toggleModal: function () {
        this.show = !this.show
        this.$emit('input', this.show)
      }
    }
  }
</script>