<template>
  <div>
    <druxt-block-region name="header" :theme="theme" />
    <Nuxt />
    <druxt-block-region name="footer" :theme="theme" />
  </div>
</template>

<script>
export default {
  name: 'Druxt',

  computed: {
    theme: () => 'legin',
  },
}
</script>