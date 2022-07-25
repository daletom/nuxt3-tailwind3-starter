<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="absolute inset-y-0 right-0 hidden w-48 h-full text-white transform translate-x-1/2 lg:block" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <TheHeader />

        <main class="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span class="block 3xl:inline">imgix Demos</span>
              {{ ' ' }}
              <span class="block text-5xl text-orange-600 xl:inline">Plyr.io with imgix</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">imgix transforms, optimizes, and intelligently caches your entire asset library for faster pages, higher engagement, and a simpler workflow.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="https://dashboard.imgix.com/sign-up" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> TRY IT FREE </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="/" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> Don't Want React? </a>
              </div>
            </div>
          </div>
        </main>
         
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://mux-tom.imgix.net/02wBXRA6PpXwgqZdwXbIGgP00Ggj2hdbyd/thumbnail.jpg?mark-align=center%2Cright&mark-scale=40&mark64=aHR0cHM6Ly91c2VyLWltYWdlcy5naXRodWJ1c2VyY29udGVudC5jb20vMjM1Nzk5NTgvMTQzNzM4NjEzLWQzNzRhZGNmLTI0YjgtNGY0NC04ZTc1LTY3M2Q1NjgxYzFhNS5wbmc&blend-w=.3&blend-mode=normal&blend64=aHR0cHM6Ly9wbGF5LWxoLmdvb2dsZXVzZXJjb250ZW50LmNvbS9tM1lJMUk1R2syUmxmcEd3RWZXbm1MY1JBZklSVERldVNGMEZUN3c4bVhQQ094WmpyZEpnZXlPYzVDbjBJQTR1cmtoeg&w=1200&auto=format%2Ccompress&mark-pad=30" alt="Header Image for Player IO and imgix Video" />
    </div>
  </div>
  <!-- Sections -->
      <iframe height="800" style="width: 100%;" scrolling="no" title="imgix + plyr with hls" src="https://codepen.io/jdawsonimgix/embed/OJjywgL?default-tab=html%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/jdawsonimgix/pen/OJjywgL">
  imgix + plyr with hls</a> by Jdawson (<a href="https://codepen.io/jdawsonimgix">@jdawsonimgix</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

     <TheFooter /> 
        
  
</template>

