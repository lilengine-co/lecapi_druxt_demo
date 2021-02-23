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
      <div>
        <div class="flex shadow-md rounded overflow-hidden row-end-auto">
          <div class="bg-yellow-700 w-52 text-white p-4">
            <div class="text-xl">{{ pickedYear }}</div>
            <div class="text-md">{{ pickedDate }}</div>
          </div>
          <div class="calendar flex-auto bg-green-100">
            <v-calendar is-expanded :attributes='attributes' @dayclick="onDayClick" :model-config="modelConfig" />
          </div>
        </div>
      </div>
      <div class="">
        <div class="section">
          <h3 class="section__title">Number of person:</h3>
          <div class="custom-number-input h-10 w-52">
            <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
              <input type="number" class="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 border-none  outline-none w-24 shadow-md" name="custom-input-number" value="0"></input>
              <button class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-20 h-10 bg-yellow-700 hover:bg-yellow-500 cursor-pointer mx-2 shadow-md">
                <span class="m-auto text-2xl font-thin text-white">-</span>
              </button>
              <button class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-20 h-10 bg-yellow-700 hover:bg-yellow-500 cursor-pointer shadow-md">
                <span class="m-auto text-2xl font-thin text-white">+</span>
              </button>
            </div>
          </div>
        </div>
        <div class="section">
          <h3 class="section__title">{{ serviceSelected.label }}</h3>
          <div class="section__content">
            <div v-for="(service, index) in services" :key="service.id" class="mt-3">
              <label class="inline-flex items-center cursor-pointer">
                <input @change="selectService(index)" type="radio" name="service" :value="service.id" class="form-radio h-5 w-5 text-yellow-600 outline-none">
                <span class="ml-2 text-gray-700">{{ service.label }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="section">
          <h3 class="section__title">{{ timeSelected.label }}</h3>
          <div class="section__content grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
            <div v-for="time in serviceSelected.times" :key="time.id">
              <button
                type="button"
                class="border w-full border-gray-700 text-gray-700 rounded-full px-4 py-2 transition duration-500 ease select-none hover:text-white hover:bg-yellow-700 focus:outline-none focus:shadow-outline"
                @click="selectTime(time)"
              >
                {{ time }}
              </button>
            </div>
          </div>
        </div>
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
      services: [
        {
          id: 'breakfast',
          label: 'Breakfast',
          times: [
            '7:30AM',
            '8:00AM',
            '8:30AM',
            '9:00AM',
            '9:30AM',
            '10:00AM',
            '10:30AM',
            '11:00AM',
            '11:30AM',
          ]
        },
        {
          id: 'lunch',
          label: 'Lunch',
          times: [
            '12:00PM',
            '12:30PM',
            '1:00PM',
            '1:30PM',
            '2:00PM',
            '2:30PM',
          ]
        }
      ],
      timeSelected: {
        label: 'Select a time',
        value: '',
      },
      serviceSelected: {
        id: '',
        label: 'Which service are you looking for?',
        times: []
      }
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
      this.date = day.date;
    },
    selectService(index) {
      this.serviceSelected = this.services[index];
      this.timeSelected = {
        label: 'Select a time',
        value: '',
      }
    },
    selectTime(time) {
      this.timeSelected = {
        label: 'At ' + time,
        value: time,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .vc-container {
    border: none;
    border-radius: 0;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .custom-number-input input:focus {
    outline: none !important;
  }

  .custom-number-input button:focus {
    outline: none !important;
  }

  .section {
    @apply shadow-lg bg-gray-50 rounded p-4 mb-6;

    &__title {
      @apply w-full text-gray-700 text-sm font-semibold mb-4 block;
    }
  }
</style>
