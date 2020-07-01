<template>
  <div class="sub-header">
    <select @change="typeSearch" v-model="type" class="sub-header__select" name="type">
      <option value>All</option>
      <option value="video">Videos</option>
      <option value="channel">Channels</option>
      <option value="playlist">Playlists</option>
    </select>
    <select
      @change="publishedAfterSearch"
      v-model="time"
      class="sub-header__select"
      name="publishedAfter"
    >
      <option value>Any Time</option>
      <option value="today">Today</option>
      <option value="week">This Week</option>
      <option value="month">This Month</option>
      <option value="year">This Year</option>
    </select>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "MobileSubHeader",
  data: function() {
    return {
      type: "",
      time: "",
      publishedAfter: ""
    };
  },
  methods: {
    typeSearch() {
      this.$router.push({
        query: Object.assign({}, this.$route.query, { type: this.type })
      });
      bus.$emit('searchBy', { type: this.type });
    },
    publishDateCalculate() {
      const date = new Date();
      if (this.time === "today") {
        date.setDate(date.getDate() - 1);
        this.publishedAfter = date.toISOString();
      } else if (this.time === "week") {
        date.setDate(date.getDate() - 7);
        this.publishedAfter = date.toISOString();
      } else if (this.time === "month") {
        date.setDate(date.getDate() - 30);
        this.publishedAfter = date.toISOString();
      } else if (this.time === "year") {
        date.setDate(date.getDate() - 365);
        this.publishedAfter = date.toISOString();
      } else {
        this.publishedAfter = "";
      }
    },
    publishedAfterSearch() {
      this.publishDateCalculate();
      this.$router.push({
        query: Object.assign({}, this.$route.query, {
          publishedAfter: this.publishedAfter,
          time: this.time
        })
      });
      bus.$emit('searchBy', {
        publishedAfter: this.publishedAfter,
        time: this.time
      });
    }
  },
  created() {
    this.$route.query.type
      ? (this.type = this.$route.query.type)
      : (this.type = "");
    this.$route.query.time
      ? (this.time = this.$route.query.time)
      : (this.time = "");
    this.publishDateCalculate();
  }
};
</script>

<style scoped lang="scss">
.sub-header {
  height: 55px;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e0e0e0;

  &__select {
    background-color: #f9f9f9;
    border-radius: 3px;
    border: 2px solid #e0e0e0;
    margin-right: 10px;
    height: 35px;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
}
</style>