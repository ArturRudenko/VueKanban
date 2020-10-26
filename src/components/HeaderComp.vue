<template>
  <div class="header">
    <h1 class="header__title">{{ data.title }}</h1>
    <div class="header__links links">
      <router-link :to="{ name: 'kanban' }">
        <btn-comp>
          <template #default>
            Kanban
          </template>
        </btn-comp>
      </router-link>
      <br>
      <router-link :to="{ name: 'tags' }">
        <btn-comp>
          <template #default>
            Tags
          </template>
        </btn-comp>
      </router-link>
    </div>
  </div>
</template>

<script>
import BtnComp from "@/components/BtnComp";

  export default {
    name: 'HeaderComp',
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    components: {
      BtnComp,
    }
  }
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    &__links {
      text-align: center;
    }
    .links__btn {
      padding: 10px 0;
    }
  }
  .header__title,
  .modal__title{
    font-size: 2.25em;
    font-weight: 600;
    margin-bottom: 20px;
  }
</style>