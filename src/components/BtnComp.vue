<template>
  <button class="btn-comp"><slot>Edit</slot></button>
</template>

<script>
export default {
  name:'BtnComp',
  props: {

  }
}
</script>

<style scoped lang="scss">
  .btn-comp{
    display: inline-block;
    background: #D3D3D3;
    border: none;
    width: 90px;
    height: 40px;
    margin: 0;
    color: #252727;
    font-size: 1.1em;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;

    &:hover {
      background: darken(#D3D3D3, 10%);
    }

    &:first-child {
      margin-bottom: 1px;
    }
  }
</style>