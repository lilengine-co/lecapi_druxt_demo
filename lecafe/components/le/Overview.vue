<template>
  <div class="booking-app grid md:grid-cols-2 gap-4 md:gap-8">
    <div class="bg-white shadow-lg p-6 border rounded">
      <h2 class="text-2xl">Confirm your details</h2>
      <div class="grid gap-6 py-8">
        <div class="grid grid-cols-2 border-b">
          <span>First Name</span>
          <span>{{ detail.firstName }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>Last Name</span>
          <span>{{ detail.lastName }}</span>
        </div>
        <div v-if="detail.companyName" class="grid grid-cols-2 border-b">
          <span>Company</span>
          <span>{{ detail.companyName }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>Mobile</span>
          <span>{{ detail.mobile }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>Email</span>
          <span>{{ detail.email }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>Date</span>
          <span>{{ booking.date }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>For</span>
          <span>{{ booking.persion }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>At</span>
          <span>{{ booking.time }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>In</span>
          <span>{{ booking.section }}</span>
        </div>
        <div class="grid grid-cols-2 border-b">
          <span>Requests</span>
          <span>{{ detail.notes }}</span>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-lg p-6 border rounded">
      <h2 class="text-md">Special Requirements</h2>
      
    </div>
    <div class="md:col-end-3 flex justify-between">
      <span @click="backToDetail" class="button button--gray">
        <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
        Back
      </span>
      <button @click="submitOverview" type="submit" :disabled="!conditions" class="button disabled:opacity-50">
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
      }
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
