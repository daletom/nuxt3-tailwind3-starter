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
      <img class="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://ix-www.imgix.net/press/press-leadership-podcast.jpg?w=1200&auto=format,compress&cs=srgb" alt="" />
    </div>
  </div>
  <!-- Sections -->
  <div class="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3" />
    </div>
    <div class="relative mx-auto max-w-7xl">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">imgix Demos</h2>
        <p class="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4">These are a list of some demos we have made using imgix Video, Vue, React, and Javascript.</p>
      </div>
      <div class="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
        <div v-for="post in posts" :key="post.title" class="flex flex-col overflow-hidden rounded-lg shadow-lg">
          <div class="flex-shrink-0">
            <nuxt-link :to="post.href" class="block mt-2">
            <img class="object-cover w-full h-48" :src="post.imageUrl" alt="" />
            </nuxt-link>
          </div>
          <div class="flex flex-col justify-between flex-1 p-6 bg-white">
            <nuxt-link :to="post.href" class="block mt-2">
            <div class="flex-1">
              <p class="text-sm font-medium text-indigo-600">
                <a class="hover:underline">
                  {{ post.category.name }}
                </a>
              </p>
                <p class="text-xl font-semibold text-gray-900">
                  {{ post.title }}
                </p>
                <p class="mt-3 text-base text-gray-500">
                  {{ post.description }}
                </p>
            </div>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const posts = [
  {
    title: 'Video Demo: HLS vs MP4',
    href: 'https://hlsvsmp4-vue.vercel.app/',
    category: { name: 'Video Demo', href: '#' },
    description:
      'This app is used to showcase the user experience of playing an mp4 vs an HLS video with imgix. To test this, right-click on the browser and select "inspect", click the Network tab, change the speed to Fast 3G, and make sure the "disable cache" button next to it is selected.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://tom.imgix.net/hlsvsmp4.png',
  },
  {
    title: 'How to use Srcset values with IX React',
    href: '/srcset',
    category: { name: 'Code Example', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://assets.imgix.net/blog/device_srcset.pdf?bg=fff&fm=png8&w=992&colorquant=60',
  },
  {
    title: 'Using Imgix Management API',
    href: '/ixmgmtjs',
    category: { name: 'Code Example', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://assets.imgix.net/docs/setup/image-manager/Tag+Search.png?auto=format&w=800&usm=15',
  },
]

</script>