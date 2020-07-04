import { shallowMount } from "@vue/test-utils";
import VideoMediaItem from "@/components/common/VideoMediaItem.vue";

function getDuration(duration) {
  duration = duration.replace("PT", "");

  if (duration.indexOf("M") === -1 && duration.indexOf("S") === -1) {
    duration = duration + "00M00S";
  } else if (duration.indexOf("S") === -1) {
    duration = duration + "00S";
  }
  return duration
    .replace("H", ":")
    .replace("M", ":")
    .replace("S", "");
}

function getHowOld(publishTime) {
  const today = new Date();
  const createdOn = new Date(publishTime);
  const msInDay = 24 * 60 * 60 * 1000;

  createdOn.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diff = (+today - +createdOn) / msInDay;

  const years = Math.floor(diff / 365);
  const months = Math.floor((diff % 365) / 30);
  const days = Math.floor((diff % 365) % 30);

  const yearsDisplay =
    years > 0 ? years + (years == 1 ? " year, " : " years, ") : "";
  const monthsDisplay =
    months > 0 ? months + (months == 1 ? " month, " : " months, ") : "";
  const daysDisplay = days > 0 ? days + (days == 1 ? " day" : " days") : "";

  return yearsDisplay
    ? yearsDisplay
    : monthsDisplay
      ? monthsDisplay
      : daysDisplay
        ? daysDisplay
        : "less than a day ago";
}

var map = {amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'"}

describe("VideoMediaItem.vue", () => {
  it("renders correct content when all props passed", () => {
    
    const item = { "kind": "youtube#searchResult", "etag": "zPH3_AsOpHx3iP6TyasyvCW-sok", "id": { "kind": "youtube#video", "videoId": "NIOIKdylRcM" }, "snippet": { "publishedAt": "2020-06-24T00:14:49Z", "channelId": "UCSWwb_YyNB8vuC1VDcfPPaQ", "title": "Annie Jones: Shy 12-Year-Old Aussie Girl SLAYS &quot;Dance Monkey&quot; On @America&#39;s Got Talent", "description": "America's Got Talent | Season 15 | Auditions Week 5 #AGT #AmericasGotTalent #TalentRecap For more HD videos, news, analysis and recaps of America's Got ...", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/NIOIKdylRcM/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/NIOIKdylRcM/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/NIOIKdylRcM/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Talent Recap", "liveBroadcastContent": "none", "publishTime": "2020-06-24T00:14:49Z" }, "statisticsInfo": { "stats": { "viewCount": "870994", "likeCount": "22670", "dislikeCount": "425", "favoriteCount": "0", "commentCount": "1009" }, "contentDetails": { "duration": "PT4M56S", "dimension": "2d", "definition": "hd", "caption": "false", "licensedContent": false, "contentRating": {}, "projection": "rectangular" } } };
    const statisticsInfo = { "stats": { "viewCount": "870994", "likeCount": "22670", "dislikeCount": "425", "favoriteCount": "0", "commentCount": "1009" }, "contentDetails": { "duration": "PT4M56S", "dimension": "2d", "definition": "hd", "caption": "false", "licensedContent": false, "contentRating": {}, "projection": "rectangular" } };
    const videoPageFlag = true;
    
    const wrapper = shallowMount(VideoMediaItem, {
      propsData: {
        item,
        statisticsInfo: statisticsInfo,
        videoPageFlag
      }
    });

    expect(wrapper.vm.item).toMatchObject(item);
    expect(wrapper.vm.statisticsInfo).toMatchObject(statisticsInfo);
    expect(wrapper.vm.videoPageFlag).toBe(true);

    expect(wrapper.findAll('img').at(0).attributes("src")).toMatch(item.snippet.thumbnails.medium.url);
    expect(wrapper.findAll('span').at(0).text()).toMatch(getDuration(statisticsInfo.contentDetails.duration));
    expect(wrapper.findAll('p').at(0).text()).toMatch(item.snippet.title.replace(/&([^;]+);/g, (m, c) => map[c]));
    expect(wrapper.findAll('p').at(1).text()).toMatch(item.snippet.channelTitle);
    expect(wrapper.findAll('p').at(2).text()).toMatch(Number(statisticsInfo.stats.viewCount).toLocaleString());
    expect(wrapper.findAll('p').at(3).text()).toMatch(getHowOld(item.snippet.publishTime).toLocaleString());
    expect(wrapper.findAll('p').at(4).text()).toMatch(item.snippet.description.replace(/&([^;]+);/g, (m, c) => map[c]));

  });
});
