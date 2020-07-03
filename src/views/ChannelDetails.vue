<template>
  <div>
    <DesktopLoader class="mobile-hidden" v-bind:loading="desktopLoader" v-bind:width="loaderWidth" />
    <div class="channel-details-page">
      <template v-if="loading">
        <MobileLoader class="desktop-hidden" v-bind:viewText="true" />
      </template>
      <template v-else>
        <div class="channel-details-page__image-container">
          <img
            class="channel-details-page__image-container__img"
            v-bind:src="bannerImage"
            alt="banner"
          />
        </div>
        <div class="channel-details-page__channel-info">
          <img
            class="channel-details-page__channel-info__img"
            v-bind:src="channelData.snippet.thumbnails.default.url"
            alt
          />
          <h1 class="channel-details-page__channel-info__title">{{ channelData.snippet.title }}</h1>
          <p class="channel-details-page__channel-info__sub-title">
            <span class="channel-details-page__channel-info__sub-title__span">
              {{
              Number(channelData.statistics.subscriberCount).toLocaleString()
              }}
              Subscribers
            </span>
          </p>
        </div>
        <div class="channel-details-page__related-channel-container">
          <template v-if="loading2">
            <MobileLoader v-bind:marginFLag="true" v-bind:viewText="true" />
          </template>
          <template v-else>
            <template v-for="(item, index) in relatedPlaylists">
              <PlaylistMediaItem
                v-bind:key="index"
                v-bind:item="item"
                v-bind:contentDetails="item.contentDetails"
                v-bind:channelPageFlag="desktopFlag"
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
import PlaylistMediaItem from "@/components/common/PlaylistMediaItem.vue";

export default {
  name: "ChannelDetails",
  components: {
    MobileLoader,
    DesktopLoader,
    PlaylistMediaItem
  },
  data: function() {
    return {
      id: "",
      channelData: {},
      bannerImage: "",
      relatedPlaylists: [],
      loading: true,
      loading2: true,
      desktopFlag: false,
      loaderWidth: 0,
      desktopLoader: true,
      loaderInterval: null
    };
  },
  methods: {
    async getChannelData() {
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
        const channelLink = `https://www.googleapis.com/youtube/v3/channels?id=${this.id}&part=snippet,brandingSettings,statistics&key=${process.env.VUE_APP_API_KEY}`;

        let res = await axios.get(channelLink);
        if (res.data.items.length > 0) this.channelData = res.data.items[0];
        else this.$router.push({ path: "/" });
        this.loading = false;
        this.loaderWidth = 100;
        this.desktopLoader = false;

        this.bannerImage =
          this.desktopFlag == true
            ? this.channelData.brandingSettings.image.bannerImageUrl
            : this.channelData.brandingSettings.image.bannerMobileImageUrl;
        clearInterval(this.loaderInterval);

        const playlistsLink = `https://www.googleapis.com/youtube/v3/playlists?maxResults=50&part=contentDetails,snippet,id&channelId=${this.id}&key=${process.env.VUE_APP_API_KEY}`;
        res = await axios.get(playlistsLink);
        this.relatedPlaylists = res.data.items.map(item => {
          const id = item.id;
          item.id = {};
          item.id["playlistId"] = id;
          return item;
        });

        this.loading2 = false;
      } catch (error) {
        alert("API KEY quota exceeded");
        console.log(error);
      }
    }
  },
  created() {
    if (window.innerWidth >= 768) this.desktopFlag = true;
    bus.$emit("resetHeaderTitle");
    this.getChannelData();
  }
};
</script>

<style lang="scss" scoped>
.channel-details-page {
  &__image-container {
    &__img {
      width: 100%;
    }
  }

  &__channel-info {
    padding: 0px 15px 10px 15px;
    margin-bottom: 15px;
    border-bottom: 1px solid #e0e0e0;

    &__img {
      width: 60px;
      height: 60px;
      margin-top: -30px;
      border-radius: 100%;
    }

    &__title {
      font-size: 22px;
      font-weight: bold;
      text-align: center;
    }

    &__sub-title {
      font-size: 17px;
      margin-top: 10px;
      margin-bottom: 15px;
      text-align: center;

      &__span {
        color: #000000ad;
      }
    }
  }
}

@media (min-width: 768px) {
  .channel-details-page {
    padding: 0px 15vw;
    background-color: #f9f9f9;

    &__channel-info {
      padding: 0px 10px 25px 10px;
      margin-bottom: 0px;
      border-bottom: 1px solid #e0e0e0;
      background-color: white;

      &__img {
        width: 88px;
        height: 88px;
        margin-top: -44px;
        margin-bottom: 10px;
      }

      &__title {
        font-size: 25px;
        font-weight: bold;
        text-align: left;
      }

      &__sub-title {
        font-size: 18px;
        margin-top: 10px;
        margin-bottom: 0px;
        text-align: left;

        &__span {
          color: #000000ad;
        }
      }
    }

    &__related-channel-container {
      min-height: 200px;
      padding: 0px 10px;
      background-color: white;
    }
  }
}
</style>
