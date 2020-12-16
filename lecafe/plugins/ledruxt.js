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
    },
    // Get the title or alt of an image
    leGetImageAlt(image) {
      let imageMeta = image.relationships.media_image.data.meta
      let imageAlt = imageMeta.title != '' ? imageMeta.title : imageMeta.alt
      return imageAlt
    }
  }
})