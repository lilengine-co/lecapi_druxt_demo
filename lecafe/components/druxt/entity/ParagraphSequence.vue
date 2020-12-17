<template>
  <div>
    <div class="sequence-block block-space">
      <div class="container mx-auto">
        <slot name="subtitle"/>
        <ul class="sequence__list">
          <li class="sequence__item mb-6" v-for="sequence in sequences" :key="sequence.id">
            <h3 class="text-2xl font-semibold">{{ sequence.heading }}</h3>
            <div class="markup__html prose max-w-none" v-html="sequence.content"></div>
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
      if (!this.sequences) this.sequences = []
      this.sequences[delta] = {
        props: false,
        heading: result.attributes._heading, // get result.attributes._heading... from Detected Vue tool --> attributes
        content: result.attributes._markup.value // get result.attributes._markup.value... from Detected Vue tool --> attributes
      }
    }
  },
  data: () => ({
    sequences: false
  }),
  methods: {
    ...mapActions({
      getEntity: 'druxtRouter/getEntity'
    })
  }
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>