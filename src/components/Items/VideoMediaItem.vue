<template>
    <div class="video-media-item">
      <div class="video-media-item__image-container">
        <img class="video-media-item__image-container__img" v-bind:src="imgUrl" alt="">
        <span class="video-media-item__image-container__span">{{ duration }}</span>
      </div>
      <div class="video-media-item__body-container">
        <p class="video-media-item__body-container__title">{{ title }}</p>
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
        imgUrl: 'https://i.ytimg.com/vi/iyi_-0LpAds/mqdefault.jpg',
        duration: '6:04',
        title: 'Stargirl vs Shiv! Dragon King and Shiv’s Origin!  - Stargirl Episode 7 Review!',
        channelTitle: 'Pagey',
        viewCount: '4926714'
        // Number(viewCount).toLocaleString()
      }
    },
    methods: {

    },
    created() {
      
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
