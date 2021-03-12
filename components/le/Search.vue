<template>
  <div>
    <div class="flex justify-center">
      <div class="relative ">
        <div @click="togglePopup()" class="flex flex-row cursor-pointer truncate p-4 rounded hover:bg-gray-100">
          <div class="flex flex-row-reverse w-full">
            <div slot="icon" class="relative">
              <img src="~assets/icons/icon-search.svg?data" class="h-4 text-dark" />
            </div>
          </div>
        </div>
        <div class="absolute right-0 rounded-b z-10 bg-white" :class="{ hidden: !showPopup }">
          <div class="shadow-xl w-64"> 
            <!-- component -->
            <div class="">
              <input type="search" v-model="keyword" class="w-full bg-purple-white rounded border border-gray-200 p-2" placeholder="Search by name..." @input="searchProduct(keyword)">
            </div>
            <div v-if="searchResults.length" class="">
              <le-loadingicon v-if="loadingSearch" />
              <div v-else @click="goProduct(item.id)" class="py-2 px-4 border-b border-gray-50 hover:bg-gray-100 cursor-pointer" v-for="item in searchResults" :key="item.id">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"

export default {
  data() {
    return {
      showPopup: false,
      keyword: ''
    }
  },
  computed: {
    ...mapGetters(['searchResults', 'loadingSearch']),
  },
  methods: {
    ...mapActions(['searchProduct']),
    togglePopup() {
      this.showPopup = !this.showPopup;
    },
    goProduct(id) {
      this.showPopup = false;
      this.keyword = '';
      this.searchResults = [];
      this.$router.push('/product/' + id);
    }
  }
}
</script>

<style>

</style>