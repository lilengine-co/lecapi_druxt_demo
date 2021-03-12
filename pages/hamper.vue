<template>
  <div class="container mx-auto">
    <div class="block-space">
      <h1 class="text-center text-5xl">{{ pageTitle }}</h1>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  head() {
    return {
      title: this.pageTitle + " | Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  data: () => (
    {
      pageTitle: "Hamper",
    }
  ),
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>