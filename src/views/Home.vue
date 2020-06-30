<template>
  <div class="home">
    <template v-if="loading">
      <MobileLoader v-bind:viewText="true"></MobileLoader>
    </template>
    <template v-else>
      <MobileSubHeader  />
      <template v-for="(item, index) in mediaItems">
        <template v-if="item.id.kind === 'youtube#video'">
          <VideoMediaItem v-bind:key="index" v-bind:item="item"/>
        </template>
        <template v-if="item.id.kind === 'youtube#playlist'">
          <PlaylistMediaItem v-bind:key="index" v-bind:item="item"/>
        </template>
        <template v-if="item.id.kind === 'youtube#channel'">
          <ChannelMediaItem v-bind:key="index" v-bind:item="item"/>
        </template>
      </template>
      <template v-if="moreLoading">
        <MobileLoader v-bind:viewText="false"></MobileLoader>
      </template>
      <template v-else>
        <div v-if="nextPageToken" @click="showMore" class="load-more">
          Show more items
        </div>  
      </template>      
    </template>
  </div>
</template>

<script>
import MobileSubHeader from "@/components/MobileSubHeader.vue";
import VideoMediaItem from "@/components/Items/VideoMediaItem.vue";
import ChannelMediaItem from "@/components/Items/ChannelMediaItem.vue";
import PlaylistMediaItem from "@/components/Items/PlaylistMediaItem.vue";
import MobileLoader from "@/components/MobileLoader.vue";

import axios from "axios";
import { bus } from '../main';

export default {
  name: "Home",
  components: {
    MobileSubHeader,
    VideoMediaItem,
    ChannelMediaItem,
    PlaylistMediaItem,
    MobileLoader,
  },
  data: function () {
    return {
      mediaItems: [],
      items: [],
      loading: true,
      moreLoading: false,
      nextPageToken: '',
      totalResults: -1,
      bottomOfWindowFlag: false,
    }
  },
  methods: {
    getData({q, type, publishedAfter, order, pageToken, prevList = []}) {
      this.items = [];

      if (!prevList.length) this.loading = true;
      else this.moreLoading = true;
      
      const link = [`https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&key=AIzaSyCgICO5PzjrLa9s5hs9sMG1rg5fRDRSNxE`];

      q ? link.push(`&q=${q}`) : '';
      type ? link.push(`&type=${type}`) : '';
      publishedAfter ? link.push(`&publishedAfter=${publishedAfter}`) : '';
      order ? link.push(`&order=${order}`) : '';
      pageToken ? link.push(`&pageToken=${pageToken}`) : '';

      console.log(link.join(''));

      axios.get(link.join(''))
      .then(res => {
        this.items = res.data.items;
        this.nextPageToken = res.data.nextPageToken;
        this.totalResults = res.data.pageInfo.totalResults;
        this.mediaItems = [...prevList, ...this.items];
        this.loading = false;
        this.moreLoading = false;
      })
      .catch(err => console.log(err));

    },
    showMore() {
      const searchDetails = {
        q: this.$route.query.q,
        type: this.$route.query.type,
        publishedAfter: this.$route.query.publishedAfter,
        order: this.$route.query.order,
        pageToken: this.nextPageToken,
        prevList: JSON.parse(JSON.stringify(this.mediaItems))
      }
      this.getData(searchDetails);
    },
    scroll () {
      window.onscroll = () => {
        let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, 
        document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight

        if (bottomOfWindow && !this.bottomOfWindowFlag) {
          console.log(bottomOfWindow)
          console.log(Math.max(window.pageYOffset, document.documentElement.scrollTop, 
        document.body.scrollTop) + window.innerHeight)
          console.log(document.documentElement.offsetHeight)
        } else {
          setTimeout(() => {
            this.bottomOfWindowFlag = false;
          }, 100);
        }
      }
    }
  },
  mounted () {
    this.scroll()
  },
  created() {
    const searchDetails = {
      q: this.$route.query.q,
      type: this.$route.query.type,
      publishedAfter: this.$route.query.publishedAfter,
      order: this.$route.query.order,
    }
    this.getData(searchDetails);
    
    bus.$on('searchBy', () => {
      const searchDetails = {
        q: this.$route.query.q,
        type: this.$route.query.type,
        publishedAfter: this.$route.query.publishedAfter,
        order: this.$route.query.order,
      }
      this.getData(searchDetails);
    })
  }
};
</script>

<style lang="scss" scoped>
  .load-more {
    border-top: 1px solid;
    margin-top: 15px;
    padding: 20px 10px;
    text-align: center;
    cursor: pointer;
  }
</style>