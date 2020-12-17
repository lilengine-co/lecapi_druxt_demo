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
      class="top-navbar absolute bg-white w-64 shadow lg:shadow-none mt-1 lg:mt-0 lg:w-auto right-0 top-full lg:static lg:w-full lg:inline-flex lg:flex-grow"
      :class="{ 'hidden': !isVisible }"
      id="navigation"
    >
      <ul
        class="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto"
      >
        <li v-for="(item, key) of items" :key="key" class="lg:inline-flex lg:w-auto w-full">
          <nuxt-link class="block w-full px-3 md:px-9 py-2 rounded text-gray-900 items-center justify-center hover:bg-gray-100 hover:text-black uppercase" :to="converLink(item.entity.attributes.link.uri)">
            <span>
              {{ item.entity.attributes.title }}
            </span></nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false
  }),
  props: ['items'],
  methods: {
    toggeMenu: function() {
      this.isVisible = !this.isVisible
    },
    converLink: function(link) {
      if(link.includes("internal:")) {
        link = link.replace(/internal:/gi,'')
      }
      return link
    }
  }
}
</script>