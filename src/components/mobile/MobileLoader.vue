<template>
    <div v-bind:class="{'loading-container': viewText, 'loading-container-no-text': !viewText}">
        <img v-bind:class="{'loading-container__img': viewText, 'loading-container-no-text__img': !viewText}" src="../../assets/loader.svg" alt="">
        <p v-if="viewText" class="loading-container__txt">Loading</p>
    </div>
</template>

<script>
export default {
    name: 'MobileLoader',
    props: {
      viewText: Boolean
    }
}
</script>

<style lang="scss" scoped>

  .loading-container {
    text-align: center;
    margin-top: 20vh;

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