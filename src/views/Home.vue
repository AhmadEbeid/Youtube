<template>
  <div class="home">
    <MobileSubHeader  />
    <template v-for="item in mediaItems">
      <template v-if="item.id.kind === 'youtube#video'">
        <VideoMediaItem v-bind:key="item.id.videoId" v-bind:item="item"/>
      </template>
      <template v-if="item.id.kind === 'youtube#playlist'">
        <PlaylistMediaItem v-bind:key="item.id.playlistId" v-bind:item="item"/>
      </template>
      <template v-if="item.id.kind === 'youtube#channel'">
        <ChannelMediaItem v-bind:key="item.id.channelId" v-bind:item="item"/>
      </template>
    </template>
  </div>
</template>

<script>
import MobileSubHeader from "@/components/MobileSubHeader.vue";
import VideoMediaItem from "@/components/Items/VideoMediaItem.vue";
import ChannelMediaItem from "@/components/Items/ChannelMediaItem.vue";
import PlaylistMediaItem from "@/components/Items/PlaylistMediaItem.vue";

import axios from "axios";
import { bus } from '../main';

export default {
  name: "Home",
  components: {
    MobileSubHeader,
    VideoMediaItem,
    ChannelMediaItem,
    PlaylistMediaItem,
  },
  data: function () {
    return {
      items: [],
      mediaItems: [],
      nextPageToken: '',
      totalResults: -1,
    }
  },
  methods: {
    async getData({q, type, publishedAfter, order, pageToken}) {
      const link = [`https://www.googleapis.com/youtube/v3/search?part=snippet,id&maxResults=20&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`];

      q ? link.push(`&q=${q}`) : '';
      type ? link.push(`&type=${type}`) : '';
      publishedAfter ? link.push(`&publishedAfter=${publishedAfter}`) : '';
      order ? link.push(`&order=${order}`) : '';
      pageToken ? link.push(`&pageToken=${pageToken}`) : '';

      const videosIDs = [];
      const videosIDsData = {};
      const playlistsIDs = [];
      const playlistsIDsData = {};
      const channelsIDs = [];
      const channelsIDsData = {};

      await axios.get(link.join(''))
      .then(res => {
        this.items = res.data.items;
        this.items.forEach((item) => {
          item.id.kind === 'youtube#video' ? videosIDs.push(item.id.videoId): '';
          item.id.kind === 'youtube#playlist' ? playlistsIDs.push(item.id.playlistId): ''; 
          item.id.kind === 'youtube#channel' ? channelsIDs.push(item.id.channelId): ''; 
        })
        this.nextPageToken = res.data.nextPageToken;
        this.totalResults = res.data.pageInfo.totalResults;
      })
      .catch(err => console.log(err));

      if (videosIDs.join(',')) {
        const videosLink = `https://www.googleapis.com/youtube/v3/videos?id=${videosIDs.join(',')}&part=contentDetails,statistics&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`
        await axios.get(videosLink)
        .then(res => {
          res.data.items.forEach(item => {
            videosIDsData[item.id] = { stats: item.statistics, contentDetails: item.contentDetails };
          })
        })
        .catch(err => console.log(err));
      }

      if (playlistsIDs.join(',')) {
        const playlistsLink = `https://www.googleapis.com/youtube/v3/playlists?id=${playlistsIDs.join(',')}&part=contentDetails&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`
        await axios.get(playlistsLink)
        .then(res => {
          res.data.items.forEach(item => {
            playlistsIDsData[item.id] = item.contentDetails;
          })
        })
        .catch(err => console.log(err));
      }

      if (channelsIDs.join(',')) {
        const channelsLink = `https://www.googleapis.com/youtube/v3/channels?id=${channelsIDs.join(',')}&part=statistics&key=AIzaSyBvkzUEPtvoBh87dVLjNaHQ9E4ITcOj8Sw`
        await axios.get(channelsLink)
        .then(res => {
          res.data.items.forEach(item => {
            channelsIDsData[item.id] = item.statistics;
          })
        })
        .catch(err => console.log(err));
      }

      this.items.forEach((item) => {
        item.id.kind === 'youtube#video' ? item['statisticsInfo'] = videosIDsData[item.id.videoId]: '';
        item.id.kind === 'youtube#playlist' ? item['contentDetails'] = playlistsIDsData[item.id.playlistId]: ''; 
        item.id.kind === 'youtube#channel' ? item['statistics'] = channelsIDsData[item.id.channelId]: ''; 
      })

      this.mediaItems = this.items;
    }
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
