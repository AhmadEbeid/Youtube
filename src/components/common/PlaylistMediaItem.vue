<template>
  <div
    v-if="item && item.snippet.thumbnails.medium"
    class="playlist-media-item"
    v-bind:class="{ 'playlist-media-item-padding-channel-page': channelPageFlag }"
    @click="$router.push({ name: 'Playlist', params: { id: item.id.playlistId } })"
  >
    <div class="playlist-media-item__image-container">
      <img
        class="playlist-media-item__image-container__img"
        v-bind:src="item.snippet.thumbnails.medium.url"
        alt
      />
      <div v-if="contentDetails" class="playlist-media-item__image-container__div">
        <span
          class="playlist-media-item__image-container__div__span"
        >{{ Number(contentDetails.itemCount).toLocaleString() }}</span>
        <img
          class="playlist-media-item__image-container__div__img"
          src="../../assets/playlist-count.svg"
          alt="count"
        />
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
  props: {
    item: Object,
    contentDetails: Object,
    channelPageFlag: Boolean
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
      width: 160px;
      height: 90px;
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

// desktop
@media (min-width: 768px) {
  .playlist-media-item-padding-channel-page {
    padding: 10px 0vw !important;
  }

  .playlist-media-item {
    padding: 10px 15vw;
    grid-template-columns: 310px auto;
    grid-gap: 30px;

    &__image-container {
      &__img {
        width: 310px;
        height: 174.38px;
      }

      &__div {
        height: 174.38px;
        width: 120px;

        &__span {
          font-size: 20px;
        }

        &__img {
          width: 30px;
          height: 30px;
        }
      }
    }

    &__body-container {
      &__title {
        margin-top: 5px;
        font-size: 20px;
      }

      &__channel-name {
        display: inline;
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
