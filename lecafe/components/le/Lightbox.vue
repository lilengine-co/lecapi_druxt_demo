<template>
  <div>
    <div>
      <div
        class="opacity-0 cursor-pointer absolute transition duration-300 ease-in-out flex justify-center items-center inset-0 hover:opacity-5"
        @click="() => show(index)"
      >
        <font-awesome-icon icon="expand-alt" class="text-white" style="font-size: 200px" />
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