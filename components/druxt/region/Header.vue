<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative z-10">
    <nav class="bg-gray-800">
      <div class="container mx-auto">
        <div class="max-w-7xl mx-auto">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="/" class="px-3 block py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700">
                  <img class="h-8 w-8" src="https://www.lilengine.co/sites/default/files/2017-08/mono-green-white_0.svg" alt="LilEngine website">
                </a>
              </div>
              <div class="block main-menu">
                <DruxtBlockSystemMenuBlockMain />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    

    <!-- <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Page title
        </h1>
      </div>
    </header> -->
  </div>
</template>
