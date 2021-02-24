<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="container mx-auto">
    <nav class="flex items-center md:p-3 flex-wrap">
      <NuxtLink to="/" class="p-2 mr-4 inline-flex items-center">
        <img class="h-14 md:h-24 w-auto mr-2" src="/logo.gif" alt="LilEngine website">
      </NuxtLink>
      <DruxtMenu name="cafe-menu" class="inline-flex lg:flex-grow top-navbar ml-auto relative lg:w-auto" />
      <NuxtLink to="/booking" class="button p-2 inline-flex items-center" title="Booking a table" style="margin: 0; margin-left: 10px;">
        <font-awesome-icon icon="calendar-alt" style="font-size: 15px" />
        <span>Booking</span>
      </NuxtLink>
    </nav>
  </div>
</template>
<style lang="scss">
  * {
    box-sizing: border-box;
  }
</style>