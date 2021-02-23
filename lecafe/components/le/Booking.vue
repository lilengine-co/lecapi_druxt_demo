<template>
  <div class="booking-app grid md:grid-cols-2 md:gap-8">
    <div>
      <div class="flex shadow-md rounded overflow-hidden row-end-auto">
        <div class="bg-yellow-700 w-52 text-white p-4">
          <div class="text-xl">{{ pickedYear }}</div>
          <div class="text-md">{{ pickedDate }}</div>
        </div>
        <div class="calendar flex-auto">
          <v-calendar color="orange" v-model='date' :min-date='new Date()' is-expanded :attributes='attributes' @dayclick="onDayClick" :model-config="modelConfig" />
        </div>
      </div>
    </div>
    <div class="">
      <div class="section">
        <h3 @click="numberPersonShow = !numberPersonShow" class="section__title">Booking for {{ numberPerson }} {{ numberPerson > 1 ? 'people' : 'person' }}</h3>
        <div v-show="numberPersonShow" class="section__content h-10 w-52">
          <div class="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <input type="number" class="outline-none focus:outline-none text-center w-full border font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 border-none  outline-none w-24 shadow-md" name="custom-input-number" v-model="numberPerson"></input>
            <button @click="decreasePerson" class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-20 h-10 bg-yellow-700 hover:bg-yellow-500 cursor-pointer mx-2 shadow-md">
              <span class="m-auto text-2xl font-thin text-white">-</span>
            </button>
            <button @click="increasePerson" class="rounded-full transition duration-500 justify-center ease-in-out inline-flex items-center w-20 h-10 bg-yellow-700 hover:bg-yellow-500 cursor-pointer shadow-md">
              <span class="m-auto text-2xl font-thin text-white">+</span>
            </button>
          </div>
        </div>
      </div>
      <div class="section">
        <h3 @click="serviceShow = !serviceShow" class="section__title">{{ serviceLabel }}</h3>
        <div v-show="serviceShow" class="section__content">
          <div v-for="(service, index) in services" :key="service.id" class="mt-3">
            <label class="inline-flex items-center cursor-pointer">
              <input @change="selectService(index)" type="radio" name="service" :value="service.id" class="form-radio h-5 w-5 text-yellow-600 outline-none">
              <span class="ml-2 text-gray-700">{{ service.label }}</span>
            </label>
          </div>
        </div>
      </div>
      <div class="section" v-if="serviceSelected">
        <h3 @click="timeSelectedShow = !timeSelectedShow" class="section__title">{{ timeSelectedLabel }}</h3>
        <div v-show="timeSelectedShow" class="section__content grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
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
      <div class="section" v-if="timeSelected">
        <h3 @click="sectionShow = !sectionShow" class="section__title">{{ sectionLabel }}</h3>
        <div v-show="sectionShow" class="section__content">
          <div v-for="section in sectionList" :key="section.id" class="mt-3">
            <label class="inline-flex items-center cursor-pointer">
              <input @change="selectSection(section)"  type="radio" name="section" :value="section" class="form-radio h-5 w-5 text-yellow-600 outline-none">
              <span class="ml-2 text-gray-700">{{ section }}</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
      modelConfig: {
        type: 'number',
      },
      numberPerson: 1,
      numberPersonShow: true,
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
      serviceLabel: 'Which service are you looking for?',
      serviceShow: true,
      serviceSelected: false,
      timeSelectedLabel: 'Select a time',
      timeSelectedShow: true,
      timeSelected: false,
      sectionShow: true,
      sectionLabel: 'Which section would you like to be in?',
      sectionSelected: '',
      sectionList: [
        "Inside",
        "Yard (Outside)",
        "Any"
      ]
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
      if(day.isDisabled) {
        // alert("The day  choose another day");
      }
      else {
        this.date = day.date;
      }
    },
    increasePerson() {
      this.numberPerson += 1;
    },
    decreasePerson() {
      if(this.numberPerson > 1) {
        this.numberPerson -= 1;
      }
    },
    selectService(index) {
      this.serviceSelected = this.services[index];
      this.serviceLabel = 'For ' + this.services[index].label;
      this.numberPersonShow = false;
      this.serviceShow = false;
      this.timeSelectedLabel = 'Select a time';
      this.timeSelectedShow = true;
    },
    selectTime(time) {
      this.timeSelectedLabel = 'At ' + time;
      this.timeSelected = time;
      this.timeSelectedShow = false;
    },
    selectSection(section) {
      this.sectionLabel = section == 'Any' ? 'In any section' : 'In "' + section + '"';
      this.sectionSelected = section;
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
    @apply shadow bg-gray-50 rounded p-4 mb-1;

    &__title {
      @apply w-full text-gray-700 text-sm font-semibold block cursor-pointer;
    }

    &__content {
      @apply mt-4;
    }
  }
</style>
