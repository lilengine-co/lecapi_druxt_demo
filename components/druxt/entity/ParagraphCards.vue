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
            {{ card.link }}
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
      let heading = result.attributes._heading
      let content = result.attributes_markup ? result.attributes._markup : ''
      let linkObj = result.attributes._link

      if (linkObj) {
        console.log(linkObj)
        const contentObj =  await this.getEntity({ id: 1, type: 'node/article' })
        console.log("content: "+ contentObj)
      }
      if (!this.cards) this.cards = []
      this.cards[delta] = {
        props: false,
        heading: heading,
        content: content,
        link: linkObj
      }
    }
  },
  data: () => ({
    cards: false
  }),
  methods: {
    ...mapActions({
      getEntity: 'druxtRouter/getEntity'
    })
  }
}
</script>