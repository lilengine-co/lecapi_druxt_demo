<template>
  <div class="booking-app grid md:grid-cols-2 gap-4 md:gap-8">
    <div class="bg-white shadow-lg p-6 border rounded">
      <h2 class="text-2xl">Confirm your details</h2>
      <div class="grid gap-6 py-4">
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">First Name</span>
          <span>{{ detail.firstName }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">Last Name</span>
          <span>{{ detail.lastName }}</span>
        </div>
        <div v-if="detail.companyName" class="grid grid-cols-2 border-b">
          <span class="font-bold">Company</span>
          <span>{{ detail.companyName }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">Mobile</span>
          <span>{{ detail.mobile }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">Email</span>
          <span class="break-words">{{ detail.email }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">Date</span>
          <span>{{ booking.date.toLocaleDateString("au-AU") }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">At</span>
          <span>{{ booking.time }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">For</span>
          <span>{{ booking.persion }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span class="font-bold">In</span>
          <span>{{ booking.section }}</span>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-lg p-6 border rounded">
      <h2 class="text-md font-bold">Special Requirements:</h2>
      <div class="py-4">
        <span v-if="detail.heighChair"
          class="border w-full border-yellow-700 mr-4 rounded-full px-4 py-2 transition duration-500 ease select-none text-white bg-yellow-700 "
        >
          Heigh Chair
        </span> 
        <span v-if="detail.pram"
          class="border w-full border-yellow-700  rounded-full px-4 py-2 transition duration-500 ease select-none text-white bg-yellow-700 "
        >
          Pram
        </span> 
      </div>
      <div class="grid gap-6 py-4">
        <div class="grid border-b">
          <span class="font-bold block mb-2">Requests:</span>
          <span>{{ detail.notes }}</span>
        </div>
      </div>
    </div>
    <div class="md:col-end-3 flex justify-between">
      <span @click="backToDetail" class="button button--gray">
        <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
        Back
      </span>
      <button @click="submitOverview" class="button disabled:opacity-50">
        <font-awesome-icon icon="paper-plane" style="font-size: 15px" />
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  props: ['booking', 'detail'],
  computed: {
  },
  methods: {
    submitOverview() {
      let overview = {
        ...this.booking,
        ...this.detail
      };
      this.$emit("overview-submit", overview);
    },
    backToDetail() {
      this.$emit("overview-submit", false);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
