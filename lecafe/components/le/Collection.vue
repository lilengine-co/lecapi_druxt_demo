<template>
  <div class="card-block">
    <h2 class="block__title text-center mb-6">{{ collection.title }}</h2>
    <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <li class="card__item" v-for="card in collection.products" :key="card.id">
        <le-card :card="card"/>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  props: ['collection']
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>