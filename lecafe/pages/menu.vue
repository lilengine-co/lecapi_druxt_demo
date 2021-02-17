<template>
  <div class="container mx-auto">
    <le-goback />
    <le-loading v-if="loading" />
    <div v-else>
      <div class="block-space">
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
    // let homeCollectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNDA5MzU0MzU4Nw==';
    this.fetchAllCollections();
    // let defaultCollectionID = this.collections[0].id;
    // this.fetchCollection(homeCollectionId);
    // this.fetchAllProducts();
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>