<template>
  <div class="container mx-auto">
    <le-goback />
    <div v-if="loading" class="w-full h-96 text-center p-14">
      <font-awesome-icon icon="circle-notch" class="text-gray-200 animate-spin" style="font-size: 100px" />
    </div>
    <div v-else class="card-block block-space clear-both">
      <h1 v-if="product.title" class="page-title text-4xl mb-6">{{ product.title }}</h1>
      <div v-if="product.cover" class="artilce__hero text-center relative lg:float-left lg:max-w-xl lg:pr-16 pb-8">
        <img :src="product.cover" :alt="product.title"/>
        <le-lightbox :images="product.images" />
      </div>
      <div class="artilce__body">
        <div class="artilce__heading">
          <div class="mb-6 flex flex-wrap items-end justify-between max-w-lg">
            <div class=" p-2 border-b border-gray-300">${{ product.price }}</div>
            <div class="">
              <label class="invisible" for="quantity">Quantity</label>
              <select name="quantity" v-model="quantity" id="quantity" class="border-0 border-b cursor-pointer border-gray-300 w-full">
                <option value="" disabled selected>Quantity</option>
                <option v-for="index in product.quantity" :key="index" :value="index">{{ index }}</option>
              </select>
            </div>
            <div class="justify-self-stretch">
              <button @click="addToCart({ variantId: product.variantId, quantity: quantity })" class="button">Add to card</button>
            </div>
          </div>
          <div v-if="product.summary" class="page__deck" v-html="product.summary"></div>
        </div>
        <div class="artilce__content">
          <slot name="content" />
        </div>
      </div>
    </div>
    <div class="clear-both"></div>
  </div>
</template>
<script>
import {mapGetters, mapActions} from "vuex"

export default {
  head() {
    return {
      title: this.product.title + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  async mounted () {
    let productId = this.$route.params.id;
    this.fetchProduct(productId);
    this.getCheckoutId();
  },
  data: () => (
    {
      quantity: '',
    }
  ),
  computed: mapGetters(['product', 'checkoutId', 'loading']),
  methods: {
    ...mapActions(['fetchProduct', 'getCheckoutId', 'addToCart']),
  }
}
</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>