<template>
  <div class="container mx-auto">
    <le-goback />
    <le-loading v-if="loading" />
    <div v-else>
      <div class="block-space">
        <div class="grid grid-cols-2 place-items-stretch mb-10 lg:mb-24">
          <h1 class="text-3xl md:text-6xl lg:text-8xl">Menu</h1>
          <div class="flex items-center justify-end">
            <img src="~assets/icons/icon-phone.svg?data" class="w-6 lg:w-8 h-auto" />
            <a href="tel:0429541000" class="text-xl md:text-2xl lg:text-4xl whitespace-nowrap">0429 541 000</a>
          </div>
        </div>
        <ul class="grid gap-8 lg:gap-32 grid-cols-1 lg:grid-cols-2">
          <li class="" v-for="collection in collections" :key="collection.id">
            <le-collection :collection="collection" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  head() {
    return {
      title: "Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  methods: {
    // Get all collections to display collections block, and get home collection to displaying the home products
    ...mapActions([
      'fetchAllCollections',
    ])
  },
  computed: mapGetters([
    'loading',
    'collections',
  ]),
  async mounted () {
    this.fetchAllCollections();
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>