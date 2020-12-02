<template>
  <div>
    <druxt-menu class="ml-10 flex items-baseline space-x-4">
      <template #item="{ item: { entity }, to }">
        <nuxt-link :to="to" class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700">
          {{ entity.attributes.title }}
        </nuxt-link>
      </template>

      <template #parent="{ item: { entity, children } }">
        <div :text="entity.attributes.title">
          <druxt-menu-item :item="{ entity, children: [] }" />

          <druxt-menu-item
            v-for="item in children"
            :key="item.entity.id"
            :item="item"
          />
        </div>
      </template>
    </druxt-menu>
  </div>
</template>

<script>
import { DruxtBlocksBlockMixin } from 'druxt-blocks'

export default {
  mixins: [DruxtBlocksBlockMixin],
}
</script>
