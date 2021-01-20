<template>
    <span @click="goBack" class="text-current hover:text-yellow-700 text-sm cursor-pointer">
      <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
      Go back
    </span>
</template>

<script>
export default {
 methods: {
   goBack() {
     return this.$router.go(-1);
   }
 }
}
</script>

<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>