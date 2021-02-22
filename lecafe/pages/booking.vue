<template>
  <div class="container mx-auto">
    <div class="step mb-10">
      <ul class="flex items-center">
        <li class="flex items-center">
          <span class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-8 h-8 bg-gray-300">1</span>
          <span class="inline-flex p-2">Booking</span>
        </li>
        <li class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600">
        </li>
        <li class="flex items-center pl-2">
          <span class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-8 h-8 bg-gray-300">2</span>
          <span class="inline-flex p-2">Your details</span>
        </li>
        <li class="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600">
        </li>
        <li class="flex items-center  pl-2">
          <span class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-8 h-8 bg-gray-300">3</span>
          <span class="inline-flex p-2">Summary</span>
        </li>
      </ul>
    </div>
    <div class="booking-app grid md:grid-cols-2 md:gap-8">
      <div class="flex shadow-md rounded overflow-hidden">
        <div class="bg-green-300 w-52 text-white p-4">
          <div class="text-xl">{{ pickedYear }}</div>
          <div class="text-md">{{ pickedDate }}</div>
        </div>
        <div class="calendar flex-auto bg-green-100">
          <v-calendar is-expanded :attributes='attributes' @dayclick="onDayClick" :model-config="modelConfig" />
        </div>
      </div>
      <div class="bg-red-50">
      </div>
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
  data() {
    return {
      date: new Date(),
      modelConfig: {
        type: 'number',
      },
    };
  },
  computed: {
    attributes() {
      return [
        {
          highlight: true,
          dates: this.date
        }
      ]
    },
    pickedYear() {
      return this.date.getFullYear();
    },
    pickedDate() {
      var month = new Array();
      month[0] = "Jan";
      month[1] = "Feb";
      month[2] = "Mar";
      month[3] = "Apr";
      month[4] = "May";
      month[5] = "Jun";
      month[6] = "Jul";
      month[7] = "Aug";
      month[8] = "Sep";
      month[9] = "Oct";
      month[10] = "Nov";
      month[11] = "Dec";
      var weekday = new Array();
      weekday[0] = "Sun";
      weekday[1] = "Mon";
      weekday[2] = "Tue";
      weekday[3] = "Wed";
      weekday[4] = "Thu";
      weekday[5] = "Fri";
      weekday[6] = "Sat";
      return weekday[this.date.getDay()] + ', ' + month[this.date.getMonth()] + ' ' + this.date.getDate();
    }
  },
  methods: {
    onDayClick(day) {
      console.log("day");
      console.log(day);
      this.date = day.date;
    },
  },
}
</script>

<style lang="scss">
  .vc-container {
    border: none;
    border-radius: 0;
  }
</style>
