<template>
    <EditTagComp :tag="tag" />
</template>

<script>
import EditTagComp from "@/components/EditTagComp";
import { mapGetters } from 'vuex'

  export default {
    data: function () {
      return {
      }
    },
    computed: {
      ...mapGetters('tags', ['allTags']),
      tag() {
        const tag = this.allTags.find(tag => tag.id === this.$route.params.id);
        return tag
      }
    },
    components: {
      EditTagComp,
    }
  }
</script>