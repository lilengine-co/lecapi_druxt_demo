<template>
  <div>
    <div class="cta-block bg-center bg-cover relative" v-bind:style="'background-image:url(' + cta.image + ')'">
      <div class="relative z-1 block-space text-white bg-gradient-to-t from-black">
        <div class="container mx-auto">
          <h2 class="cta__title block__title">{{ cta.title }}</h2>
          <div class="cta__text" v-html="cta.text"></div>
          <NuxtLink v-if="cta.link" class="button card__link" :to="cta.link.uri">
            Read more
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
    let util = require('util')
    let title = this.fields._heading ? this.fields._heading.data: ''
    let content = this.fields._markup ? this.fields._markup.data.value: false
    let linkUri = this.fields._link ? this.fields._link.data.uri: ''
    let linkLabel = title
    let mediaObject = this.fields._media
    let imageUrl = ''

    // Get data from link field
    if(linkUri.includes("entity:")) {
      const linkEntity = linkUri.replace(/entity:/gi,'')
      const route = await this.getRoute(linkEntity)

      let nodeId = route.props.uuid;
      let nodeType = route.props.type;
      
      const entity = await this.getEntity({ id: nodeId, type: nodeType })
      // console.log(util.inspect(entity, false, null, true))

      if(entity.relationships.hero.data) {
        // Get the image from hero field
        let media = entity.relationships.hero.data
        let mediaObj = await this.getResource(media)
        if(mediaObj.relationships.media_image) {
          const image = await this.getResource(
            mediaObj.relationships.media_image.data
          )

          imageUrl = image.attributes.image_style_uri[0].large
        }
      }

      content = content ? content : entity.attributes.deck ? entity.attributes.deck.value : ''
      linkUri = entity.attributes.path.alias
      linkLabel = entity.attributes.title
      // Get title from node if there is no value in title field
      title = title ? title : linkLabel

    }

    if(mediaObject) {
      const media = mediaObject.data.data
      const imageObj = await this.getResource(media)
      // Get image from media field
      const image = await this.getResource(
        imageObj.relationships.media_image.data
      )
      imageUrl = image.attributes.image_style_uri[0].large
    }
    
    this.cta = {
      title: title,
      text: content,
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
  * {
    box-sizing: border-box;
  }
</style>