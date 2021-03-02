<template>
  <div v-if="fields">
    <div class="container mx-auto clear-both">
      <le-goback class="mb-6"/>
      <div v-if="fields.hero" class="artilce__hero text-center lg:float-right lg:max-w-xl lg:pl-16 pb-8">
        <slot name="hero" />
      </div>
      <div class="artilce__body">
        <div v-if="fields.deck || entity.attributes.title" class="artilce__heading">
          <h1 v-if="entity.attributes.title" class="page-title text-4xl mb-2">{{ entity.attributes.title }}</h1>
          <div v-if="fields.deck" class="page__deck text-xl" v-html="fields.deck.data.value"></div>
        </div>
        <div class="artilce__content">
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],
  async fetch() {
  }
}
</script>
