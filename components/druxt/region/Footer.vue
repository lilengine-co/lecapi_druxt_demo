<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="footer__grid grid md:grid-cols-3 gap-10 md:gap-20 pb-6 md:pb-16">
        <div class="footer__col">
          <div class="map-block">
            <iframe class="max-w-full w-full" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13020.001335105675!2d149.1813514!3d-35.3308132!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x10d080a213e14342!2sPlumb%20on%20Tennant!5e0!3m2!1sen!2sau!4v1614558406331!5m2!1sen!2sau" width="468" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__block">
            <div class="mb-8">
              <h2 class="f-block__title text-2xl mb-2">Café Opening Hours</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3>Mon - Tue</h3>
                  <span class="font-light">Closed</span>
                </div>
                <div>
                  <h3>Thurs - Sun</h3>
                  <span class="font-light">7:30am - 4pm</span>
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-2xl mb-2">Address</h2>
              <div>
                <a href="https://goo.gl/maps/3TGCTpfcNWB5hFDn8" target="_blank" class="font-light hover:text-yellow-500">5 Tennant St, Fyshwick ACT 2609</a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__col">
          <h2 class="text-2xl  mb-4">Connect with us</h2>
          <div>
            <ul class="flex space-x-4">
              <li>
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'instagram']" style="font-size: 30px"/>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/Plumb.tennant" target="_blank" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 30px"/>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'twitter']" style="font-size: 30px"/>
                </a>
              </li>
              <!-- <li>
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 30px"/>
                </a>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
      <div class="my-10 md:my-20 text-center opacity-70 hidden">
        © 2021 LeCafé
      </div>
    </div>
  </div>
</template>
