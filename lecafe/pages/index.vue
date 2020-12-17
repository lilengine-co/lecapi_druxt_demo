<template>
  <div id="homepage" class="absolute inset-0 z-10">
    <!-- This example requires Tailwind CSS v2.0+ -->
    <canvas id="canvas" class="absolute inset-0 pointer-events-none z-10"></canvas>
    <div class="bg-gray-50">
      <div class="cta-block bg-center bg-cover w-screen h-screen relative bg-gradient-to-t from-black" v-bind:style="'background-image:url(/images/bg-2.png)'">
        <div class="bg-gradient-to-t absolute inset-0 from-black flex items-center">
          <div class="container mx-auto">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <div class="pr-10">
                <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                  <span class="block text-white uppercase">Café Opening Hours</span>
                </h2>
                <h3 class="block text-xl font-extrabold tracking-tight text-gray-300">
                  Mon - Tue: Closed<br />
                  Thurs - Sun: 9am - 4pm
                </h3>
              </div>
              <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                  <a href="cafe/basic-page/menu" class="inline-flex items-center justify-center button uppercase">
                    See menu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="/js/snow-animation.js"></script>
  </div>
</template>

<script>
export default {
  name: 'Druxt',

  computed: {
    theme: () => 'legin',
  },
}
</script>
<style lang="scss" scoped>
  * {
    box-sizing: border-box;
  }
</style>

