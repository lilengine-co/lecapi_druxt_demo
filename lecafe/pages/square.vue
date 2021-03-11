<template>
  <div class="container mx-auto py-10 bg-gray-200 rounded">
    <h1>This is the square app</h1>
    <div>Locations</div>
    {{ locations }}
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

// const client = new Client({
//   environment: Environment.Sandbox,
//   accessToken: process.env.SQUARE_ACCESS_TOKEN,
// })

export default {
  methods: {
    // Get all collections to display collections block, and get home collection to displaying the home products
    // ...mapActions([
    //   'fetchLocations'
    // ])
  },
  computed: mapGetters([
    'loading',
    'locations',
  ]),
  async mounted () {
    // this.fetchLocations();
    console.log(this.loading);
  },
}
</script>

<style>

</style>