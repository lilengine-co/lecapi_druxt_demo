<template>
  <div>
    <div>
      <div
        class="opacity-0 cursor-pointer absolute inset-0 hover:opacity-70"
        @click="() => show(index)"
      >

        <img :src="images[index].src ? images[index].src : images[index]" :alt="images[index].title ? images[index].title : ''">
      </div>
    </div>

    <client-only>
      <vue-easy-lightbox
        :visible="visible"
        :index="index"
        :imgs="images"
        @hide="visible = false"
      />
    </client-only>
  </div>
</template>

<script>
  export default {
    props: ['images'],
    data() {
      return {
        visible: false,
        index: 0 // default
      }
    },
    methods: {
      show(index) {
        this.index = index
        this.visible = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>