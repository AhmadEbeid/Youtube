<template>
    <div v-if="loaded && item.snippet.thumbnails" class="playlist-media-item">
      <div class="playlist-media-item__image-container">
        <img class="playlist-media-item__image-container__img" v-bind:src="item.snippet.thumbnails.medium.url" alt="">
        <div v-if="item.contentDetails" class="playlist-media-item__image-container__div">
          <span class="playlist-media-item__image-container__div__span">{{ item.contentDetails.itemCount }}</span>
          <img class="playlist-media-item__image-container__div__img" src="../../assets/playlist-count.svg" alt="count">
        </div>
      </div>
      <div class="playlist-media-item__body-container">
        <p class="playlist-media-item__body-container__title" v-html="item.snippet.title"></p>
        <p class="playlist-media-item__body-container__channel-name">{{ item.snippet.channelTitle }}</p>
        <p class="playlist-media-item__body-container__description" v-html="item.snippet.description"></p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "PlaylistMediaItem",
    data: function () {
      return {
        loaded: false,
      }
    },
    props: {
      item: Object,
      contentDetails: Object,
    },
    created() {
      this.item.contentDetails = this.contentDetails;
      this.loaded = true;
    }
  };
</script>

<style scoped lang="scss">

  .playlist-media-item {
    padding: 10px 15px;
    display: grid;
    grid-template-columns: 160px auto;
    grid-gap: 10px;
    cursor: pointer;

    &__image-container {
      position: relative; 

      &__img {
        width: 100%;
      }

      &__div {
        color: #eee;
        background-color: rgba(17, 17, 17, 0.8);
        position: absolute;
        bottom: 0px;
        right: 0px;
        height: 90px;
        width: 50px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;

        &__span {
          margin: 0px auto;
        }

        &__img {
          width: 24px;
          height: 24px;
          margin: 0px auto;
        }
      }
    }

    &__body-container {

      &__title {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 5px;
      }

      &__channel-name {
        font-size: 15px;
        color: #000000ad;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 5px;
      }

      &__description {
        display: none !important;
        color: #000000ad;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
      }

    }
  }

</style>
