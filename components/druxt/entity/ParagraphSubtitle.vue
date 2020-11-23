<template>
  <div>
    <div class="subtitle-block mb-1">
      <h3 class="subtitle__title text-3xl font-semibold">
        <NuxtLink  class="subtitle__link" :to="'#' + to">
          {{ fields._heading.data }}
        </NuxtLink>
        <span @click="copyUrl" title="Click to copy the link" class="transition cursor-pointer text-sm duration-500 ease-in-out subtitle__icon opacity-10 hover:opacity-70">
          <font-awesome-icon icon="link"/>
        </span>
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
  methods: {
    copyUrl() {
      const el = document.createElement('textarea');
      el.value = window.location.origin + this.$route.path + '#' + this.to;                                 
      el.setAttribute('readonly', '');                
      el.style.position = 'absolute';                     
      el.style.left = '-9999px';                      
      document.body.appendChild(el);                  
      const selected =  document.getSelection().rangeCount > 0  ? document.getSelection().getRangeAt(0) : false;                                    
      el.select();                                    
      document.execCommand('copy');                   
      document.body.removeChild(el);                  
      if (selected) {                                 
        document.getSelection().removeAllRanges();    
        document.getSelection().addRange(selected);   
      }
      alert('The url has been copied');
    }
  }
}
</script>
<style lang="scss" scoped>
  .subtitle {
    &__link {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>