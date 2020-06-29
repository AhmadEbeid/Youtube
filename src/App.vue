<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <MobileHeader></MobileHeader>
    <router-view />
  </div>
</template>

<script>

import MobileHeader from "./components/MobileHeader";

export default {
  name: 'app',
  components: {
    MobileHeader,
  }
}
</script>

<style lang="scss">
  @import 'main.scss'; 
</style>
