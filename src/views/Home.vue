<template>
  <div class="home">
    <template v-if="loading">
      <DesktopLoader class="mobile-hidden" v-bind:loading="desktopLoader" v-bind:width="loaderWidth"></DesktopLoader>
      <MobileLoader class="desktop-hidden" v-bind:viewText="true"></MobileLoader>
    </template>
    <template v-else>
      <MobileSubHeader class="desktop-hidden" />
      <DesktopSubHeader class="mobile-hidden" />
      <template v-for="(item, index) in mediaItems">
        <template
          v-if="item.id.kind === 'youtube#video' && ($route.query.type === 'video' || !$route.query.type)"
        >
          <VideoMediaItem
            v-bind:key="index"
            v-bind:item="item"
            v-bind:statisticsInfo="videosResJson[item.id.videoId]"
          />
        </template>
        <template
          v-if="item.id.kind === 'youtube#playlist' && ($route.query.type === 'playlist' || !$route.query.type)"
        >
          <PlaylistMediaItem
            v-bind:key="index"
            v-bind:item="item"
            v-bind:contentDetails="playlistsResJson[item.id.playlistId]"
          />
        </template>
        <template
          v-if="item.id.kind === 'youtube#channel' && ($route.query.type === 'channel' || !$route.query.type)"
        >
          <ChannelMediaItem
            v-bind:key="index"
            v-bind:item="item"
            v-bind:statistics="channelsResJson[item.id.channelId]"
          />
        </template>
      </template>
      <template v-if="moreLoading">
        <DesktopLoader class="mobile-hidden" v-bind:loading="desktopLoader" v-bind:width="loaderWidth"></DesktopLoader>
        <MobileLoader v-bind:viewText="false"></MobileLoader>
      </template>
      <template v-else>
        <div
          class="desktop-hidden mobile-load-more"
          v-if="nextPageToken"
          @click="showMore"
        >Show more items</div>
      </template>
    </template>
  </div>
</template>

<script>
import MobileSubHeader from "@/components/mobile/MobileSubHeader.vue";
import DesktopSubHeader from "@/components/desktop/DesktopSubHeader.vue";
import VideoMediaItem from "@/components/common/VideoMediaItem.vue";
import ChannelMediaItem from "@/components/common/ChannelMediaItem.vue";
import PlaylistMediaItem from "@/components/common/PlaylistMediaItem.vue";
import MobileLoader from "@/components/mobile/MobileLoader.vue";
import DesktopLoader from "@/components/desktop/DesktopLoader.vue";

import axios from "axios";
import { bus } from "../main";

