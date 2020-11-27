import Vue from 'vue'
// import { mapActions } from 'vuex'
Vue.mixin({
  methods:{
    mySpecialMethod(value){
      console.log(value)
    },
    // leGetImage(imageData) {
    //   async fetch() {
    //     const imageObj = await this.getResource(imageData)
    //     const image = await this.getResource(
    //       imageObj.relationships.media_image.data
    //     )
    //     return process.env.BASE_URL + image.attributes.uri.url
    //   }
    // },
    // ...mapActions({
    //   getEntity: 'druxtRouter/getEntity',
    //   getRoute: 'druxtRouter/getRoute',
    //   getResource: 'druxtRouter/getEntity',
    // })
  }
})