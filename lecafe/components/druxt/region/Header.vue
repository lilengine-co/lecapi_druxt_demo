<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="container mx-auto">
    <nav class="flex items-center p-3 flex-wrap">
      <NuxtLink to="/" class="p-2 mr-4 inline-flex items-center">
        <img class="h-24 w-auto mr-2" src="/logo.gif" alt="LilEngine website">
      </NuxtLink>
      <DruxtMenu name="cafe-menu" class="inline-flex lg:flex-grow top-navbar ml-auto relative lg:w-auto" />
      <le-cart />
    </nav>
  </div>
</template>
