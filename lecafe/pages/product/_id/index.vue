<template>
  <div class="container mx-auto">
    <NuxtLink class="text-current hover:text-yellow-700 text-sm" to="/">
      <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
      Back to the list
    </NuxtLink>
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
          <div class="mb-6 flex flex-wrap items-end justify-between ">
            <div class=" p-2 border-b border-gray-300">${{ product.price }}</div>
            <div class="">
              <label class="invisible" for="quantity">Quantity</label>
              <select name="quantity" v-model="quantity" id="quantity" class="border-0 border-b border-gray-300 w-full">
                <option value="" disabled selected>Quantity</option>
                <option v-for="index in product.quantity" :key="index" :value="index">{{ index }}</option>
              </select>
            </div>
            <div class="justify-self-stretch">
              <button @click="addToCart(product.variantId, quantity)" class="button">Add to card</button>
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
  async mounted () {
    let productId = this.$route.params.id;
    this.$shopify.product.fetch(productId).then(product => {
      console.log('product');
      console.log(product);
      this.title = product.title;
      this.product = {
        id: product.id,
        cover: product.images[0].src,
        images: product.images,
        title: product.title,
        summary: product.descriptionHtml,
        price: product.variants[0].price,
        variantId: product.variants[0].id,
        quantity: 20
      },
      this.loading = false;
    });

    if(process.browser){
      // Set the checkoutID then create a new checkout
      if (localStorage.getItem("checkoutID")) {
        this.checkoutID = localStorage.getItem("checkoutID");
      }
      else {
        this.$shopify.checkout.create().then(checkout => {
          // Do something with the checkout
          localStorage.setItem("checkoutID", checkout.id);
          this.checkoutID = checkout.id;
        });
      }
    }
  },
  data: () => (
    {
      product: {},
      title: "Detail product",
      checkoutID: "",
      quantity: '',
      loading: true,
    }
  ),
  methods: {
    addToCart(variantId, quantity) {
      const checkoutId = this.checkoutID;
      const lineItemsToAdd = [
        {
          variantId: variantId,
          quantity: quantity == ''? 1 : quantity,
        },
      ];

      this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then(checkout => {
        // Do something with the updated checkout
        console.log("lineItems added: ");
        console.log(checkout.lineItems); // Array with one additional line item
        // Let the watch know that cart has been updated
        localStorage.setItem("cartUpdated", Math.round(+new Date()/1000));
        alert("Added to your card");
      });
    }
  }
}
</script>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>