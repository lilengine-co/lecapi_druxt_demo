<template>
  <div class="container mx-auto">
    <div class="step mb-10">
      <ul class="flex items-center">
        <template v-for="(step, index) in steps">
          <li v-if="index !== 0" class="flex-auto mx-2 border-t-2 transition duration-500 ease-in-out border-teal-600">
          </li>
          <li class="flex items-center">
            <span :class="step.status == 'active' ? 'bg-yellow-700 text-white' : 'bg-gray-300'" class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-8 h-8 ">
              <font-awesome-icon v-if="step.status == 'done'" icon="check"/>
              <span v-else>
                {{ index + 1 }}
              </span>
            </span>
            <span class="hidden md:inline-flex pl-2">{{ step.name }}</span>
          </li>
        </template>
      </ul>
    </div>
    <div class="booking__section">
      <le-booking v-show="steps[0].status == 'active'" v-on:booking-submit="bookingSubmit"/>
      <le-detail v-show="steps[1].status == 'active'" v-on:detail-submit="detailSubmit"/>
      <le-overview v-show="steps[2].status == 'active'" v-on:overview-submit="overviewSubmit" :booking="bookingInformation" :detail="detail"/>
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
      bookingInformation: {},
      detail: {},
      overview: {},
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
    bookingSubmit(info) {
      this.bookingInformation = info;
      this.steps[0].status = 'done';
      this.steps[1].status = 'active';
    },
    detailSubmit(detail) {
      if(!detail) {
        this.steps[0].status = 'active';
        this.steps[1].status = false;
      }
      else {
        this.steps[1].status = 'done';
        this.steps[2].status = 'active';
        this.detail = detail;
        console.log(detail);
      }
    },
    overviewSubmit(overview) {
      if(!overview) {
        this.steps[1].status = 'active';
        this.steps[2].status = false;
      }
      else {
        this.steps[2].status = 'done';
        this.overview = overview;
        console.log(detail);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>
