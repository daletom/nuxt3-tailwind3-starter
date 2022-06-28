<template>
    <section aria-labelledby="collections-heading" class="bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
            <h2 id="collections-heading" class="text-2xl font-extrabold text-gray-900">See Other Categories in Javascript?</h2>

            <div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
              <div v-for="language in languages" :key="language.name" class="group relative">
                <div class="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img :src="language.imageSrc" :alt="language.imageAlt" class="w-full h-full object-center object-cover" />
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

const posts = [
  {
    title: 'Video Demo: HLS vs MP4',
    href: 'https://gracious-gates-e1571d.netlify.app/',
    category: { name: 'Article', href: '#' },
    description:
      'This app is used to showcase the user experience of playing an mp4 vs an HLS video with imgix. To test this, right-click on the browser and select "inspect", click the Network tab, change the speed to Fast 3G, and make sure the "disable cache" button next to it is selected.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      'https://source.unsplash.com/random/700x700',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    category: { name: 'Video', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      'https://source.unsplash.com/random/699x699',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Improve your customer experience',
    href: '#',
    category: { name: 'Case Study', href: '#' },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      'https://source.unsplash.com/random/698x698',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]
  
</script>