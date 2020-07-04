<template>
  <div
    v-if="item && item.snippet.thumbnails.medium"
    v-bind:class="{'video-page-video-media-item': videoPageFlag, 'video-media-item': !videoPageFlag}"
    @click="$router.push({ name: 'Video', params: { id: item.id.videoId } })"
  >
    <div
      v-bind:class="{'video-page-video-media-item__image-container': videoPageFlag, 'video-media-item__image-container': !videoPageFlag}"
    >
      <img
        v-bind:class="{'video-page-video-media-item__image-container__img': videoPageFlag, 'video-media-item__image-container__img': !videoPageFlag}"
        v-bind:src="item.snippet.thumbnails.medium.url"
        alt
      />
      <span
        v-if="statisticsInfo"
        v-bind:class="{'video-page-video-media-item__image-container__span': videoPageFlag, 'video-media-item__image-container__span': !videoPageFlag}"
      >{{ getDuration(statisticsInfo.contentDetails.duration) }}</span>
    </div>
    <div
      v-bind:class="{'video-page-video-media-item__body-container': videoPageFlag, 'video-media-item__body-container': !videoPageFlag}"
    >
      <p
        v-bind:class="{'video-page-video-media-item__body-container__title': videoPageFlag, 'video-media-item__body-container__title': !videoPageFlag}"
        v-html="item.snippet.title"
      ></p>
      <p
        v-bind:class="{'video-page-video-media-item__body-container__channel-name': videoPageFlag, 'video-media-item__body-container__channel-name': !videoPageFlag}"
      >{{ item.snippet.channelTitle }}</p>
      <span
        v-bind:class="{'video-page-video-media-item__body-container__separator': videoPageFlag, 'video-media-item__body-container__separator': !videoPageFlag}"
      >•</span>
      <p
        v-if="statisticsInfo"
        v-bind:class="{'video-page-video-media-item__body-container__views': videoPageFlag, 'video-media-item__body-container__views': !videoPageFlag}"
      >{{ Number(statisticsInfo.stats.viewCount).toLocaleString() }} views</p>
      <span
        v-bind:class="{'video-page-video-media-item__body-container__separator': videoPageFlag, 'video-media-item__body-container__separator': !videoPageFlag}"
      >•</span>
      <p
        v-bind:class="{'video-page-video-media-item__body-container__how-old': videoPageFlag, 'video-media-item__body-container__how-old': !videoPageFlag}"
      >{{ getHowOld(item.snippet.publishTime) }}</p>
      <p
        v-bind:class="{'video-page-video-media-item__body-container__description': videoPageFlag, 'video-media-item__body-container__description': !videoPageFlag}"
        v-html="item.snippet.description"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoMediaItem",
  props: {
    item: Object,
    statisticsInfo: Object,
    videoPageFlag: Boolean
  },
  methods: {
    getDuration(duration) {
      duration = duration.replace("PT", "");

      if (duration.indexOf("M") === -1 && duration.indexOf("S") === -1) {
        duration = duration + "00M00S";
      } else if (duration.indexOf("S") === -1) {
        duration = duration + "00S";
      }
      return duration
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "");
    },
    getHowOld(publishTime) {
      const today = new Date();
      const createdOn = new Date(publishTime);
      const msInDay = 24 * 60 * 60 * 1000;

      createdOn.setHours(0, 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      const diff = (+today - +createdOn) / msInDay;

      const years = Math.floor(diff / 365);
      const months = Math.floor((diff % 365) / 30);
      const days = Math.floor((diff % 365) % 30);

      const yearsDisplay =
        years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
      const monthsDisplay =
        months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
      const daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";

      return yearsDisplay
        ? yearsDisplay
        : monthsDisplay
        ? monthsDisplay
        : daysDisplay
        ? daysDisplay
        : "less than a day ago";
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
      background-color: hsla(0, 0%, 6.7%, 0.8);
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
      display: none;
      color: #000000ad;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    &__description {
      display: none;
      color: #000000ad;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}

// desktop
@media (min-width: 768px) {
  .video-media-item {
    padding: 10px 15vw;
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
        display: inline;
        font-size: 16px;
      }

      &__description {
        margin-top: 15px;
        display: -webkit-box;
        font-size: 18px;
      }
    }
  }
}

.video-page-video-media-item {
  padding: 10px 0px;
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
      background-color: hsla(0, 0%, 6.7%, 0.8);
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
      display: none;
      color: #000000ad;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    &__description {
      display: none;
      color: #000000ad;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
