<template>
  <div>
    <div class="markup-block">
      <h2>This is the Markup paragraph from Vue template</h2>
      <slot/>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin]
}
</script>
<style lang="scss" scoped>
</style>