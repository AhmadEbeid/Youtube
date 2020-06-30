<template>
    <div v-if="loaded" class="channel-media-item">
      <img class="channel-media-item__img" v-bind:src="item.snippet.thumbnails.medium.url" alt="">
      <div class="channel-media-item__body-container">
        <p class="channel-media-item__body-container__title" v-html="item.snippet.title"></p>
        <p v-if="item.statistics" class="channel-media-item__body-container__video-count">{{ Number(item.statistics.videoCount).toLocaleString() }} videos</p>
        <p v-if="item.statistics" class="channel-media-item__body-container__subscribers">{{ Number(item.statistics.subscriberCount).toLocaleString() }} subscribers</p>
        <p class="channel-media-item__body-container__description" v-html="item.snippet.description"></p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "ChannelMediaItem",
    data: function () {
      return {
        loaded: false,
      }
    },
    props: {
      item: Object,
      statistics: Object,
    },
    created() {
      this.item.statistics = this.statistics;
      this.loaded = true;
    }
  };
</script>

<style scoped lang="scss">

  .channel-media-item {
    padding: 10px 15px;
    display: grid;
    grid-template-columns: 90px auto;
    grid-gap: 10px;
    align-items: center;
    cursor: pointer;

    &__img {
      width: 90px;
      height: 90px;
      border-radius: 100%;
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

      &__video-count {
        font-size: 15px;
        color: #000000ad;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        margin-bottom: 5px;
      }

      &__subscribers {
        font-size: 15px;
        color: #000000ad;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
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

  @media (min-width: 768px) { 

    .channel-media-item {
      padding: 10px 10vw;
      grid-template-columns: 310px auto;
      grid-gap: 30px;

      &__img {
        width: 136px;
        height: 136px;
        margin: auto;
      }

      &__body-container {

        &__title {
          font-size: 20px;
        }

        &__video-count {
          display: none !important;
        }

        &__subscribers {
          font-size: 16px;
        }

        &__description {
          margin-top: 15px;
          display: -webkit-box !important;
          font-size: 18px;
        }

      }
    }
  }

</style>
