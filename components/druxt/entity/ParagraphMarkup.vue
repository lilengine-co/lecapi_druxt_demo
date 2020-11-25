<template>
  <div>
    <div class="markup-block block-space bg-gray-200">
      <div class="container mx-auto">
        <slot name="subtitle"/>
        <div class="markup__html" v-html="fields._markup.data.value">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin]
}
</script>