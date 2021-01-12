<template>
  <div class="container mx-auto">
    <NuxtLink class="text-current hover:text-yellow-700 text-sm" to="/products">Back</NuxtLink>
    <div v-if="$fetchState.pending" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block block-space clear-both">
      <div v-if="product.cover" class="artilce__hero text-center lg:float-right lg:max-w-xl lg:pl-16 pb-8">
        <img :src="product.cover" :alt="product.title"/>
      </div>
      <div class="artilce__body">
        <div class="artilce__heading">
          <h1 v-if="product.title" class="page-title text-4xl mb-2">{{ product.title }}</h1>
          <div v-if="product.summary" class="page__deck text-xl" v-html="product.summary"></div>
        </div>
        <div class="artilce__content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async fetch() {
    let productId = this.$route.params.id;
    this.$shopify.product.fetch(productId).then(product => {
      console.log(product);
      this.product = {
        cover: product.images[0].src,
        title: product.title,
        summary: product.descriptionHtml,
      }
    });
  },
  data: () => (
    {
      product: {},
    }
  )
}
</script>
<style lang="scss">

</style>