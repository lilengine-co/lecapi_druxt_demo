<template>
  <div class="container mx-auto">
    <div class="step mb-10">
      <ul class="flex items-center">
        <template v-for="(step, index) in steps">
          <li v-if="index !== 0" class="flex-auto mx-2 border-t-2 transition duration-500 ease-in-out border-teal-600">
          </li>
          <li class="flex items-center">
            <span :class="step.status == 'active' ? 'bg-yellow-700 text-white' : 'bg-gray-300'" class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-8 h-8 ">{{ index + 1 }}</span>
            <span class="hidden md:inline-flex pl-2">{{ step.name }}</span>
          </li>
        </template>
      </ul>
    </div>
    <div class="booking__section">
      <le-booking />
    </div>
    <div class="booking__pager">

    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Plumb café | Booking table",
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
    }
  },
  data() {
    return {
      steps: [
        {
          name: "Booking",
          status: 'active',
        },
        {
          name: "Your details",
          status: false,
        },
        {
          name: "Summary",
          status: false,
        },
      ],
    }
  },
  computed: {
    
  },
  methods: {
    
  },
}
</script>

<style lang="scss" scoped>
  
</style>
