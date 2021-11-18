<template>
  <div class="max-w-[85rem] mx-auto">
    <div class="max-w-[90%] mx-auto">
      <!-- Old Version -->
      <div class="py-10 flex justify-center flex-col">
        <BorderDivider :title="'Old Version'" />

        <h2 class="text-center text-3xl capitalize font-semibold mt-10">
          Friendship is Magic
        </h2>
        
        <!-- Language DropDown -->
        <div class="relative flex justify-center w-1/4 flex-col mx-auto mt-5 z-10">
        <label class="font-light pb-1">Select Language</label>
        <Listbox v-model="selectedLang">
          <ListboxButton class="text-xl bg-trueGray-600 px-5 flex justify-between items-center space-x-3 rounded-t-lg">
            <span class="uppercase py-2 flex">
              {{ selectedLang }}
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </ListboxButton>

          <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform -translate-y-4 opacity-0"
          enter-to-class="transform translate-y-0 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform translate-y-0 opacity-100"
          leave-to-class="transform -translate-y-2 opacity-0"
          >
            <ListboxOptions class="bg-trueGray-600 absolute top-[73px] w-full rounded-b-lg">
              <ListboxOption
                v-slot="{selected}"
                v-for="lang in langs"
                :key="lang.code"
                :value="lang.name"
              >
              <div :class="[selected ? 'text-white bg-[#881798]' : '', 'px-5 space-y-4']">
                <button class="px-5 py-1 uppercase">{{ lang.name }}</button>
              </div>
                
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </Listbox>
        </div>
        <!-- End Language DropDown -->

        <!-- Comic Cards -->
        <div class="mt-3">
          <h3 class="text-xl font-semibold mb-3">The Return of Queen Chrysalis</h3>
          <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5">

            <!-- Card -->
            <div v-for="loop in 6" :key="loop" class="relative h-[250px] md:h-[350px]">
              <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[250px] md:h-[350px] rounded-lg object-cover">
              <span class="bg-[#881798] absolute top-0 right-0 text-center rounded-bl-lg rounded-tr-lg py-0 md:py-3 px-3 font-bold line-clamp-2 uppercase ">ID</span>
              <span class="bg-[#881798] absolute bottom-10 w-full text-center py-0 md:py-1.5 px-3 font-bold line-clamp-2 capitalize">Issue #100</span>
              <div class="bg-[#881798] absolute bottom-0 w-full border-t-[1px] border-white/50 flex justify-between px-5 rounded-b-lg p-1">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 p-1 hover:bg-white/30 duration-150 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </button>
                <a href="#" class="text- font-semibold p-1 px-5 hover:bg-white/30 duration-150 rounded-lg">Read</a>
              </div>
            </div>
            <!-- End Card -->

          </div>
        </div>
        <!-- Comic Card -->

      </div>
      <!-- End Old Version -->
    </div>
  </div>
</template>

<script>
import BorderDivider from "./parts/BorderDivider.vue";
import {ref} from "vue";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/vue";

export default {
  components: {
    BorderDivider,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
  },

  setup() {
    const langs = [
        {
          code: 'id',
          name: 'indonesia',
        },
        {
          code: 'En',
          name: 'ENglish',
        },
        {
          code: 'jp',
          name: 'Japanese',
        },
      ]

    const selectedLang = ref(langs[0].name)

    return {
      langs,
      selectedLang,
    }
  },

};
</script>

<style>
</style>