export default {
  name: "Home",
  components: {
    MobileSubHeader,
    DesktopSubHeader,
    VideoMediaItem,
    ChannelMediaItem,
    PlaylistMediaItem,
    MobileLoader,
    DesktopLoader,
  },
  data: function() {
    return {
      mediaItems: [],
      items: [],
      loading: true,
      moreLoading: false,
      nextPageToken: "",
      totalResults: -1,
      bottomOfWindowFlag: false,
      lastScrollUpdate: 0,
      getDataRunning: false,
      videosResJson: {},
      playlistsResJson: {},
      channelsResJson: {},
      loaderWidth: 0,
      desktopLoader: true,
      loaderInterval: null,
    };
  },
  methods: {
    desktopLoaderStart() {
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
    },
    async getData({
      q,
      type,
      publishedAfter,
      order,
      pageToken,
      prevList = []
    }) {
      this.getDataRunning = true;
      this.items = [];

      if (!prevList.length) {
        this.loading = true;
        this.mediaItems = [];
      } else {
        this.moreLoading = true;
      }
      this.desktopLoaderStart();

      const link = [
        `https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&key=AIzaSyDTLe4ePjYTGbavTbhklPIa9FS6yDeI3No`
      ];

      q ? link.push(`&q=${q}`) : "";
      type ? link.push(`&type=${type}`) : "";
      publishedAfter ? link.push(`&publishedAfter=${publishedAfter}`) : "";
      order ? link.push(`&order=${order}`) : "";
      pageToken ? link.push(`&pageToken=${pageToken}`) : "";

      try {
        let res = await axios.get(link.join(""));
        this.items = res.data.items;
        this.nextPageToken = res.data.nextPageToken;
        this.totalResults = res.data.pageInfo.totalResults;
        this.mediaItems = [...prevList, ...this.items];

        const videoIds = this.items
          .filter(item => item.id.kind === "youtube#video")
          .map(item => item.id.videoId);
        const playlistIds = this.items
          .filter(item => item.id.kind === "youtube#playlist")
          .map(item => item.id.playlistId);
        const channelIds = this.items
          .filter(item => item.id.kind === "youtube#channel")
          .map(item => item.id.channelId);

        if (videoIds.length) {
          const videoLink = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
            ","
          )}&part=contentDetails,statistics&key=AIzaSyDTLe4ePjYTGbavTbhklPIa9FS6yDeI3No`;
          const videosRes = await axios.get(videoLink);
          this.videosResJson = videosRes.data.items.reduce((json, value) => {
            json[value.id] = {
              stats: value.statistics,
              contentDetails: value.contentDetails
            };
            return json;
          }, {});
        }
        if (playlistIds.length) {
          const playlistLink = `https://www.googleapis.com/youtube/v3/playlists?id=${playlistIds.join(
            ","
          )}&part=contentDetails&key=AIzaSyDTLe4ePjYTGbavTbhklPIa9FS6yDeI3No`;
          const playlistsRes = await axios.get(playlistLink);
          this.playlistsResJson = playlistsRes.data.items.reduce(
            (json, value) => {
              json[value.id] = value.contentDetails;
              return json;
            },
            {}
          );
        }
        if (channelIds.length) {
          const channelLink = `https://www.googleapis.com/youtube/v3/channels?id=${channelIds.join(
            ","
          )}&part=statistics&key=AIzaSyDTLe4ePjYTGbavTbhklPIa9FS6yDeI3No`;
          const channelsRes = await axios.get(channelLink);
          this.channelsResJson = channelsRes.data.items.reduce(
            (json, value) => {
              json[value.id] = value.statistics;
              return json;
            },
            {}
          );
        }

        this.loading = false;
        this.loaderWidth = 100;
        clearInterval(this.loaderInterval);
        this.moreLoading = false;
        this.getDataRunning = false;
      } catch (error) {
        console.log(error);
      }
    },
    showMore() {
      const searchDetails = {
        q: this.$route.query.q,
        type: this.$route.query.type,
        publishedAfter: this.$route.query.publishedAfter,
        order: this.$route.query.order,
        pageToken: this.nextPageToken,
        prevList: JSON.parse(JSON.stringify(this.mediaItems))
      };
      this.getData(searchDetails);
    },
    scroll() {
      window.onscroll = () => {
        var scrollBar = document.documentElement;
        if (
          scrollBar.scrollTop + scrollBar.clientHeight >=
          scrollBar.scrollHeight - 20
        ) {
          var t = new Date().getTime();
          if (t - this.lastScrollUpdate > 3000) {
            this.lastScrollUpdate = t;
            const searchDetails = {
              q: this.$route.query.q,
              type: this.$route.query.type,
              publishedAfter: this.$route.query.publishedAfter,
              order: this.$route.query.order,
              pageToken: this.nextPageToken,
              prevList: JSON.parse(JSON.stringify(this.mediaItems))
            };
            this.moreLoading = true;
            this.getData(searchDetails);
          }
        }
      };
    }
  },
  mounted() {
    if (window.innerWidth >= 768) this.scroll();
  },
  created() {
    const searchDetails = {
      q: this.$route.query.q,
      type: this.$route.query.type,
      publishedAfter: this.$route.query.publishedAfter,
      order: this.$route.query.order
    };
    if (!this.getDataRunning) {
      this.getDataRunning = true;
      this.getData(searchDetails);
    }

    bus.$on('searchBy', ({ q, type, publishedAfter, order = 'relevance' }) => {
      const searchDetails = {
        q: this.$route.query.q,
        type: this.$route.query.type,
        publishedAfter: this.$route.query.publishedAfter,
        order: this.$route.query.order
      };

      q ? (searchDetails.q = q) : "";
      type ? (searchDetails.type = type) : "";
      publishedAfter ? (searchDetails.publishedAfter = publishedAfter) : "";
      order ? (searchDetails.order = order) : "";

      if (!this.getDataRunning) {
        this.getDataRunning = true;
        this.getData(searchDetails);
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  .mobile-load-more {
    border-top: 1px solid;
    margin-top: 15px;
    padding: 20px 10px;
    text-align: center;
    cursor: pointer;
  }
}

@media (min-width: 768px) {
  .home {
    background-color: #f9f9f9;
    padding-bottom: 15px;
  }
}
</style>