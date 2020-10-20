<template>
  <div class="wrapper">
    <HeaderComp :data="headerData"/>
    <router-view />
  </div>
</template>

<script>
import HeaderComp from "@/components/HeaderComp";

export default {
  components: {HeaderComp},
  data: function () {
    return {
      headerData: {},
    }
  },
  comments: {
    HeaderComp,
  },
  created() {
    this.headerData = this.$route.meta
  },
  beforeUpdate() {
    this.headerData = this.$route.meta
  }
}
</script>