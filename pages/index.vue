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
              <span class="block xl:inline">All Your imgix Demos</span>
              {{ ' ' }}
              <span class="block text-5xl text-orange-600 xl:inline">Three Powerful Languages</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">imgix transforms, optimizes, and intelligently caches your entire asset library for faster pages, higher engagement, and a simpler workflow.</p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="https://dashboard.imgix.com/sign-up" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-orange-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"> TRY IT FREE </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"> See Demos </a>
              </div>
            </div>
          </div>
        </main>
         
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://ix-www.imgix.net/press/imgix-unsplash.jpeg?w=1200&auto=format,compress&cs=srgb" alt="" />
    </div>
  </div>
  <!-- Sections -->
      <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl py-16 mx-auto sm:py-24 lg:py-32 lg:max-w-none">
            <h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">Languages</h2>

            <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div v-for="language in languages" :key="language.name" class="relative group">
                <div class="relative w-full overflow-hidden bg-white rounded-lg h-80 group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img :src="language.imageSrc" :alt="language.imageAlt" class="object-cover object-center w-full h-full" />
                </div>
                <h3 class="mt-6 text-sm text-gray-500">
                  <a :href="language.href">
                    <span class="absolute inset-0" />
                    {{ language.name }}
                  </a>
                </h3>
                <p class="text-base font-semibold text-gray-900">{{ language.description }}</p>
              </div>
            </div>
          </div>
        </div>
        
      </section>
</template>
<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'

  const languages = [
  {
    name: 'Javascript',
    description: 'See demos built using vanilla Javascript',
    imageSrc: 'https://learnbatta.com/assets/images/javascript/javascript-logo.png',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '/javascript',
  },
  {
    name: 'React',
    description: 'See demos built using React, Gatsby, and Next.js',
    imageSrc: 'https://patterns.dev/img/reactjs/react-logo@3x.svg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '/react',
  },
  {
    name: 'Vue.js',
    description: 'See demos built using Vue.js and Nuxt.js',
    imageSrc: 'https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '/vuejs',
  },
]


</script>