<template>
  <div class="video-details-page">
    <template v-if="loading">
      <MobileLoader class="desktop-hidden" v-bind:viewText="true"></MobileLoader>
    </template>
    <template v-else>
      <div class="video-details-page__video-container">
        <iframe
          class="video-details-page__video-container__iframe"
          v-bind:src="'https://www.youtube.com/embed/' + id"
        ></iframe>
      </div>
      <div class="video-details-page__video-info">
        <h1 class="video-details-page__video-info__title">{{ videoData.snippet.title }}</h1>
        <p class="video-details-page__video-info__sub-title">
          <span class="video-details-page__video-info__sub-title__span">
            <span v-if="!desktopFlag">{{ this.videoData.snippet.channelTitle }}</span>
            {{
            Number(videoData.statistics.viewCount).toLocaleString()
            }}
            views
          </span>
        </p>
      </div>
      <div class="video-details-page__video-sub-info">
        <img class="video-details-page__video-sub-info__img" v-bind:src="videoData.snippet.thumbnails.default.url" alt />
        <div>
          <p class="video-details-page__video-sub-info__title">{{videoData.snippet.channelTitle}}</p>
          <p class="video-details-page__video-sub-info__info">Published on {{publishedAt(videoData.snippet.publishedAt)}}</p>
        </div>
      </div>
      <div class="video-details-page__related-video-container">
        <template v-if="loading2">
          <MobileLoader class="desktop-hidden" v-bind:viewText="true"></MobileLoader>
        </template>
        <template v-else>
          <template v-for="(item, index) in relatedVideos">
            <template v-if="item.id.kind === 'youtube#video'">
              <VideoMediaItem
                v-bind:key="index"
                v-bind:item="item"
                v-bind:statisticsInfo="videosResJson[item.id.videoId]"
                v-bind:videoPageFlag="desktopFlag"
              />
            </template>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "../main";
import MobileLoader from "@/components/mobile/MobileLoader.vue";
import VideoMediaItem from "@/components/common/VideoMediaItem.vue";

export default {
  name: "VideoDetails",
  components: {
    MobileLoader,
    VideoMediaItem
  },
  data: function() {
    return {
      id: "",
      videoData: {},
      relatedVideos: [],
      videosResJson: {},
      loading: true,
      loading2: true,
      desktopFlag: false
    };
  },
  methods: {
    async getData() {
      try {
        this.id = this.$route.params.id;
        const videoLink = `https://www.googleapis.com/youtube/v3/videos?id=${this.id}&part=snippet,contentDetails,statistics&key=AIzaSyAXyLUOCRRAWZuvwrcoqh0EvNScFYieDEQ`;
        let res = await axios.get(videoLink);
        if (res.data.items.length > 0) this.videoData = res.data.items[0];
        else this.$router.push({ path: "/" });
        this.loading = false;

        let videoIds = [];
        const relatedLink = `https://www.googleapis.com/youtube/v3/search?part=snippet,id&type=video&maxResults=5&key=AIzaSyAXyLUOCRRAWZuvwrcoqh0EvNScFYieDEQ`;
        res = await axios.get(relatedLink);
        this.relatedVideos = res.data.items;
        videoIds = this.relatedVideos
          .filter(item => item.id.kind === "youtube#video")
          .map(item => item.id.videoId);

        const RealtedVideosLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
          ","
        )}&part=contentDetails,statistics&key=AIzaSyAXyLUOCRRAWZuvwrcoqh0EvNScFYieDEQ`;
        res = await axios.get(RealtedVideosLink);
        this.videosResJson = res.data.items.reduce((json, value) => {
          json[value.id] = {
            stats: value.statistics,
            contentDetails: value.contentDetails
          };
          return json;
        }, {});
        this.loading2 = false;
      } catch (error) {
        console.log(error);
      }
    },
    publishedAt(date) {
      date = (new Date(date)).toDateString().split(" ")
      return date[2] + " " + date[1] + " " + date[3];
    }
  },
  created() {
    if (window.innerWidth >= 768) this.desktopFlag = true;
    this.getData();
    bus.$emit("resetHeaderTitle");
  },
  watch: {
    $route() {
      this.getData();
    }
  }
};
</script>

<style lang="scss" scoped>
.video-details-page {
  &__video-info {
    padding: 10px 15px;
    margin-top: 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;

    &__title {
      font-size: 22px;
      font-weight: bold;
    }

    &__sub-title {
      font-size: 17px;
      margin-top: 10px;
      margin-bottom: 15px;

      &__span {
        color: #000000ad;
      }
    }
  }
}
@media (max-width: 767px) {
  .video-details-page {
    &__video-container {
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 25px;
      height: 0;

      &__iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }

    &__video-info {
      padding: 10px 15px;
      margin-top: 15px;
      margin-bottom: 15px;
      border-bottom: 1px solid #e0e0e0;
    }

    &__video-sub-info {
      display: none !important;
    }
  }
}

@media (min-width: 768px) {
  .video-details-page {
    padding: 0px 15vw;
    background-color: #f9f9f9;

    &__video-container {
      padding: 10px 10px;
      background-color: white;

      &__iframe {
        width: 100%;
        height: 37vw;
      }
    }

    &__video-info {
      padding: 25px 10px;
      margin-top: 0px;
      margin-bottom: 0px;
      border-bottom: 1px solid #e0e0e0;
      background-color: white;

      &__title {
        font-size: 25px;
        font-weight: bold;
      }

      &__sub-title {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 0px;

        &__span {
          color: #000000ad;
        }
      }
    }

    &__video-sub-info {
      padding: 25px 10px;
      margin-top: 0px;
      margin-bottom: 0px;
      border-bottom: 1px solid #e0e0e0;
      background-color: white;
      display: flex;
      align-items: center;
      

      &__img {
        width: 70px;
        height: 70px;
        border-radius: 100%;
        margin-right: 20px;
      }

      &__title {
        font-size: 18px;
        font-weight: bold;
      }

      &__info {
        font-size: 16px;
        margin-top: 5px;
        color: #000000ad;
      }
    }

    &__related-video-container {
      padding: 0px 10px;
      background-color: white;
    }
  }
}
</style>
