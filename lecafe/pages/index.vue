<template>
  <div class="container mx-auto">
    <div class="block-space">
      <ul class=" grid gap-4 lg:gap-4 grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
        <li class="card__item" v-for="item in collections" :key="item.id">
          <div @click="fetchCollection(item.id)" class="card group card--gallery bg-black hover:bg-gray-700 w-full relative p-square overflow-hidden transition duration-150 ease-in-out p-rectangle cursor-pointer">
            <div v-if="item.cover" class="bg-center bg-cover absolute opacity-50 inset-0 transition duration-150 ease-in-out transform scale-100 group-hover:scale-110" v-bind:style="'background-image:url(' + item.cover + ')'">
            </div>
            <div class="card__content absolute inset-0 p-5 xl:p-6 flex items-center justify-center flex-col text-gray-50">
              <h3 class="card__title block__title">{{ item.heading }}</h3>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <le-loading v-if="loading" />
    <div v-else>
      <le-collection :collection="collection" />
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
    // let defaultCollectionID = this.collections[0].id;
    this.fetchCollection(homeCollectionId);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>