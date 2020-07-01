<template>
  <div class="sub-header">
    <div class="sub-header__filter-header">
      <div class="sub-header__filter-header__text">
        <p>About 13,0000 Results</p>
      </div>
      <div @click="filter = !filter" class="sub-header__filter-header__filter">
        <img class="sub-header__filter-header__filter__img" src="../../assets/filter-icon.png" alt="filter">
        <div class="sub-header__filter-header__filter__text">
          <p>Filter</p>
        </div>
      </div>
    </div>
    <div class="sub-header__filter-body" v-bind:class="{'sub-header__filter-body__active': filter}">
      <div class="sub-header__filter-body__filter-options">
        <p class="sub-header__filter-body__filter-options__header">UPLOAD DATE</p>
        <ul>
          <li v-bind:class="{'active': time === 'hour'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="publishedAfterSearch('hour')">Last hour</span>
            <span @click="publishedAfterSearch('')" class="span active__span">x</span>
          </li>
          <li v-bind:class="{'active': time === 'today'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="publishedAfterSearch('today')">Today</span>
            <span @click="publishedAfterSearch('')" class="span active__span">x</span>
          </li>
          <li v-bind:class="{'active': time === 'week'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="publishedAfterSearch('week')">This week</span>
            <span @click="publishedAfterSearch('')" class="span active__span">x</span>
          </li>
          <li v-bind:class="{'active': time === 'month'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="publishedAfterSearch('month')">This month</span>
            <span @click="publishedAfterSearch('')" class="span active__span">x</span>
          </li>
        </ul>
      </div>
      <div class="sub-header__filter-body__filter-options">
        <p class="sub-header__filter-body__filter-options__header">TYPE</p>
        <ul>
          <li v-bind:class="{'active': type === 'video'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="typeSearch('video')">Video</span>
            <span @click="typeSearch('')" class="span active__span">x</span>
          </li>
          <li v-bind:class="{'active': type === 'channel'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="typeSearch('channel')">Channel</span>
            <span @click="typeSearch('')" class="span active__span">x</span>
          </li>
          <li v-bind:class="{'active': type === 'playlist'}"  class="sub-header__filter-body__filter-options__li">
            <span @click="typeSearch('playlist')">Playlist</span>
            <span @click="typeSearch('')" class="span active__span">x</span>
          </li>
        </ul>
      </div>
      <div class="sub-header__filter-body__filter-options">
        <p class="sub-header__filter-body__filter-options__header">SORT BY</p>
        <ul>
          <li @click="orderBy('relevance')" v-bind:class="{'active': order === 'relevance'}"  class="sub-header__filter-body__filter-options__li">
            Relevance
          </li>
          <li @click="orderBy('date')" v-bind:class="{'active': order === 'date'}"  class="sub-header__filter-body__filter-options__li">
            Upload date
          </li>
          <li @click="orderBy('viewCount')" v-bind:class="{'active': order === 'viewCount'}"  class="sub-header__filter-body__filter-options__li">
            View count
          </li>
          <li @click="orderBy('rating')" v-bind:class="{'active': order === 'rating'}"  class="sub-header__filter-body__filter-options__li">
            Rating
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { bus } from "../../main";

export default {
  name: 'MobileSubHeader',
  data: function() {
    return {
      publishedAfter: '',
      time: '',
      type: '',
      order: 'relevance',
      filter: false,
    };
  },
  methods: {
    typeSearch(type) {
      if (type === this.type) return;
      this.type = type;
      this.$router.push({
        query: Object.assign({}, this.$route.query, { type })
      });
      bus.$emit('searchBy', { type: this.type });
    },
    orderBy(order) {
      if (order === this.order) return;
      this.order = order;
      this.$router.push({
        query: Object.assign({}, this.$route.query, { order })
      });
      bus.$emit('searchBy', { order: this.order });
    },
    publishDateCalculate(time) {
      const date = new Date();
      if (time === 'today') {
        date.setDate(date.getDate() - 1);
        this.publishedAfter = date.toISOString();
      } else if (time === 'week') {
        date.setDate(date.getDate() - 7);
        this.publishedAfter = date.toISOString();
      } else if (time === 'month') {
        date.setDate(date.getDate() - 30);
        this.publishedAfter = date.toISOString();
      } else if (time === 'hour') {
        const splittedDate = date.toISOString().split("T");
        const splittedTime = splittedDate[1].split(":");
        splittedTime[0] = +splittedTime[0] - 1 + "";
        splittedDate[1] = splittedTime.join(":");
        this.publishedAfter = splittedDate.join("T");
      } else {
        this.publishedAfter = '';
      }
    },
    publishedAfterSearch(time) {
      if (time === this.time) return;
      this.time = time;
      this.publishDateCalculate(time);
      this.$router.push({
        query: Object.assign({}, this.$route.query, {
          publishedAfter: this.publishedAfter,
          time
        })
      });
      bus.$emit('searchBy', {
        publishedAfter: this.publishedAfter,
        time
      });
    }
  },
  created() {
    this.$route.query.type
      ? (this.type = this.$route.query.type)
      : (this.type = '');
    this.$route.query.time
      ? (this.time = this.$route.query.time)
      : (this.time = '');
    this.$route.query.order
      ? (this.order = this.$route.query.order)
      : (this.order = 'relevance');
    this.publishDateCalculate();
  }
};
</script>

<style scoped lang="scss">
.sub-header {
  min-height: 80px;
  margin: 15px 15vw;
  border-bottom: 1px solid #e0e0e0;

  &__filter-header {
    padding-top: 35px;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    &__text {
      display: flex;
      align-self: center;
    }

    &__filter {
      display: flex;
      justify-content: space-between;
      align-content: center;
      cursor: pointer;

      &__img {
        width: 30px;
        margin: 0px 10px;
      }

      &__text {
        display: flex;
        align-self: center;
      }
    }

  }

  &__filter-body {
    display: flex;
    justify-content: space-between;
    align-content: center;
    display: none;
    opacity: 0;

    &__active {
      opacity: 1;
      display: flex;
    }

    &__filter-options {
      width: 100%;
      padding-right: 50px;
      padding-top: 30px;
      padding-bottom: 60px;

      &__header {
        padding-bottom: 15px;
        margin-bottom: 20px;
        border-bottom: 1px solid #eee;
      }

      &__li {
        padding-bottom: 14px;
        color: #000000ad;
        font-size: 16px;
        cursor: pointer;
      }

      .span {
        display: none;
      }

      .active {
        color: #000000;
        font-weight: bold;

        .span {
          display: inline !important;
          padding-left: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      }
      
    }

  }

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