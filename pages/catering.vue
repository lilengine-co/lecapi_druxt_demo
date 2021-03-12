<template>
  <div class="container mx-auto">
    <le-goback />
    <div class="block-space">
      <h1 class="text-center text-5xl">{{ pageTitle }}</h1>
    </div>
    <le-loading v-if="loading" />
    <div v-else>
      <le-collection :collection="collection" showTitle="false" />
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  head() {
    return {
      title: this.pageTitle + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  data: () => (
    {
      pageTitle: "Catering",
    }
  ),
  methods: {
    // Get all collections to display collections block, and get home collection to displaying the home products
    ...mapActions([
      'fetchCollection'
    ])
  },
  computed: mapGetters([
    'loading',
    'collection'
  ]),
  async mounted () {
    let collectionId = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzIzNTU5OTAwMzgxMQ==';
    this.fetchCollection(collectionId);
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>