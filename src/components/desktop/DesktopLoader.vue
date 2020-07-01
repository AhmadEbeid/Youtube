<template>
  <div v-if="loading" class="loader">
      <div class="loader__body" v-bind:style="'width:' + width + '%'"></div>
  </div>
</template>

<script>
export default {
  name: "DesktopLoader",
  props: {
    loading: Boolean,
    width: Number
  }
};
</script>

<style lang="scss" scoped>
.loader {
    overflow: hidden;
    height: 2px;
    background-color: white;
    margin: 0px auto;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 99999999;

  &__body {
    position: relative;
    max-width: 100%;
    height: 100%;
    -webkit-transition: width 1000ms ease-out 0ms;
    -moz-transition: width 1000ms ease-out 0ms;
    -o-transition: width 1000ms ease-out 0ms;
    transition: width 1000ms ease-out 0ms;
    background-color: red;
  }
}
</style>