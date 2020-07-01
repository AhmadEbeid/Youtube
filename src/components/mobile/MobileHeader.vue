<template>
  <header class="header">
    <img
      @click="goHome"
      class="header__logo"
      src="../../assets/logo-youtube.svg"
      alt="logo"
    />
    <input
      ref="search"
      v-if="searchFlag"
      @keyup.enter="search"
      v-model="searchInput"
      class="header__search_input"
      type="search"
      name
      id
    />
    <span v-else class="header__title">{{ title }}</span>
    <img
      @click="showSearch"
      class="header__search_icon"
      src="../../assets/icon-search.svg"
      alt="search"
    />
  </header>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "MobileHeader",
  data: function() {
    return {
      searchFlag: false,
      searchInput: "",
      title: ""
    };
  },
  methods: {
    goHome() {
      this.$router.push({ name: 'Home' });
      bus.$emit('searchBy', { q: '', type: '', publishedAfter: '', order: 'relevance' });
    },
    showSearch() {
      this.searchInput = this.searchInput.trim();
      if (this.searchFlag && this.searchInput) {
        this.search();
      } else {
        this.searchFlag = !this.searchFlag;

        // set focus to search
        if (this.searchFlag) {
          const timeout = setTimeout(() => {
            this.$refs.search.focus();
            clearTimeout(timeout);
          }, 1);
        }
      }
    },
    search() {
      // this.$router.replace.({ query: {q: this.searchInput} })
      this.$router.push({ name: "Home" });
      if (this.$route.query.q !== this.searchInput) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, { q: this.searchInput })
        });
        bus.$emit('searchBy', { q: this.searchInput });

        this.title = this.searchInput;
      }
      this.searchInput = "";
      this.searchFlag = false;
    }
  },
  created() {
    this.$route.query.q
      ? (this.title = this.$route.query.q)
      : (this.title = "");

    bus.$on("resetHeaderTitle", () => {
      this.title = "Youtube";
    });
  }
};
</script>

<style scoped lang="scss">
.header {
  height: 50px;
  background-color: red;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  align-items: center;

  &__logo {
    height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }

  &__title {
    color: white;
    font-size: 20px;
    height: 22px;
    margin-left: 15px;
    margin-right: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  &__search_input {
    font-size: 18px;
    margin-left: 15px;
    margin-right: 15px;
    width: 100%;
    line-height: 1.5;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
  }

  &__search_icon {
    height: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: auto;
    float: right;
  }
}
</style>
