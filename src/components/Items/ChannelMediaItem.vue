<template>
    <div v-if="loaded" class="channel-media-item">
      <img class="channel-media-item__img" v-bind:src="item.snippet.thumbnails.medium.url" alt="">
      <div class="channel-media-item__body-container">
        <p class="channel-media-item__body-container__title" v-html="item.snippet.title"></p>
        <p v-if="item.statistics" class="channel-media-item__body-container__video-count">{{ Number(item.statistics.videoCount).toLocaleString() }} videos</p>
        <p v-if="item.statistics" class="channel-media-item__body-container__subscribers">{{ Number(item.statistics.subscriberCount).toLocaleString() }} subscribers</p>
      </div>
    </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: "ChannelMediaItem",
    data: function () {
      return {
        loaded: false,
      }
    },
    props: {
      item: Object,
    },
    created() {
      if (!this.item.statistics) {
        const channelLink = `https://www.googleapis.com/youtube/v3/channels?id=${this.item.id.channelId}&part=statistics&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`
        axios.get(channelLink)
        .then(res => {
          res.data.items.forEach(item => {
            this.item.statistics = item.statistics;
            this.loaded = true;
          })
        })
        .catch(err => console.log(err));
      } else {
        this.loaded = true;
      }
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
