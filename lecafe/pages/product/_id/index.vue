<template>
  <div class="container mx-auto">
    <NuxtLink class="text-current hover:text-yellow-700 text-sm" to="/">
      <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
      Back to the list
    </NuxtLink>
    <div v-if="$fetchState.pending" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block block-space clear-both">
      <div v-if="product.cover" class="artilce__hero text-center relative lg:float-right lg:max-w-xl lg:pl-16 pb-8">
        <img :src="product.cover" :alt="product.title"/>
        <le-lightbox :images="product.images" />
      </div>
      <div class="artilce__body">
        <div class="artilce__heading">
          <h1 v-if="product.title" class="page-title text-4xl mb-2">{{ product.title }}</h1>
          <div v-if="product.summary" class="page__deck" v-html="product.summary"></div>
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
  head() {
    return {
      title: this.title + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  async fetch() {
    let productId = this.$route.params.id;
    this.$shopify.product.fetch(productId).then(product => {
      console.log(product);
      this.title = product.title;
      this.product = {
        cover: product.images[0].src,
        images: product.images,
        title: product.title,
        summary: product.descriptionHtml,
      }
    });
  },
  data: () => (
    {
      product: {},
      title: "Detail product",
    }
  )
}
</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>