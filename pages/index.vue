<template>
  <div>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-gray-50">
      <div class="cta-block bg-center bg-cover w-screen h-screen relative bg-gradient-to-t from-black" v-bind:style="'background-image:url(https://ik.imagekit.io/q5edmtudmz/post1_fOFO9VDzENE.jpg)'">
        <div class="bg-gradient-to-t absolute inset-0 from-black flex items-center">
          <div class="container mx-auto">
            <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span class="block text-white">Ready to dive in?</span>
                <span class="block text-gray-400">A sample Druxt demo with API from Drupal.</span>
              </h2>
              <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div class="inline-flex rounded-md shadow">
                  <a href="/lilengine-demo/basic-page/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    See demo page
                  </a>
                </div>
                <div class="ml-3 inline-flex rounded-md shadow">
                  <a target="_blank" href="https://github.com/simesy/lecapi_druxt_demo" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
                    <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    Github link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

