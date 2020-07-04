import { shallowMount } from "@vue/test-utils";
import PlaylistMediaItem from "@/components/common/PlaylistMediaItem.vue";

var map = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }

describe("PlaylistMediaItem.vue", () => {
  it("renders correct content when all props passed", () => {

    const item = { "kind": "youtube#searchResult", "etag": "Vc9qxE1Mpir4uD-VLo7Zbh-ZIYY", "id": { "kind": "youtube#playlist", "playlistId": "PLNHYaYAX3ravvh1ZArPYEnvHBAODX_13O" }, "snippet": { "publishedAt": "2017-11-03T09:59:39Z", "channelId": "UCvpDeGlR5wLP9Z3Tb6K0Xfg", "title": "The Thrill Of It All", "description": "My second album 'The Thrill Of It All' is yours... Listen at http://samsmith.world/TTOIAYT.", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/WMAtfhATTLg/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/WMAtfhATTLg/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/WMAtfhATTLg/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "SAM SMITH", "liveBroadcastContent": "none", "publishTime": "2017-11-03T09:59:39Z" } };
    const contentDetails = { "itemCount": 11 };
    const channelPageFlag = false;

    const wrapper = shallowMount(PlaylistMediaItem, {
      propsData: {
        item,
        contentDetails: contentDetails,
        channelPageFlag
      }
    });

    expect(wrapper.vm.item).toMatchObject(item);
    expect(wrapper.vm.contentDetails).toMatchObject(contentDetails);
    expect(wrapper.vm.channelPageFlag).toBe(false);

    expect(wrapper.findAll('img').at(0).attributes("src")).toMatch(item.snippet.thumbnails.medium.url);
    expect(wrapper.findAll('span').at(0).text()).toMatch(Number(contentDetails.itemCount).toLocaleString());
    expect(wrapper.findAll('p').at(0).text()).toMatch(item.snippet.title.replace(/&([^;]+);/g, (m, c) => map[c]));
    expect(wrapper.findAll('p').at(1).text()).toMatch(item.snippet.channelTitle);
    expect(wrapper.findAll('p').at(2).text()).toMatch(item.snippet.description.replace(/&([^;]+);/g, (m, c) => map[c]));

  });

  it("no component renders when item is null or undefined", () => {
       
    const wrapper = shallowMount(PlaylistMediaItem, {
      propsData: {
        item: null,
      }
    });

    expect(wrapper.findAll('div').length).toBe(0);

  });
  
});
