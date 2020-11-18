<template>
  <div>
    <div class="subtitle-block">
      <h2>
        <NuxtLink :to="'#' + to">{{ fields._heading.data }}</NuxtLink>
      </h2>
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