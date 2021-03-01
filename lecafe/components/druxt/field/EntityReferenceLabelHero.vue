<template>
  <div v-if="!$fetchState.pending">
    <img
      v-for="entity of entities"
      :key="entity.id"
      :src="entity.attributes"
      alt=""
    />
  </div>
</template>

<script>
import { DruxtFieldResponsiveImage } from 'druxt-entity'

export default {
  extends: DruxtFieldResponsiveImage,
}
</script>
