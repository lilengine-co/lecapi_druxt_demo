<template>
  <div>
    <div class="card-block px-16">
      <div class="container mx-auto">
        <slot name="subtitle"/>
        <slot name="items"/>
        <ul class="card__list">
          <li class="card__item my-6" v-for="card in cards" :key="card.id">
            <h3 class="text-2xl font-semibold">{{ card.heading }}</h3>
            <div class="markup__html" v-html="card.content"></div>
            <NuxtLink v-if="card.link" class="button bg-blue-900 hover:bg-red-600 subtitle__link" :to="card.link.uri">
              {{ card.link.text }}
            </NuxtLink>
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
      let link = false;
      let heading = result.attributes._heading
      let content = result.attributes_markup ? result.attributes._markup : ''
      let linkObj = result.attributes._link

      if (linkObj) {
        const linkText = linkObj.text;
        console.log('linkText: ' + linkText);
        const linkUri = linkObj.uri.replace('entity:','');
        const route = await this.getRoute(linkUri)

        let nodeId = route.props.uuid;
        let nodeType = route.props.type;
        
        const entity = await this.getEntity({ id: nodeId, type: nodeType })

        link = {
          uri: entity.attributes.path.alias,
          text: linkText ? linkText : entity.attributes.title
        }
      }

      if (!this.cards) this.cards = []
      this.cards[delta] = {
        props: false,
        heading: heading,
        content: content,
        link: link
      }
      console.log(this.cards)
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