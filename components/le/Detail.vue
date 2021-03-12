<template>
  <form @submit.prevent="submitDetail" method="post" class="booking-app grid md:grid-cols-2 gap-4 md:gap-8">
    <div class="bg-white shadow-lg p-6 border rounded">
      <div class="grid gap-4">
        <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="First name*" name="FNAME" v-model="firstName" required>
        <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Last name*" v-model="lastName" name="LNAME" required>
        <input type="tel" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Mobile*" v-model="mobile" name="MOBILE" required>
        <input type="email" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Email*" v-model="email" name="EMAIL" required>
        <input type="text" class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" placeholder="Company name" v-model="companyName" name="COMPANY">
      </div>
    </div>
    <div class="bg-white shadow-lg p-6 border rounded">
      <textarea class="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black" v-model="notes" rows="4" placeholder="Notes" name="NOTES"></textarea>
      <h3 class="mt-8">Special Requirements</h3>
      <label class="flex items-center mt-3 cursor-pointer">
        <input type="checkbox" v-model="heighChair" class="form-checkbox h-5 w-5 text-yellow-600">
        <span class="ml-2 text-gray-700">Highchair</span>
      </label>
      <label class="flex items-center mt-3 cursor-pointer">
        <input type="checkbox" v-model="pram" class="form-checkbox h-5 w-5 text-yellow-600">
        <span class="ml-2 text-gray-700">Pram</span>
      </label>

      <div class="border-t my-6"></div>
      <label class="flex items-center cursor-pointer">
        <input required type="checkbox" v-model="conditions" class="form-checkbox h-5 w-5 text-yellow-600">
        <span class="ml-2 text-gray-700">I agree to the terms and conditions*</span>
      </label>
    </div>
    <div class="md:col-end-3 flex justify-between">
      <span @click="backToBooking" class="button button--gray">
        <font-awesome-icon icon="long-arrow-alt-left" style="font-size: 15px" />
        Back
      </span>
      <button type="submit" :disabled="!conditions" class="button disabled:opacity-50">
        Next
        <font-awesome-icon icon="long-arrow-alt-right" style="font-size: 15px" />
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      mobile: '',
      email: '',
      companyName: '',
      notes: '',
      heighChair: '',
      pram: '',
      conditions: false,
    };
  },
  computed: {
  },
  methods: {
    submitDetail() {
      let detail = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobile: this.mobile,
        email: this.email,
        companyName: this.companyName,
        notes: this.notes,
        heighChair: this.heighChair,
        pram: this.pram
      }
      this.$emit("detail-submit", detail);
    },
    backToBooking() {
      this.$emit("detail-submit", false);
    }
  },
}
</script>

<style lang="scss" scoped>
</style>
