<template>
    <header class="header">
      <img class="header__logo" src="../assets/logo-youtube.svg" alt="logo">
      <input v-if="searchFlag" @keyup.enter="search" v-model="searchInput" class="header__search_input" type="search" name="" id="">
      <span v-else class="header__title">{{ title }}</span>
      <img @click="showSearch" class="header__search_icon" src="../assets/icon-search.svg" alt="search">
    </header>
</template>

<script>
  export default {
    name: "Header",
    data: function () {
      return {
        searchFlag: false,
        searchInput: '',
        title: 'SpongBob Square Pants'
      }
    },
    methods: {
      showSearch() {
        this.searchInput = this.searchInput.trim();
        if (this.searchFlag && this.searchInput) {
          this.search();
        } else {
          this.searchFlag = !this.searchFlag;
        }
      },
      search() {
        console.log('search started')
      }
    },
    created() {
      
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
