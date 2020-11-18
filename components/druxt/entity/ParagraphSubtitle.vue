<template>
  <div>
    <div class="subtitle-block">
      <h3>
        <NuxtLink :to="'#' + to">{{ fields._heading.data }}
        <font-awesome-icon icon="link"/></NuxtLink>
      </h3>
    </div>
  </div>
</template>

<script>
import { DruxtEntityMixin } from 'druxt-entity'

export default {
  mixins: [DruxtEntityMixin],

  computed: {
    to() {
      let anchorTitle = this.fields._heading.data.toLowerCase().replace(/ /g, '-');
      let anchor = this.fields._anchor ? this.fields._anchor.data : false;
      if (anchor) {
        return anchor;
      }
      else {
        return anchorTitle;
      }
    },
  },
}
</script>
<style lang="scss" scoped>
  // @import '../../../scss/styles';

  .subtitle {
    &-block {
      background-color: $red;
    }
  }
</style>