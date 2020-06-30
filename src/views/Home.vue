<template>
  <div class="home">
    <MobileSubHeader/>
    <ChannelMediaItem/>
    <PlaylistMediaItem/>
    <VideoMediaItem/>
    <VideoMediaItem/>
    <ChannelMediaItem/>
    <ChannelMediaItem/>

  </div>
</template>

<script>
// @ is an alias to /src
import MobileSubHeader from "@/components/MobileSubHeader.vue";
import VideoMediaItem from "@/components/Items/VideoMediaItem.vue";
import ChannelMediaItem from "@/components/Items/ChannelMediaItem.vue";
import PlaylistMediaItem from "@/components/Items/PlaylistMediaItem.vue";

export default {
  name: "Home",
  components: {
    MobileSubHeader,
    VideoMediaItem,
    ChannelMediaItem,
    PlaylistMediaItem,
  },
  data: function () {
    return {}
  },
  methods: {

  },
  created() {
    
  }
};
</script>
