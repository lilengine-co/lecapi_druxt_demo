<template>
  <div>
    <div class="container mx-auto clear-both">
      <div v-if="fields.hero" class="artilce__hero float-right max-w-xl md:pl-16">
        <slot name="hero" />
      </div>
      <div class="artilce__content">
        <div v-if="fields.deck || entity.attributes.title">
          <h1 v-if="entity.attributes.title" class="page-title text-4xl mb-2">{{ entity.attributes.title }}</h1>
          <div v-if="fields.deck" class="page__deck text-xl" v-html="fields.deck.data.value"></div>
        </div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
}
</script>
