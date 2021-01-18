<template>
  <div class="container mx-auto">
    <div v-if="loading" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="card in products" :key="card.id">
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
    ...mapActions(['fetchAllProducts'])
  },
  computed: mapGetters(['products', 'loading']),
  async mounted () {
    this.fetchAllProducts();
  },
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>