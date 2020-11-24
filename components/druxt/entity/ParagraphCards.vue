<template>
  <div>
    <div class="card-block px-16">
      <div class="container mx-auto">
        <slot name="subtitle"/>
        <ul class="card__list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <li class="card__item" v-for="card in cards" :key="card.id">
            <div class="card bg-gray-200 rounded-xl p-2 sm:p-5 xl:p-6">
              <h3 class="text-2xl font-semibold mb-6">{{ card.heading }}</h3>
              <div class="markup__html" v-html="card.content"></div>
              <NuxtLink v-if="card.link" class="button bg-blue-900 hover:bg-red-600 subtitle__link" :to="card.link.uri">
                {{ card.link.text }}
              </NuxtLink>
            </div>
          </li>
        </ul>
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
    for (const delta in this.fields.items.data.data) { // get fields.items.data.data... from Detected Vue tool --> data
      const item = this.fields.items.data.data[delta]
      const result = await this.getEntity({ id: item.id, type: item.type })
      let link = false
      let heading = result.attributes._heading
      let content = result.attributes_markup ? result.attributes._markup : ''
      let linkObj = result.attributes._link

      if (linkObj) {
        let linkText = linkObj.text
        let linkUri = linkObj.uri
        let linkLabel = linkText ? linkText : linkUri
        // Todo: Implemented the <front> page
        if(linkUri.includes("entity:")) {
          const linkEntity = linkUri.replace(/entity:/gi,'')
          const route = await this.getRoute(linkEntity)
          const util = require('util')
          console.log(util.inspect(route, false, null, true))

          let nodeId = route.props.uuid;
          let nodeType = route.props.type;
          
          const entity = await this.getEntity({ id: nodeId, type: nodeType })
          linkLabel = linkText ? linkText : entity.attributes.title
          linkUri = entity.attributes.path.alias
        }

        link = {
          uri: linkUri,
          text: linkLabel
        }
      }

      if (!this.cards) this.cards = []
      this.cards[delta] = {
        props: false,
        heading: heading,
        content: content,
        link: link
      }
    }
  },
  data: () => ({
    cards: false
  }),
  methods: {
    ...mapActions({
      getEntity: 'druxtRouter/getEntity',
      getRoute: 'druxtRouter/getRoute'
    })
  }
}
</script>