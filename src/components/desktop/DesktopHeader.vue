<template>
  <header class="header">
    <div class="header__body">
      <img
        @click="$router.push({ name: 'Home' })"
        class="header__body__logo"
        src="../../assets/logo-youtube-desktop.svg"
        alt="logo"
      />
      <div>
        <input
          ref="search"
          @keyup.enter="search"
          v-model="searchInput"
          class="header__body__search_input"
          type="search"
          name
          id
        />
        <button @click="search" class="header__body__search_btn" type="submit">
          <img
            class="header__body__search_btn__search_icon"
            src="../../assets/icon-search-black.svg"
            alt="search"
          />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { bus } from "../../main";

export default {
  name: "DesktopHeader",
  data: function() {
    return {
      searchInput: ""
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "Home" });
      if (this.$route.query.q !== this.searchInput) {
        this.$router.push({
          query: Object.assign({}, this.$route.query, { q: this.searchInput })
        });
        bus.$emit("searchBy", { q: this.searchInput });

        this.title = this.searchInput;
      }
      this.searchInput = "";
      this.searchFlag = false;
    }
  }
};
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 70px;

  &__body {
    height: 70px;
    background-color: white;
    padding: 0px 15vw;
    align-items: center;
    position: fixed;
    width: 70vw;
    z-index: 99999;
    display: flex;
    align-content: center;
    top: 0;

    &__logo {
      height: 30px;
      margin-top: 10px;
      margin-bottom: 10px;
      margin-right: auto;
    }

    &__search_input {
      font-size: 18px;
      margin-left: auto;
      width: 45vw;
      line-height: 1.5;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      border-bottom-right-radius: 0px;
      border-top-right-radius: 0px;
    }

    &__search_btn {
      font-size: 18px;
      margin-right: 15px;
      width: 5vw;
      line-height: 1.5;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      border-bottom-left-radius: 0px;
      border-top-left-radius: 0px;

      &__search_icon {
        width: 20px;
      }
    }
  }
}
</style>
