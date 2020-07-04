import { shallowMount } from "@vue/test-utils";
import ChannelMediaItem from "@/components/common/ChannelMediaItem.vue";

describe("ChannelMediaItem.vue", () => {
  it("renders correct content when all props passed", () => {
    
    const item = { "kind": "youtube#searchResult", "etag": "3D8Nt3jukXdi95Pi_h6KEZFsDuc", "id": { "kind": "youtube#channel", "channelId": "UCiMhD4jzUqG-IgPzUmmytRQ" }, "snippet": { "publishedAt": "2008-07-07T13:35:27Z", "channelId": "UCiMhD4jzUqG-IgPzUmmytRQ", "title": "Queen Official", "description": "Welcome to the official Queen channel. Subscribe today for exclusive Queen videos, including live performances, interviews, official videos, behind-the-scenes ...", "thumbnails": { "default": { "url": "https://yt3.ggpht.com/-S1HWgr--7So/AAAAAAAAAAI/AAAAAAAAAAA/lqWNX9pJni8/s88-c-k-no-mo-rj-c0xffffff/photo.jpg" }, "medium": { "url": "https://yt3.ggpht.com/-S1HWgr--7So/AAAAAAAAAAI/AAAAAAAAAAA/lqWNX9pJni8/s240-c-k-no-mo-rj-c0xffffff/photo.jpg" }, "high": { "url": "https://yt3.ggpht.com/-S1HWgr--7So/AAAAAAAAAAI/AAAAAAAAAAA/lqWNX9pJni8/s800-c-k-no-mo-rj-c0xffffff/photo.jpg" } }, "channelTitle": "Queen Official", "liveBroadcastContent": "upcoming", "publishTime": "2008-07-07T13:35:27Z" } };
    const statistics = { "viewCount": "6451594420", "commentCount": "0", "subscriberCount": "12600000", "hiddenSubscriberCount": false, "videoCount": "802" };
    
    const wrapper = shallowMount(ChannelMediaItem, {
      propsData: {
        item,
        statistics
      }
    });

    expect(wrapper.vm.item).toMatchObject(item);
    expect(wrapper.vm.statistics).toMatchObject(statistics);

    expect(wrapper.findAll('img').at(0).attributes("src")).toMatch(item.snippet.thumbnails.medium.url);
    expect(wrapper.findAll('p').at(0).text()).toMatch(item.snippet.title.replace(/&([^;]+);/g, (m, c) => map[c]));
    expect(wrapper.findAll('p').at(1).text()).toMatch(Number(statistics.videoCount).toLocaleString());
    expect(wrapper.findAll('p').at(2).text()).toMatch(Number(statistics.subscriberCount).toLocaleString());
    expect(wrapper.findAll('p').at(3).text()).toMatch(item.snippet.description.replace(/&([^;]+);/g, (m, c) => map[c]));

  });

  describe("ChannelMediaItem.vue", () => {
    it("no component renders when item is null or undefined", () => {
         
      const wrapper = shallowMount(ChannelMediaItem, {
        propsData: {
          item: null,
        }
      });
  
      expect(wrapper.findAll('div').length).toBe(0);
  
    });
  });

});
