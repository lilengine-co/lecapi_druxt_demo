<template>
  <div class="card-block">
    <h2 class="block__title text-center mb-6">{{ collection.title }}</h2>
    <ul v-if="totalItems" class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <li class="card__item" v-for="itemIndex in itemsToShow" :key="itemIndex.id">
        <le-card v-if="!!collection.products[itemIndex - 1]" :card="collection.products[itemIndex - 1]"/>
      </li>
    </ul>
    <div v-if="itemsToShow < totalItems" class="p-4 text-center">
      <button class="button" @click="itemsToShow += 3">show more</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['collection'],
  data: () => (
    {
      totalItems: 0,
      itemsToShow: 3,
    }
  ),
  mounted() {
    this.totalItems = this.collection.products.length;
    this.itemsToShow = 3;
  }
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>