<template>
  <div class="w-full">
    <button
      class="text-black inline-flex p-3 hover:bg-gray-200 rounded lg:hidden ml-auto outline-none nav-toggler"
      data-target="#navigation"
      @click="toggeMenu"
      :class="{ 'bg-gray-200': isVisible }"
    >
      <font-awesome-icon :icon="['fas', 'bars']" />
    </button>
    <div
      class="top-navbar absolute bg-white py-2 w-48 md:w-64 shadow lg:shadow-none mt-1 lg:mt-0 lg:w-auto right-0 top-full lg:static lg:w-full lg:inline-flex lg:flex-grow z-10"
      :class="{ 'hidden': !isVisible }"
      id="navigation"
    >
      <ul
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
      >
        <li v-for="(item, key) of items" :key="key" class="lg:inline-flex lg:w-auto w-full">
          <span @click="gotoLink(converLink(item.entity.attributes.link.uri))" class="block cursor-pointer w-full px-3 md:px-9 py-2 rounded text-gray-900 items-center justify-center hover:bg-gray-100 hover:text-black uppercase">
            <span>
              {{ item.entity.attributes.title }}
            </span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  data: () => ({
    isVisible: false
  }),
  props: ['items'],
  computed: mapGetters([
    'collections'
  ]),
  methods: {
    ...mapActions([
      'fetchAllCollections'
    ]),
    toggeMenu: function() {
      this.isVisible = !this.isVisible
    },
    gotoLink: function(link) {
      this.$router.push(link);
      this.isVisible = false;
    },
    converLink: function(link) {
      if(link.includes("internal:")) {
        link = link.replace(/internal:/gi,'')
      }
      return link
    }
  },
  async mounted () {
    this.fetchAllCollections();
  }
}
</script>