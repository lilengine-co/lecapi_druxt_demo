<template>
  <div>
    <!-- component -->
    <div class="p-5">
      <div class="flex justify-center">
        <div class="relative ">
          <div class="flex flex-row cursor-pointer truncate p-2 px-4  rounded">
            <div class="flex flex-row-reverse ml-2 w-full">
              <div @click="toggleCart()" slot="icon" class="relative  hover:bg-gray-100">
                <div class="absolute text-xs rounded-full -mt-1 -mr-2 px-1 font-bold top-0 right-0 bg-red-700 text-white">{{ lineItems.length }}</div>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart w-6 h-6 m-2">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
              </div>
            </div>
          </div>
          <div class="absolute right-0 rounded-b border-t z-10 bg-white" :class="{ hidden: hideCart }">
            <div class="shadow-xl w-64">
              <div v-for="item in lineItems" :key="item.id" class="p-2 pr-4 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100">
                <div class="p-2 w-12 h-10 overflow-hidden relative" >
                  <img :src="item.variant.image.src" class="w-12 object-center" alt="Thumbnail">
                </div>
                <div class="flex-auto text-sm w-32">
                  <div class="font-bold">{{ item.title }}</div>
                  <div class="text-gray-600">Qt: {{ item.quantity }}</div>
                </div>
                <div class="flex flex-col w-18 font-medium items-end">
                    <div @click="removeFromCart(checkoutID, item.id)" class="w-4 h-4 mb-6 hover:bg-red-200 rounded-full cursor-pointer text-red-700">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2 ">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                      </svg>
                    </div>
                    ${{ item.variant.price * item.quantity }}
                </div>
              </div>
              <div class="p-4 justify-center flex">
                <button @click="goCheckout()" class="text-base  undefined  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-700 hover:text-teal-100 bg-teal-100 text-teal-700 border duration-200 ease-in-out border-teal-600 transition">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => (
    {
      checkoutID: "",
      lineItems: [],
      cartUpdated: '',
      hideCart: true,
    }
  ),
  async fetch() {
    if(process.browser){
      // Set the checkoutID then create a new checkout
      if (localStorage.getItem("checkoutID")) {
        this.checkoutID = localStorage.getItem("checkoutID");
        this.cartUpdated = localStorage.getItem("cartUpdated");
      }
      else {
        this.$shopify.checkout.create().then(checkout => {
          // Do something with the checkout
          localStorage.setItem("checkoutID", checkout.id);
          this.checkoutID = checkout.id;
          // Set the cartUpdate timestamp to watch the cart
          localStorage.setItem("cartUpdated", Math.round(+new Date()/1000));
          this.cartUpdated = Math.round(+new Date()/1000);
        });
      }

      // Featching a Checkout
      this.$shopify.checkout.fetch(this.checkoutID).then(checkout => {
        // Do something with the checkout
        console.log("checkout List");
        console.log(checkout);
        // Get the list items
        this.lineItems = checkout.lineItems;
        console.log("lineItems array");
        console.log(this.lineItems);
      }); 
    }
  },
  watch: {
    cartUpdated: function () {
      // Featching a Checkout
      this.$shopify.checkout.fetch(this.checkoutID).then(checkout => {
        // Do something with the checkout
        this.lineItems = checkout.lineItems;
        console.log("lineItems array watching");
        console.log(this.lineItems);
      }); 
    }
  },
  methods: {
    removeFromCart(checkoutId, lineItemIdsToRemove) {
      if (confirm('Do you want to remote this item?')) {
        this.$shopify.checkout.removeLineItems(checkoutId, lineItemIdsToRemove).then(checkout => {
          this.cartUpdated = Math.round(+new Date()/1000);
        });
      }
    },
    toggleCart() {
      this.hideCart = !this.hideCart;
    },
    goCheckout() {
      this.hideCart = true;
      this.$router.push('/checkout');
    },
  }
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>