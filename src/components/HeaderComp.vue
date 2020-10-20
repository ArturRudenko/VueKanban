<template>
  <div class="header">
    <h1 class="header__title">{{ data.title }}</h1>
    <div class="header__links">
      <router-link :to="{name: 'kanban'}">
        <a href="#" class="header__link">Kanban</a>
      </router-link>
      <br>
      <router-link :to="{name: 'tags'}">
        <a href="#" class="header__link">Tags</a>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    created() {
      console.log(this.data.title)
    }
  }
</script>

