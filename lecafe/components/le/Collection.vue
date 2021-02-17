<template>
  <div class="card-block">
    <h2 class="block__title text-2xl md:text-4xl">{{ collection.title }}</h2>
    <ul class="py-4">
      <li v-for="product in collection.products" :key="product.id">
        <NuxtLink class="grid grid-cols-2 py-2 place-items-stretch hover:text-yellow-700 text-xl" :to="'/product/' + product.id">
          <span class="text-left">
            {{ product.title }}
          </span>
          <span class="text-right opacity-70">
            ${{ product.variants[0].price }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['collection']
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>