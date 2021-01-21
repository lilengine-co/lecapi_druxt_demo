<template>
  <div class="container mx-auto">
    <div v-if="loading" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <li class="card__item" v-for="item in collections" :key="item.id">
          <le-card :card="item" :featured="true"/>
        </li>
      </ul>
      <h2 class="block__title text-center">Featured products</h2>
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="card in collection.products" :key="card.id">
          <le-card :card="card"/>
        </li>
      </ul>
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
      'fetchAllProducts',
      'fetchAllCollections',
      'fetchCollection'
    ])
  },
  computed: mapGetters([
    'loading',
    'collections',
    'collection'
  ]),
  async mounted () {
    let homeCollectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNDA5MzU0MzU4Nw==';
    this.fetchAllCollections();
    this.fetchCollection(homeCollectionId);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>