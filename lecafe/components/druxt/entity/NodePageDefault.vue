<template>
  <div>
    <div v-if="fields.deck.data.value || entity.attributes.title" class="container mx-auto text-center">
      <h1 v-if="entity.attributes.title" class="page-title text-4xl mb-2">{{ entity.attributes.title }}</h1>
      <div v-if="fields.deck.data.value" class="page__deck text-xl" v-html="fields.deck.data.value"></div>
      <!-- <slot name="hero" /> -->
    </div>
    <div class="mt-10">
      <slot name="content" />
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
