<template>
    <div class="channel-media-item">
      <img class="channel-media-item__img" v-bind:src="imgUrl" alt="">
      <div class="channel-media-item__body-container">
        <p class="channel-media-item__body-container__title" v-html="title"></p>
        <p class="channel-media-item__body-container__video-count">{{ Number(videoCount).toLocaleString() }} videos</p>
        <p class="channel-media-item__body-container__subscribers">{{ Number(subscriberCount).toLocaleString() }} subscribers</p>
      </div>
    </div>
</template>

<script>
  export default {
    name: "ChannelMediaItem",
    data: function () {
      return {
        id: '',
        imgUrl: '',
        title: '',
        videoCount: '',
        subscriberCount: '',
      }
    },
    props: {
      item: Object,
    },
    created() {
      this.id = this.item.id.videoId;
      this.imgUrl = this.item.snippet.thumbnails.medium.url;
      this.title = this.item.snippet.title;
      this.channelTitle = this.item.snippet.channelTitle;
      this.videoCount = this.item.statistics.videoCount
      this.subscriberCount = this.item.statistics.subscriberCount
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

    }
  }

</style>
