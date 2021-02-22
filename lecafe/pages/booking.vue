<template>
  <div class="container mx-auto">
    <h1 class="text-xl">
      This is the booking app 
    </h1>

    <div>
      <md-datepicker v-model="selectedDate">
        <label>Select date</label>
      </md-datepicker>
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
      link: [
        { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
      ]
    }
  },
  name: 'LabeledDatepicker',
  data: () => ({
    selectedDate: null
  })
}
</script>

<style>

</style>
