<template>
  <span class="tooltip-text"><slot></slot></span>
</template>

<script>
  export default{
    name: 'TooltipComp'
  }
</script>

<style lang="scss">
  .tooltip-text{
    color: darken(#C0C0C0, 7%);
    font-size: 0.88em;
  }
</style>