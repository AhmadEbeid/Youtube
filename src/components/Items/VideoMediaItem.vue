<template>
    <div class="video-media-item">
      <div class="video-media-item__image-container">
        <img class="video-media-item__image-container__img" v-bind:src="imgUrl" alt="">
        <span class="video-media-item__image-container__span">{{ duration }}</span>
      </div>
      <div class="video-media-item__body-container">
        <p class="video-media-item__body-container__title" v-html="title"></p>
        <p class="video-media-item__body-container__channel-name">{{ channelTitle }}</p>
        <p class="video-media-item__body-container__views">{{ Number(viewCount).toLocaleString() }} views</p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "VideoMediaItem",
    data: function () {
      return {
        id: '',
        imgUrl: '',
        duration: '',
        title: '',
        channelTitle: '',
        viewCount: '',
        channelId: ''
      }
    },
    props: {
      item: Object,
    },
    methods: {

    },
    created() {
      this.id = this.item.id.videoId;
      this.channelId = this.item.snippet.channelId;
      this.imgUrl = this.item.snippet.thumbnails.medium.url;
      this.title = this.item.snippet.title;
      this.channelTitle = this.item.snippet.channelTitle;
      this.duration = this.item.statisticsInfo.contentDetails.duration.replace('PT', '')
      
      if (this.duration.indexOf('M') === -1 && this.duration.indexOf('S') === -1) {
        this.duration = this.duration + '00M00S'
      } else if (this.duration.indexOf('S') === -1) {
        this.duration = this.duration + '00S'
      } 
      this.duration = this.duration.replace('H', ':').replace('M', ':').replace('S', '');
      
      this.viewCount = this.item.statisticsInfo.stats.viewCount; 
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
