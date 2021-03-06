<template>
  <div>
    <DesktopLoader class="mobile-hidden" v-bind:loading="desktopLoader" v-bind:width="loaderWidth"></DesktopLoader>
    <div class="video-details-page">
      <template v-if="loading">
        <MobileLoader class="desktop-hidden" v-bind:viewText="true" />
      </template>
      <template v-else>
        <div class="video-details-page__video-container">
          <iframe class="video-details-page__video-container__iframe" v-bind:src="videoLink"></iframe>
        </div>
        <div class="video-details-page__video-info">
          <h1 class="video-details-page__video-info__title">{{ videoData.snippet.title }}</h1>
          <p v-if="videoFLag" class="video-details-page__video-info__sub-title">
            <span class="video-details-page__video-info__sub-title__span">
              <span v-if="!desktopFlag">{{ videoData.snippet.channelTitle }}</span>
              {{
              Number(videoData.statistics.viewCount).toLocaleString()
              }}
              views
            </span>
          </p>
        </div>
        <div class="video-details-page__video-sub-info">
          <img
            class="video-details-page__video-sub-info__img"
            v-bind:src="videoData.snippet.thumbnails.default.url"
            alt
          />
          <div>
            <p class="video-details-page__video-sub-info__title">{{videoData.snippet.channelTitle}}</p>
            <p
              class="video-details-page__video-sub-info__info"
            >Published on {{publishedAt(videoData.snippet.publishedAt)}}</p>
          </div>
        </div>
        <div class="video-details-page__related-video-container">
          <template v-if="loading2">
            <MobileLoader v-bind:marginFLag="true" v-bind:viewText="true" />
          </template>
          <template v-else>
            <template v-for="(item, index) in relatedVideos">
              <VideoMediaItem
                v-bind:key="index"
                v-bind:item="item"
                v-bind:statisticsInfo="videosResJson[item.id.videoId]"
                v-bind:videoPageFlag="desktopFlag"
              />
            </template>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { bus } from "../event-bus";
import MobileLoader from "@/components/mobile/MobileLoader.vue";
import DesktopLoader from "@/components/desktop/DesktopLoader.vue";
import VideoMediaItem from "@/components/common/VideoMediaItem.vue";

export default {
  name: "VideoDetails",
  components: {
    MobileLoader,
    DesktopLoader,
    VideoMediaItem
  },
  data: function() {
    return {
      id: "",
      videoLink: "",
      videoData: {},
      relatedVideos: [],
      videosResJson: {},
      loading: true,
      loading2: true,
      desktopFlag: false,
      loaderWidth: 0,
      desktopLoader: true,
      loaderInterval: null,
      videoFLag: true
    };
  },
  methods: {
    async getVideoData() {
      try {
        this.loading = true;
        this.desktopLoader = true;
        this.loaderWidth = 0;
        let loaderRest = false;
        this.loaderInterval = setInterval(() => {
          if (!loaderRest) this.loaderWidth++;
          if (this.loaderWidth === 100) {
            loaderRest = true;
            setTimeout(() => {
              this.desktopLoader = false;
              this.loaderWidth = 0;
              setTimeout(() => {
                this.desktopLoader = true;
                loaderRest = false;
              }, 100);
            }, 800);
          }
        }, 100);
        this.id = this.$route.params.id;
        this.videoLink = `https://www.youtube.com/embed/${this.id}`;
        const videoLink = `https://www.googleapis.com/youtube/v3/videos?id=${this.id}&part=snippet,contentDetails,statistics&key=${process.env.VUE_APP_API_KEY}`;
        let res = await axios.get(videoLink);
        if (res.data.items.length > 0) this.videoData = res.data.items[0];
        else this.$router.push({ path: "/" }).catch(()=>{});
        this.loading = false;
        this.loaderWidth = 100;
        this.desktopLoader = false;
        clearInterval(this.loaderInterval);

        let videoIds = [];
        const relatedLink = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${this.id}&part=snippet,id&maxResults=5&type=video&key=${process.env.VUE_APP_API_KEY}`;
        res = await axios.get(relatedLink);
        this.relatedVideos = res.data.items;
        videoIds = this.relatedVideos
          .filter(item => item.id.kind === "youtube#video")
          .map(item => item.id.videoId);

        const RealtedVideosLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
          ","
        )}&part=contentDetails,statistics&key=${process.env.VUE_APP_API_KEY}`;
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
        alert("API KEY quota exceeded");
        console.log(error);
      }
    },
    async getPlaylistData() {
      try {
        this.loading = true;
        this.desktopLoader = true;
        this.loaderWidth = 0;
        let loaderRest = false;
        this.loaderInterval = setInterval(() => {
          if (!loaderRest) this.loaderWidth++;
          if (this.loaderWidth === 100) {
            loaderRest = true;
            setTimeout(() => {
              this.desktopLoader = false;
              this.loaderWidth = 0;
              setTimeout(() => {
                this.desktopLoader = true;
                loaderRest = false;
              }, 100);
            }, 800);
          }
        }, 100);

        this.id = this.$route.params.id;
        this.videoLink = `https://www.youtube.com/embed/videoseries?list=${this.id}`;
        const videoLink = `https://www.googleapis.com/youtube/v3/playlists?id=${this.id}&part=snippet,contentDetails&key=${process.env.VUE_APP_API_KEY}`;

        let res = await axios.get(videoLink);
        if (res.data.items.length > 0) this.videoData = res.data.items[0];
        else this.$router.push({ path: "/" }).catch(()=>{});
        this.loading = false;
        this.loaderWidth = 100;
        this.desktopLoader = false;
        clearInterval(this.loaderInterval);

        let videoIds = [];
        const relatedLink = `https://www.googleapis.com/youtube/v3/playlistItems?maxResults=50&part=snippet,id&playlistId=${this.id}&key=${process.env.VUE_APP_API_KEY}`;
        res = await axios.get(relatedLink);
        this.relatedVideos = res.data.items;
        this.relatedVideos = this.relatedVideos.map(item => {
          item.id = item.snippet.resourceId;
          return item;
        });
        videoIds = this.relatedVideos.map(item => item.id.videoId);

        const RealtedVideosLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
          ","
        )}&part=contentDetails,statistics&key=${process.env.VUE_APP_API_KEY}`;
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
        alert("API KEY quota exceeded");
        console.log(error);
      }
    },
    publishedAt(date) {
      date = new Date(date).toDateString().split(" ");
      return date[2] + " " + date[1] + " " + date[3];
    }
  },
  created() {
    if (window.innerWidth >= 768) this.desktopFlag = true;
    bus.$emit("resetHeaderTitle");

    if (this.$route.name === "Video") this.getVideoData();
    if (this.$route.name === "Playlist") {
      this.getPlaylistData();
      this.videoFLag = false;
    }
  },
  watch: {
    $route() {
      if (this.$route.name === "Video") this.getVideoData();
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
      min-height: 200px;
      padding: 0px 10px;
      background-color: white;
    }
  }
}
</style>
