<template>
  <div class="container mx-auto">
    <div v-if="$fetchState.pending" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block block-space">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="card in cards" :key="card.id">
          <le-card :card="card"/>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
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
  async fetch() {
    const util = require('util')
    const products = await this.$shopify.product.fetchAll();
      console.log('febaaaa detail:');
      console.log(products);
    for (let i=0; i<products.length; i++) {
      let product = products[i];
      let productID = product.id;
      let heading = product.title;
      // let content = product.descriptionHtml;
      let content = '';
      let cover = product.images[0].src;
      let images = product.images;
      let link = {
        title: "See more",
        uri: 'product/' + productID
      };
      let isAvailable = product.availableForSale;

      if(isAvailable) {
        this.cards[i] = {
          props: false,
          heading: heading,
          content: content,
          link: link,
          cover: cover,
          images: images
        }
      }
    }
  },
  data: () => (
    {
      cards: [],
    }
  ),
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>