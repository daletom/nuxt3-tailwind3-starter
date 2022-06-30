<template>
<Popover>
          <div class="relative px-4 pt-6 sm:px-6 lg:px-8">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span class="sr-only">Workflow</span>
                    <img alt="Workflow" class="w-auto h-8 sm:h-10" src="https://tom.imgix.net/imgix-presskit.pdf?page=3&auto=format&w=100" />
                  </a>
                  <div class="flex items-center -mr-2 md:hidden">
                    <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Open main menu</span>
                      <MenuIcon class="w-6 h-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a v-for="item in navigation" :key="item.name" :href="item.href" class="font-medium text-gray-500 hover:text-gray-900">{{ item.name }}</a>
              </div>
            </nav>
          </div>

          <transition enter-active-class="duration-150 ease-out" enter-from-class="scale-95 opacity-0" enter-to-class="scale-100 opacity-100" leave-active-class="duration-100 ease-in" leave-from-class="scale-100 opacity-100" leave-to-class="scale-95 opacity-0">
            <PopoverPanel focus class="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden">
              <div class="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div class="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img class="w-auto h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="" />
                  </div>
                  <div class="-mr-2">
                    <PopoverButton class="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span class="sr-only">Close main menu</span>
                      <XIcon class="w-6 h-6" aria-hidden="true" />
                    </PopoverButton>
                  </div>
                </div>
                <div class="px-2 pt-2 pb-3 space-y-1">
                  <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50">{{ item.name }}</a>
                </div>
                
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
    </template>

    <script setup>
      import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
  import { MenuIcon, XIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Javascript', href: '#' },
  { name: 'React', href: '#' },
  { name: 'VueJS', href: '#' },
  { name: 'Company', href: '#' },
]
</script>