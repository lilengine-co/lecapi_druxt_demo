import Vue from 'vue'
// import { mapActions } from 'vuex'
Vue.mixin({
  methods:{
    mySpecialMethod(value){
      console.log(value)
    },
    // Get the absolute image with image style
    leGetImage(image, style = 'original') {
      let imageUrl = image.attributes.image_style_uri[style]
      return imageUrl
    }
  }
})