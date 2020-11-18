<template>
  <div>
    <div class="subtitle-block">
      <h3 class="subtitle__title">
        <NuxtLink  class="subtitle__link" :to="'#' + to">
          {{ fields._heading.data }}
        </NuxtLink>
        <font-awesome-icon @click="copyUrl" title="Click to copy the link" class="subtitle__icon" icon="link"/>        
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
      el.value = window.location.origin + '/' + this.$route.path + '#' + this.to;                                 
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

    &__title {
      &:hover {
        .subtitle {
          &__icon {
            opacity: 0.7;
          }
        }
      }
    }

    &__icon {
      cursor: pointer;
      font-size: 0.7em;
      transition: opacity 0.3s;
      opacity: 0;
    }
  }
</style>