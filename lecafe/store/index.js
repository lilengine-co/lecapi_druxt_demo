function convertToCards(items, type) {
  let cards = [];
  for (let i=0; i<items.length; i++) {
    let item = items[i];
    let itemID = item.id;
    let heading = item.title;
    let price = item.variants ? '$' + item.variants[0].price : '';
    let cover = item.image ? item.image.src : item.images[0].src;
    let images = item.images ? item.images : [];
    let link = {
      title: "See more",
      uri: '/' + type + '/' + itemID
    };

    let isAvailable = (type == 'product') ? item.availableForSale : true;
    if(isAvailable && (heading != 'Home page')) {
      cards.push({
        props: false,
        heading: heading,
        content: price,
        link: link,
        cover: cover,
        images: images
      })
    }
  }
  return cards;
}

export const state = () => ({
  collections: [],
  collection: {},
  products: [],
  product: {},
  loading: true,
  checkoutId: '',
  checkout: {},
  totalCartItems: 0,
});

export const actions = {
  async fetchAllCollections ({ commit }) {
    this.$shopify.collection.fetchAllWithProducts().then(collections => {
      commit('setLoading', true);
      const collectionItems = convertToCards(collections, 'collection');
      commit('setCollections', collectionItems);
      commit('setLoading', false);
    });
  },
  async fetchCollection ({ commit }, collectionId) {
    commit('setLoading', true);
    this.$shopify.collection.fetchWithProducts(collectionId).then(collection => {
      // Do something with the collection
      let collectionDetail = {
        id: collection.id,
        title: collection.title,
        products: convertToCards(collection.products, 'product')
      };
      commit('setCollection', collectionDetail);
      commit('setLoading', false);
    });    
  },
  async fetchAllProducts ({ commit }) {
    commit('setLoading', true);
    const products = await this.$shopify.product.fetchAll();
    const productItems = convertToCards(products, 'product');
    commit('setProducts', productItems);
    commit('setLoading', false);
  },
  async fetchProduct ({ commit }, id) {
    commit('setLoading', true);
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
      
      console.log("product:");
      console.log(product);
      commit('setProduct', productDetail);
      commit('setLoading', false);
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
      commit('setCheckoutId', checkoutId);
    }
  },
  async fetchCheckout({ commit }, checkoutId) {
    commit('setLoading', true);
    this.$shopify.checkout.fetch(checkoutId).then(checkout => {
      commit('setCheckout', checkout);
      commit('setLoading', false);
    });
  },
  async removeFromCart({ commit, getters }, itemId) {
    if (confirm('Do you want to remote this item?')) {
      this.$shopify.checkout.removeLineItems(getters.checkoutId, itemId).then(checkout => {
        commit('setCheckout', checkout);
      });
    }
  },
  async addToCart({ commit, getters }, { variantId, quantity }) {
    const lineItemsToAdd = [
      {
        variantId: variantId,
        quantity: quantity == ''? 1 : quantity,
      },
    ];
    this.$shopify.checkout.addLineItems(getters.checkoutId, lineItemsToAdd).then(checkout => {
      alert("Added to your card");
      commit('setCheckout', checkout);
    });
  }
}

export const getters = {
  collections: (state) => state.collections,
  collection: (state) => state.collection,
  products: (state) => state.products,
  product: (state) => state.product,
  checkoutId: (state) => state.checkoutId,
  checkout: (state) => state.checkout,
  totalCartItems: (state) => state.totalCartItems,
  loading: (state) => state.loading,
}

export const mutations = {
  setCollections: (state, collections) => (state.collections = collections),
  setCollection: (state, collection) => (state.collection = collection),
  setCartItems: (state, checkout) => (state.cartItems = checkout),
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  setLoading: (state, status) => (state.loading = status),
  setCheckoutId: (state, checkoutId) => (state.checkoutId = checkoutId),
  setCheckout: (state, checkout) => {
    let totalCartItems = checkout.lineItems.length;
    state.totalCartItems = totalCartItems;
    state.checkout = checkout;
  }
}