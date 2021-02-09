<template>
  <div class="card group card--gallery bg-black hover:bg-gray-700 w-full relative overflow-hidden transition duration-150 ease-in-out" :class="featured ? 'p-100p' : 'p-80p'">
    <div v-if="card.cover" class="bg-center bg-cover absolute opacity-50 inset-0 transition duration-150 ease-in-out transform scale-100 group-hover:scale-110" v-bind:style="'background-image:url(' + card.cover + ')'">
    </div>
    <div v-if="lightbox && card.images" class="card__image absolute inset-0 z-50">
      <le-lightbox :images="card.images" />
    </div>
    <div class="card__content absolute inset-0 p-5 xl:p-6 flex items-center justify-center flex-col text-gray-50">
      <h3 class="card__title block__title">{{ card.heading }}</h3>
      <div class="card__content markup__html" v-html="card.content"></div>
    </div>
    <NuxtLink v-if="card.link" class="absolute inset-0" :to="card.link.uri">
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ["card" , "lightbox", 'featured']
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>