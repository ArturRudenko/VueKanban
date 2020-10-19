<template>
  <div class="kanban">
    <div class="header">
      <h1 class="header__title">{{ viewTitle }}</h1>
      <router-link :to="{name: linkData}">
        <a href="#" class="header__link">to {{linkData}}</a>
      </router-link>
    </div>
    <KanbanComp />
  </div>
</template>

<script>
import KanbanComp from "@/components/KanbanComp";

export default {
  components: {KanbanComp},
  data: function () {
    return {
      viewTitle: 'Kanban',
      linkData: 'tags'
    }
  },
  comments: {
    KanbanComp,
  }
}
</script>