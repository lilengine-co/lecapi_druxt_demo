<template>
  <div>
    <div>
      <div
        class="opacity-0 cursor-pointer"
        @click="() => show(index)"
      >
        <img :src="images[index]">
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