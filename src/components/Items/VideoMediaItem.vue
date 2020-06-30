<template>
    <div v-if="loaded" class="video-media-item">
      <div class="video-media-item__image-container">
        <img class="video-media-item__image-container__img" v-bind:src="item.snippet.thumbnails.medium.url" alt="">
        <span v-if="item.statisticsInfo" class="video-media-item__image-container__span">{{ getDuration(item.statisticsInfo.contentDetails.duration) }}</span>
      </div>
      <div class="video-media-item__body-container">
        <p class="video-media-item__body-container__title" v-html="item.snippet.title"></p>
        <p class="video-media-item__body-container__channel-name">{{ item.snippet.channelTitle }}</p>
        <p v-if="item.statisticsInfo" class="video-media-item__body-container__views">{{ Number(item.statisticsInfo.stats.viewCount).toLocaleString() }} views</p>
      </div>
    </div>
</template>

<script>

  import axios from "axios";

  export default {
    name: "VideoMediaItem",
    data: function () {
      return {
        loaded: false,
      }
    },
    props: {
      item: Object,
    },
    methods: {
      getDuration(duration) {
        duration = duration.replace('PT', '')
        
        if (duration.indexOf('M') === -1 && duration.indexOf('S') === -1) {
          duration = duration + '00M00S'
        } else if (duration.indexOf('S') === -1) {
          duration = duration + '00S'
        } 
        return duration.replace('H', ':').replace('M', ':').replace('S', '');
      }
    },
    created() {
      if (!this.item.statisticsInfo) {
        const videoLink = `https://www.googleapis.com/youtube/v3/videos?id=${this.item.id.videoId}&part=contentDetails,statistics&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`
        axios.get(videoLink)
        .then(res => {
          res.data.items.forEach(item => {
            this.item.statisticsInfo = { stats: item.statistics, contentDetails: item.contentDetails }
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

  .video-media-item {
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

      &__span {
        margin: 5px;
        padding: 1px 4px;
        border-radius: 2px;
        color: #eee;
        background-color: hsla(0,0%,6.7%,.8);
        position: absolute;
        bottom: 0px;
        right: 0px;
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

      &__views {
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
