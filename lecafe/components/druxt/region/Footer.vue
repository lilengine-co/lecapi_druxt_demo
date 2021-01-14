<template>
  <div class="footer">
    <div class="container mx-auto">
      <div class="footer__grid grid md:grid-cols-3 gap-10 md:gap-20">
        <div class="footer__col">
          <div class="map-block">
            <iframe class="max-w-full w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3255.268071530659!2d149.1527684152491!3d-35.324164080279054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164c573767def1%3A0x195d28b8b8f7fd3f!2sFyshwick%20Retail%20Markets%2C%2036%20Mildura%20St%2C%20Fyshwick%20ACT%202609!5e0!3m2!1sen!2sau!4v1608173426006!5m2!1sen!2sau" width="468" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          </div>
        </div>
        <div class="footer__col">
          <div class="footer__block">
            <div class="mb-8">
              <h2 class="f-block__title text-2xl mb-2">Café Opening Hours</h2>
              <div class="grid sm:grid-cols-2 gap-4">
                <div>
                  <h3 class="font-bold">Mon - Tue</h3>
                  <span class="font-light">Closed</span>
                </div>
                <div>
                  <h3 class="font-bold">Thurs - Sun</h3>
                  <span class="font-light">9am - 4pm</span>
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-2xl mb-2">Address</h2>
              <div>
                <span class="font-light">36 Mildura St, Fyshwick ACT 2609</span>
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
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" style="font-size: 30px"/>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'twitter']" style="font-size: 30px"/>
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-yellow-700 transition-all duration-500">
                  <font-awesome-icon :icon="['fab', 'youtube']" style="font-size: 30px"/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="my-10 md:my-20 text-center opacity-70">
        © 2020 LeCafé
      </div>
    </div>
  </div>
</template>
