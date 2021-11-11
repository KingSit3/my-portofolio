<template>
  <header class="bg-trueGray-900">
      <div class="flex justify-between items-center px-5 md:px-10 py-1.5 rounded-b shadow-xl max-w-[90rem] mx-auto">
        <router-link to="/mpa/pony">
          <img class="w-40" src="@/assets/images/myponyasia/logo-myponyasia.png" alt="" />
        </router-link>

        <!-- Loading State button -->
        <div class="mr-0 md:mr-10 flex space-x-3">
          <button @click="$emit('loading-state')" v-text="LoadingStateProps ? 'Normal State' : 'Loading State'" class="bg-trueGray-600 p-1 rounded-lg font-semibold px-3 hover:bg-blue-700 duration-200"></button>
        </div>
        <!-- End Loading State button -->

        <!-- Desktop Nav -->
        <div class="hidden lg:contents">  
          <ul class="flex space-x-5 items-center font-semibold">
            <li class="navItemDesktop"><a href="#">Friendship Is Magic</a></li>
            <li class="navItemDesktop"><a href="#">Equestria Girls</a></li>
            <li class="navItemDesktop"><a href="#">Pony Life</a></li>
            <li class="navItemDesktop"><a href="#">Japanese Dub</a></li>
            <li class="navItemDesktop"><a href="#">Generation 5</a></li>
            <li class="navItemDesktop"><a href="#">Comics</a></li>
          </ul>
        </div>
        <!-- End Desktop Nav -->

        <!-- Mobile Nav -->
        <div class="content lg:hidden relative">
          <div v-show="menuOpen" @click="menuOpen = false" class="fixed w-full h-full bg-black/60 inset-0 z-10"/>
          <button @click="menuOpen = !menuOpen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-7 text-white" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          
          <!-- Navs -->
          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="transform translate-x-60 opacity-0"
            enter-to-class="transform translate-x-0 opacity-100"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform translate-x-0 opacity-100"
            leave-to-class="transform translate-x-60 opacity-0"
          >
            <div v-show="menuOpen" class="absolute -right-20 z-20 top-10">
              <ul class="space-y-3 p-3 items-center text-left h-screen w-[270px] md:w-[400px] pl-2 md:pl-5 pr-12 md:pr-28 bg-trueGray-700">
                <Disclosure v-for="loop in 5" :key="loop" v-slot="{ open }">
                  <DisclosureButton class="navItemMobile">
                    <h2 class="capitalize font-semibold">Friendship Is Magic</h2>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" :class="[open ? '-rotate-180' : '' ,'h-6 w-6 duration-200']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </DisclosureButton>

                  <transition
                    enter-active-class="transition duration-200 ease-out"
                    enter-from-class="transform -translate-y-4 opacity-0"
                    enter-to-class="transform translate-y-0 opacity-100"
                    leave-active-class="transition duration-200 ease-in"
                    leave-from-class="transform translate-y-0 opacity-100"
                    leave-to-class="transform -translate-y-4 opacity-0"
                  >
                    <DisclosurePanel class="pl-5">
                      <ul class="space-y-3">
                        <li><a href="#" class="font-semibold">Friendship games Shorts</a></li>
                        <li v-for="loop in 5" :key="loop"><a href="#" class="font-semibold">Season {{ loop }} </a></li>
                      </ul>
                    </DisclosurePanel>
                  </transition>

                </Disclosure>
                <li class="navItemMobile font-semibold">
                  <a href="#">Comics</a>
                </li>
              </ul>
            </div>
          </transition>
          <!-- Navs -->

        </div>
        <!-- End Mobile Nav -->

      </div>

  </header>
    <!-- End Navbar -->
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue'

export default {

  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },

  props:{
    LoadingStateProps: Boolean
  },

  data() {
    return {
      menuOpen: false
    }
  },

  emits: ['loading-state'],
}
</script>

<style>
.navItemDeskop{
  @apply hover:bg-[#881798] p-1.5 rounded-lg px-5 duration-150; 
}

.navItemMobile{
  @apply hover:bg-[#881798] p-1.5 duration-150 flex items-center justify-between cursor-pointer w-full; 
}
</style>