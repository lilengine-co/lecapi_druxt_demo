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
    if(isAvailable && (heading != 'Home page 1')) {
      cards.push({
        id: itemID,
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
  loadingSearch: true,
  checkoutId: '',
  checkout: {},
  totalCartItems: 0,
  searchResults: [],
});

export const actions = {
  async fetchAllCollections ({ commit }) {
    commit('setLoading', true);
    this.$shopify.collection.fetchAllWithProducts().then(collections => {
      commit('setCollections', collections);
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
    // Create custom document graphsql.
    const productDetailDocument = this.$shopify.graphQLClient.document();
    const spreads = {};
    const variables = {};
    variables.__defaultOperation__ = {};
    variables.__defaultOperation__.id = this.$shopify.graphQLClient.variable("id", "ID!");
    spreads.VariantFragment = productDetailDocument.defineFragment("VariantFragment", "ProductVariant", function (root) {
        root.add("id");
        root.add("title");
        root.add("price");
        root.add("priceV2", function (priceV2) {
            priceV2.add("amount");
            priceV2.add("currencyCode");
        });
        root.add("presentmentPrices", {
            args: {
                first: 20
            }
        }, function (presentmentPrices) {
            presentmentPrices.add("pageInfo", function (pageInfo) {
                pageInfo.add("hasNextPage");
                pageInfo.add("hasPreviousPage");
            });
            presentmentPrices.add("edges", function (edges) {
                edges.add("node", function (node) {
                    node.add("price", function (price) {
                        price.add("amount");
                        price.add("currencyCode");
                    });
                    node.add("compareAtPrice", function (compareAtPrice) {
                        compareAtPrice.add("amount");
                        compareAtPrice.add("currencyCode");
                    });
                });
            });
        });
        root.add("weight");
        root.add("availableForSale", {
            alias: "available"
        });
        root.add("sku");
        root.add("compareAtPrice");
        root.add("compareAtPriceV2", function (compareAtPriceV2) {
            compareAtPriceV2.add("amount");
            compareAtPriceV2.add("currencyCode");
        });
        root.add("image", function (image) {
            image.add("id");
            image.add("originalSrc", {
                alias: "src"
            });
            image.add("altText");
        });
        root.add("selectedOptions", function (selectedOptions) {
            selectedOptions.add("name");
            selectedOptions.add("value");
        });
        root.add("unitPrice", function (unitPrice) {
            unitPrice.add("amount");
            unitPrice.add("currencyCode");
        });
        root.add("unitPriceMeasurement", function (unitPriceMeasurement) {
            unitPriceMeasurement.add("measuredType");
            unitPriceMeasurement.add("quantityUnit");
            unitPriceMeasurement.add("quantityValue");
            unitPriceMeasurement.add("referenceUnit");
            unitPriceMeasurement.add("referenceValue");
        });
    });
    spreads.ProductFragment = productDetailDocument.defineFragment("ProductFragment", "Product", function (root) {
        root.add("id");
        root.add("availableForSale");
        root.add("createdAt");
        root.add("updatedAt");
        root.add("descriptionHtml");
        root.add("description");
        root.add("handle");
        root.add("productType");
        root.add("title");
        root.add("vendor");
        root.add("publishedAt");
        root.add("onlineStoreUrl");
        root.add("tags");
        root.add("options", function (options) {
            options.add("name");
            options.add("values");
        });
        root.add("images", {
            args: {
                first: 250
            }
        }, function (images) {
            images.add("pageInfo", function (pageInfo) {
                pageInfo.add("hasNextPage");
                pageInfo.add("hasPreviousPage");
            });
            images.add("edges", function (edges) {
                edges.add("cursor");
                edges.add("node", function (node) {
                    node.add("id");
                    node.add("src");
                    node.add("altText");
                });
            });
        });
        root.add("variants", {
            args: {
                first: 250
            }
        }, function (variants) {
            variants.add("pageInfo", function (pageInfo) {
                pageInfo.add("hasNextPage");
                pageInfo.add("hasPreviousPage");
            });
            variants.add("edges", function (edges) {
                edges.add("cursor");
                edges.add("node", function (node) {
                    node.addFragment(spreads.VariantFragment);
                });
            });
        });
    });
    productDetailDocument.addQuery([variables.__defaultOperation__.id], function (root) {
        root.add("node", {
            args: {
                id: variables.__defaultOperation__.id
            }
        }, function (node) {
            node.addFragment(spreads.ProductFragment);
        });
    });
    // Call the send method with the custom products query
    this.$shopify.graphQLClient.send(productDetailDocument, {id: id}).then(({model, data}) => {
        // Do something with the products
        let product = model.node;
        productDetail = {
          id: product.id,
          cover: product.images[0].src,
          images: product.images,
          title: product.title,
          summary: product.descriptionHtml,
          price: product.variants[0].price,
          variantId: product.variants[0].id,
          tags: product.tags,
          quantity: 20
        };
        console.log(productDetail);
        commit('setProduct', productDetail);
        commit('setLoading', false);
    });
  },
  async searchProduct({ commit }, keyword) {
    if(keyword != '') {
      commit('setLoadingSearch', true);
      const productQuery = this.$shopify.graphQLClient.query((root) => {
        root.addConnection('products', { args: { first: 10, query: "title: " + keyword + ""}}, (product) => {
          product.add('title');
          product.add('tags');
          product.add('availableForSale');
          product.add('createdAt');
          product.add('updatedAt');
          product.add('descriptionHtml');
          product.add('handle');
          product.add('productType');
          product.add('vendor');
          product.add('publishedAt');
          product.add('onlineStoreUrl');
          product.addConnection('images', { args: { first: 250 } }, (images) => {
            images.add('src');
            images.add('id');
            images.add('altText');
          })
          product.addConnection('variants', { args: { first: 250 } }, (variants) => {
            variants.add('id');
            variants.add('product');
            variants.add('title');
            variants.add('price');
            variants.add('image', (image) => {
              image.add('src');
              image.add('id');
              image.add('altText');
            })
            variants.add('selectedOptions', (opts) => {
              opts.add('name')
              opts.add('value')
            })
          })
        })
      });
      // Call the send method with the custom product query
      const result = await this.$shopify.graphQLClient.send(productQuery);
      // Do something with the product
      commit('setSearchResults', result.model.products);
      commit('setLoadingSearch', false);
    }
    else {
      commit('setSearchResults', '');
    }
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
  async updateCart({ commit, getters }, { itemId, quantity }) {
    const lineItemsToUpdate = [{ id: itemId, quantity: quantity }];
    this.$shopify.checkout.updateLineItems(getters.checkoutId, lineItemsToUpdate).then(checkout => {
      commit('setCheckout', checkout);
    });
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
  loadingSearch: (state) => state.loadingSearch,
  searchResults: (state) => state.searchResults,
}

export const mutations = {
  setCollections: (state, collections) => (state.collections = collections),
  setCollection: (state, collection) => (state.collection = collection),
  setCartItems: (state, checkout) => (state.cartItems = checkout),
  setProducts: (state, products) => (state.products = products),
  setProduct: (state, product) => (state.product = product),
  setLoading: (state, status) => (state.loading = status),
  setLoadingSearch: (state, status) => (state.loadingSearch = status),
  setCheckoutId: (state, checkoutId) => (state.checkoutId = checkoutId),
  setCheckout: (state, checkout) => {
    let totalCartItems = checkout.lineItems.length;
    state.totalCartItems = totalCartItems;
    state.checkout = checkout;
  },
  setSearchResults: (state, searchResults) => (state.searchResults = searchResults)
}