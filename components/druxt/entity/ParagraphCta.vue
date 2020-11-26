<template>
  <div>
    <div class="cta-block bg-center bg-cover relative" v-bind:style="'background-image:url(' + cta.image + ')'">
      <div class="relative z-10 block-space text-white bg-gradient-to-t from-black">
        <div class="container mx-auto">
          <h2 class="cta__title block__title">{{ cta.title }}</h2>
          <div class="cta__text" v-html="cta.text"></div>
          <NuxtLink v-if="cta.link" class="button bg-blue-900 inline-block mt-6 hover:bg-red-600 card__link" :to="cta.link.uri">
            {{ cta.link.label }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'
import { mapActions } from 'vuex'

export default {
  mixins: [DruxtEntityMixin],

  async fetch() {
    const util = require('util')
    let title = this.fields._heading.data
    const text = this.fields._markup.data.value
    let linkUri = this.fields._link.data.uri
    let linkLabel = title
    const mediaObject = this.fields._media
    let imageUrl = ''

    // Get data from link field
    if(linkUri.includes("entity:")) {
      const linkEntity = linkUri.replace(/entity:/gi,'')
      const route = await this.getRoute(linkEntity)

      let nodeId = route.props.uuid;
      let nodeType = route.props.type;
      
      const entity = await this.getEntity({ id: nodeId, type: nodeType })
      // Get title from node if there is no value in title field
      title = title ? title : entity.attributes.title
      linkUri = entity.attributes.path.alias
      linkLabel = entity.attributes.title
    }

    // Get image from media field
    if(mediaObject) {
      const media = mediaObject.data.data
      const imageObj = await this.getResource(media)
      const image = await this.getResource(
        imageObj.relationships.media_image.data
      )

      imageUrl = image.attributes.uri.url
      // console.log(util.inspect(image, false, null, true))
    }
    
    this.cta = {
      title: title,
      text: text,
      link: {
        uri: linkUri,
        label: linkLabel
      },
      image: imageUrl
    }
  },

  data: () => ({
    cta: false
  }),

  methods: {
    ...mapActions({
      getEntity: 'druxtRouter/getEntity',
      getRoute: 'druxtRouter/getRoute',
      getResource: 'druxtRouter/getEntity',
    })
  }
}
</script>
<style lang="scss" scoped>
</style>