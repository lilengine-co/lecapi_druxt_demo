<template>
  <div class="container mx-auto">
    <le-goback />
    <le-loadingicon v-if="loading" />
    <div v-else class="card-block">
      <h1 class="text-2xl md:text-4xl text-center mb-8">{{ collection.title }}</h1>
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
      title: this.collection.title + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  async mounted () {
    let collectionId = this.$route.params.id;
    this.fetchCollection(collectionId);
  },
  computed: mapGetters(['collection', 'loading']),
  methods: {
    ...mapActions(['fetchCollection']),
  }
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>