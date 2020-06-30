<template>
    <div v-if="loaded" class="video-media-item" @click="$router.push({ name: 'Video', params: { id: item.id.videoId } })">
      <div class="video-media-item__image-container">
        <img class="video-media-item__image-container__img" v-bind:src="item.snippet.thumbnails.medium.url" alt="">
        <span v-if="item.statisticsInfo" class="video-media-item__image-container__span">{{ getDuration(item.statisticsInfo.contentDetails.duration) }}</span>
      </div>
      <div class="video-media-item__body-container">
        <p class="video-media-item__body-container__title" v-html="item.snippet.title"></p>
        <p class="video-media-item__body-container__channel-name">{{ item.snippet.channelTitle }}</p>
        <span class="video-media-item__body-container__separator">•</span>
        <p v-if="item.statisticsInfo" class="video-media-item__body-container__views">{{ Number(item.statisticsInfo.stats.viewCount).toLocaleString() }} views</p>
        <span class="video-media-item__body-container__separator">•</span>
        <p v-if="item.statisticsInfo" class="video-media-item__body-container__how-old">{{ getHowOld(item.snippet.publishTime) }}</p>
        <p class="video-media-item__body-container__description" v-html="item.snippet.description"></p>
      </div>
    </div>
</template>

<script>

  export default {
    name: "VideoMediaItem",
    data: function () {
      return {
        loaded: false,
      }
    },
    props: {
      item: Object,
      statisticsInfo: Object
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
      },
      getHowOld(publishTime) {
        const today = new Date();
        const createdOn = new Date(publishTime);
        const msInDay = 24 * 60 * 60 * 1000;

        createdOn.setHours(0,0,0,0);
        today.setHours(0,0,0,0);

        const diff = (+today - +createdOn) / msInDay;

        const years = Math.floor(diff / 365);
        const months = Math.floor(diff % 365 / 30);
        const days = Math.floor(diff % 365 % 30);

        const yearsDisplay = years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
        const monthsDisplay = months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
        const daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";
        
        return yearsDisplay ? yearsDisplay: monthsDisplay ? monthsDisplay : daysDisplay ? daysDisplay : "less than a day ago"; 
      }
    },
    created() {
      this.item.statisticsInfo = this.statisticsInfo;
      this.loaded = true;
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

      &__separator {
        display: none;
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

      &__how-old {
        display: none !important;
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

  // desktop
  @media (min-width: 768px) { 

    .video-media-item {
      padding: 10px 10vw;
      grid-template-columns: 310px auto;
      grid-gap: 30px;

      &__body-container {

        &__title {
          margin-top: 5px;
          font-size: 20px;
        }

        &__channel-name {
          display: inline;
          font-size: 16px;
        }

        &__separator {
          display: inline;
          margin: 0 6px;
        }

        &__views {
          display: inline;
          font-size: 16px;
        }

        &__how-old {
          display: inline !important;
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
