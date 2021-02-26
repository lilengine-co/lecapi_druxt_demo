<template>
  <div class="container mx-auto">
    <div class="block-space">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="item in menus" :key="item.id">
          <le-card :card="item"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  head() {
    return {
      title: "Plumb café",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ]
    }
  },
  data: () => (
    {
      menus: [
        {
          cover: '/images/le-pickup.jpg',
          heading: 'Pickup',
          link: {
            uri: '/cafe/basic-page/pickup'
          }
        },
        {
          cover: '/images/le-cafe.jpg',
          heading: 'Cafe',
          link: {
            uri: '/cafe'
          }
        },
        {
          cover: '/images/le-drink.jpg',
          heading: 'Catering',
          link: {
            uri: '/catering'
          }
        },
        {
          cover: '/images/le-drink.jpg',
          heading: 'Hamper',
          link: {
            uri: '/hamper'
          }
        },
        {
          cover: '/images/le-venue.jpg',
          heading: 'Venue',
          link: {
            uri: '/venue'
          }
        },
        {
          cover: '/images/le-venue.jpg',
          heading: 'Pantry',
          link: {
            uri: '/pantry'
          }
        },
      ],
    }
  ),
}
</script>
<style lang="scss">
 * {
   box-sizing: border-box;
 }
</style>