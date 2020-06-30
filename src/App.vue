<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <MobileHeader class="desktop-hidden" />
    <router-view />
  </div>
</template>

<script>

import MobileHeader from "./components/mobile/MobileHeader";

export default {
  name: 'app',
  components: {
    MobileHeader,
  }
}
</script>

<style lang="scss">

  @import 'main.scss'; 

  @media (max-width: 767px) { 
    
    .mobile-hidden {
      display: none !important;
    }

  }

  @media (min-width: 768px) {
    
    .desktop-hidden {
      display: none !important;
    }

  }
</style>
