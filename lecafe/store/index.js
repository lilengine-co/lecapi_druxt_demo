export const state = () => ({
  products: [],
  product: {},
  checkoutId: '',
  checkout: {},
  totalCartItems: 0,
});

export const actions = {
  async fetchAllProducts ({ commit }) {
    let productItems = [];
    const products = await this.$shopify.product.fetchAll();
    for (let i=0; i<products.length; i++) {
      let product = products[i];
      let productID = product.id;
      let heading = product.title;
      // let content = product.descriptionHtml;
      let price = product.variants[0].price;

      let cover = product.images[0].src;
      let images = product.images;
      let link = {
        title: "See more",
        uri: 'product/' + productID
      };
      let isAvailable = product.availableForSale;

      if(isAvailable) {
        productItems[i] = {
          props: false,
          heading: heading,
          content: '$' + price,
          link: link,
          cover: cover,
          images: images
        }
      }
    }
    commit('setProducts', productItems);
  },
  async fetchProduct ({ commit }, id) {
    let productDetail = {};
    this.$shopify.product.fetch(id).then(product => {
      productDetail = {
        id: product.id,
        cover: product.images[0].src,
        images: product.images,
        title: product.title,
        summary: product.descriptionHtml,
        price: product.variants[0].price,
        variantId: product.variants[0].id,
        quantity: 20
      };
      commit('setProduct', productDetail);
    });
  },
  async getCheckoutId({ commit }) {
    if(process.browser){
      let checkoutId = '';
      // Set the checkoutID then create a new checkout
      if (localStorage.getItem("checkoutId")) {
        checkoutId = localStorage.getItem("checkoutId");
      }
      else {
        this.$shopify.checkout.create().then(checkout => {
          // Do something with the checkout
          localStorage.setItem("checkoutId", checkout.id);
          checkoutId = checkout.id;
        });
      };
      console.log(checkoutId);
      commit('setCheckoutId', checkoutId);
    }
  },
  async fetchCheckout({ commit }, checkoutId) {
    this.$shopify.checkout.fetch(checkoutId).then(checkout => {
      console.log(checkout);
      let totalCartItemValue = checkout.lineItems.length;
      commit('setCheckout', checkout);
      commit('settotalCartItems', totalCartItemValue);
    });
  },
  async removeFromCart({ commit }, {checkoutId, itemId}) {
    if (confirm('Do you want to remote this item?')) {
      console.log(checkoutId);
      console.log(itemId);
      this.$shopify.checkout.removeLineItems(checkoutId, itemId).then(checkout => {
        let totalCartItemValue = checkout.lineItems.length;
        commit('setCheckout', checkout);
        commit('settotalCartItems', totalCartItemValue);
      });
    }
  },
  async addToCart({ commit }, {checkoutId, variantId, quantity}) {
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: quantity == ''? 1 : quantity,
      },
    ];

    this.$shopify.checkout.addLineItems(checkoutId, lineItemsToAdd).then(checkout => {
      alert("Added to your card");
      let totalCartItemValue = checkout.lineItems.length;
      commit('setCheckout', checkout);
      commit('settotalCartItems', totalCartItemValue);
    });
  }
}

export const getters = {
  products: (state) => state.products,
  product: (state) => state.product,
  checkoutId: (state) => state.checkoutId,
  checkout: (state) => state.checkout,
  totalCartItems: (state) => state.totalCartItems,
}

export const mutations = {
  setCartItems: (state, checkout) => (state.cartItems = checkout),
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  setCheckoutId: (state, checkoutId) => (state.checkoutId = checkoutId),
  setCheckout: (state, checkout) => (state.checkout = checkout),
  settotalCartItems: (state, totalCartItems) => (state.totalCartItems = totalCartItems),
}