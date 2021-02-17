<template>
  <div class="container mx-auto">
    <div class="block-space">
      <ul class=" grid gap-4 lg:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <li class="card__item" v-for="item in menus" :key="item.id">
          <le-card :card="item" featured="true"/>
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
          cover: '/images/le-drink.jpg',
          heading: 'Non-alcoholic drink',
          link: {
            uri: '/non-alcoholic'
          }
        },
        {
          cover: '/images/le-cafe.jpg',
          heading: 'Menu',
          link: {
            uri: '/menu'
          }
        },
        {
          cover: '/images/le-drink.jpg',
          heading: 'Alcoholic drink',
          link: {
            uri: '/alcoholic'
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