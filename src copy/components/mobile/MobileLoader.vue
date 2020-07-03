<template>
  <div v-bind:class="{'loading-container': viewText, 'loading-container-no-text': !viewText, 'margin-top': !marginFLag, 'padding-top': marginFLag }">
    <img
      v-bind:class="{'loading-container__img': viewText, 'loading-container-no-text__img': !viewText}"
      src="../../assets/loader.svg"
      alt
    />
    <p v-if="viewText" class="loading-container__txt">Loading</p>
  </div>
</template>

<script>
export default {
  name: "MobileLoader",
  props: {
    viewText: Boolean,
    marginFLag: Boolean
  }
};
</script>

<style lang="scss" scoped>
.margin-top {
  margin-top: 20vh;
}

.padding-top {
  padding-top: 20vh;
}

.loading-container {
  text-align: center;

  &__img {
    width: 20px;
    height: 20px;
  }

  &__txt {
    margin-top: 20px;
  }
}

.loading-container-no-text {
  text-align: center;
  margin: 20px;

  &__img {
    width: 20px;
    height: 20px;
  }

  &__txt {
    margin-top: 20px;
  }
}
</style>