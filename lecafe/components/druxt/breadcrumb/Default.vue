<template>
  <div class="container mx-auto">
    <nav class="text-black font-bold my-8" aria-label="Breadcrumb">
      <ol class="list-none p-0 inline-flex">
        <li v-for="item in items" :key="item.id" class="flex items-center">
          <span v-if="item.to" class="flex items-center">
            <nuxt-link  class="text-gray-900 hover:text-gray-700" :to="converLink(item.to)">
              {{ item.text }}
            </nuxt-link>
            <svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
          </span>
          <span v-else class="text-gray-600">
            {{ item.text }}
          </span>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
import { DruxtBreadcrumbMixin } from 'druxt-breadcrumb'

export default {
  mixins: [DruxtBreadcrumbMixin],

  computed: {
    items() {
      return this.crumbs
    }
  },
  methods: {
    converLink: function(link) {
      if(link.includes("internal:")) {
        link = link.replace(/internal:/gi,'')
      }
      return link
    }
  }
}
</script>