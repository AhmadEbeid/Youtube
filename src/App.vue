<template>
  <div id="app">
    <MobileHeader class="desktop-hidden" />
    <DesktopHeader class="mobile-hidden" />
    <router-view />
  </div>
</template>

<script>
import MobileHeader from "./components/mobile/MobileHeader";
import DesktopHeader from "./components/desktop/DesktopHeader";

export default {
  name: "app",
  components: {
    MobileHeader,
    DesktopHeader
  },
};
</script>

<style lang="scss">
@import "sass/base/_reset.scss";

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
