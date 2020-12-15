import Vue from 'vue'
// import { mapActions } from 'vuex'
Vue.mixin({
  methods:{
    mySpecialMethod(value){
      console.log(value)
    },
    // Get the absolute image with image style
    leGetImage(image, style = 'large') {
      let imageStyles = image.attributes.image_style_uri
      for(let item in imageStyles) {
        let imageStyle = imageStyles[item]
        if(style in imageStyle) {
          return imageStyle[style]
        }
      }
    }
  }
})