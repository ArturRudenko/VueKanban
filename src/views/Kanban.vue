<template>
  <div class="kanban">
    <KanbanComp/>
  </div>
</template>

<script>
import KanbanComp from "@/components/KanbanComp";

export default {
  components: {
    KanbanComp
  },
  data: function () {
    return {
      viewTitle: 'Kanban',
      linkData: 'tags'
    }
  },
}
</script>