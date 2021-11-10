<template>
  <div class="">

      <!-- Loading State -->
      <main v-if="loadingState == true" class="max-w-[85rem] mx-auto">
        Ini Loading State
      </main>
      <!-- End Loading State -->

      <!-- Data State -->
      <main v-else class="max-w-[85rem] mx-auto">

          <!-- Corousel -->
          <section>
            <vueper-slides  lazy 
                            lazy-load-on-drag 
                            autoplay
                            duration = 4000
                            :infinite="false"
                            :breakpoints="CorouselBreakpoints"
                            :pauseOnHover="false"
            >
            <vueper-slide v-for="(data, i) in corouselData" :key="i" :image="data.gambar">

              <!-- Content -->
              <template #content>
                  <div class="w-full justify-center items-center flex h-full bg-black bg-opacity-25">
                  <div class="w-[85%] text-center">
                    <h1 class="text-2xl line-clamp-3 font-bold">{{ data.content.title }} </h1>
                    <h3 class="mt-5 mb-10 text-lg line-clamp-5">{{ data.content.description }}</h3>
                    <a v-show="data.content.link" href="data.content.link" class="px-5 ring-2 ring-white hover:bg-white hover:text-black font-semibold duration-150 bg-opacity-75 p-1.5 rounded-lg">Ini Tombol</a>
                  </div>
                </div>
              </template>
              <!-- End Content -->

            </vueper-slide>

              <!-- Right Arrow Button -->
              <template #arrow-right>
                <button class="right-10">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </template>
              <!-- End Right Arrow Button -->

              <!-- Left Arrow Button -->
              <template #arrow-left>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 md:h-16 w-7 md:w-16 rounded-full bg-trueGray-600 bg-opacity-30 hover:bg-opacity-90 duration-150" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </button>
              </template>
              <!-- End Left Arrow Button -->

            </vueper-slides>
          </section>
          <!-- End Corousel -->

          <!-- Subtitle Progress -->
          <section class="my-16 max-w-[90%] mx-auto">

            <BorderDivider :title="'Subtitle Progress'" :link="'/myponyasia/anime2'" />
            
            <!-- Progress Bar -->
            <div class="space-y-5 mt-10">
              <!-- Bar -->
              <div class="font-semibold">
                <h3 class="text-sm">Friendship Is Magic - Season 1</h3>
                <h4 class="text-lg truncate">Episode 01 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero?</h4>
                <div class="w-full bg-gray-100 rounded-lg">
                  <div class="rounded-lg p-1 bg-[#881798] w-[50%]" />
                </div>
              </div>
              <!-- Bar -->
              <!-- Bar -->
              <div class="font-semibold">
                <h3 class="text-sm">Friendship Is Magic - Season 1</h3>
                <h4 class="text-lg truncate">Episode 01 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero?</h4>
                <div class="w-full bg-gray-100 rounded-lg">
                  <div class="rounded-lg p-1 bg-[#881798] w-[75%]" />
                </div>
              </div>
              <!-- Bar -->
            </div>
            <!-- End Progress Bar -->

          </section>
          <!-- End Subtitle Progress -->

          <!-- Latest Video -->
          <section class="my-16 max-w-[90%] mx-auto">

            <BorderDivider :title="'Latest Release 1'" :link="'/myponyasia/anime2'" />

            <!-- Content 1 -->
            <div class="grid grid-cols-3 gap-5 mt-10">
              <router-link v-for="loop in 4" :key="loop" to="/myponyasia/pony/stream" class="relative group overflow-hidden">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
                <div class="bg-[#881798] absolute right-0 top-0 flex space-x-4 p-3 px-4 rounded-bl-lg rounded-tr-lg">
                  <div class="ring-2 ring-white px-3 p-0.5 rounded-lg uppercase font-semibold text-sm">ID</div>
                  <div class="ring-2 ring-white px-3 p-0.5 rounded-lg uppercase font-semibold text-sm">EN</div>
                </div>
                <span class="absolute bottom-0 bg-[#881798] p-1 px-3 rounded-tr-lg rounded-bl-lg font-semibold truncate w-10/12">Episode 20 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto reiciendis veniam nesciunt, accusamus ipsum provident dolorem sint necessitatibus impedit praesentium. </span>
              </router-link>  
            </div>
            <!-- End Content 1 -->

          </section>
          <!-- End Latest Video -->

          <!-- Latest Video 2 -->
          <section class="my-16 max-w-[90%] mx-auto">

            <div class="flex justify-between">
              <div class="w-1/4">
                <h2 class="text-3xl font-semibold"><a href="#">Latest Release 2</a></h2>
              </div>
              <div class="w-3/4 divide-y">

                <!-- Card -->
                <div v-for="loop in 4" :key="loop"  class="flex justify-between py-5">
                  <div>
                    <a href="#" class="">Equestria Girls / Rainbow Rocks Shorts / Nov, 07 - en id</a>
                    <h3 class="text-xl truncate w-3/4 font-bold"><a href="#">Episode 20 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h3>
                  </div>
                  <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover max-h-[150px]">
                </div>
                <!-- End Card -->

              </div>
            </div>

          </section>
          <!-- End Latest Video 2-->

          <!-- Latest Comics 1 -->
          <section class="my-16 max-w-[90%] mx-auto">

            <BorderDivider :title="'Latest Comics'" :link="'/myponyasia/anime2'" />

            <!-- Content -->
            <div class="grid grid-cols-4 gap-5 mt-10 justify-items-center">

              <router-link to="/myponyasia/pony/comics" class="relative group">
                <img src="@\assets\images\myponyasia\poster-portrait.webp" alt="Comic Poster" class="max-w-[250px] max-h-[360px] w-[250px] h-[360px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="absolute bottom-0 p-1.5 bg-black/90 w-full text-center rounded-b-lg truncate">Other Comics</span>
                <span class="absolute top-0 bg-black/90 p-1.5 px-3 rounded-tl-lg rounded-br-lg font-semibold max-w-[150px] truncate">Canterlot High: March Radness</span>
                <div class="absolute bottom-10 left-1 flex space-x-2">
                  <span class="bg-black/90 p-1 px-5 rounded-lg font-bold">ID</span>
                </div>
              </router-link>

            </div>
            <!-- End Content -->

          </section>
          <!-- End Latest Comics 1 -->

          <!-- Latest Comics 2 -->
          <section class="my-16 max-w-[90%] mx-auto">

            <BorderDivider :title="'Latest Comics 2'" :link="'/myponyasia/anime2'" />

            <!-- Content -->
            <div class="grid grid-cols-4 gap-5 mt-10 justify-items-center">

              <router-link v-for="loop in 4" :key="loop" to="/myponyasia/pony/comics" class="relative group h-[400px]">
                <img src="@\assets\images\myponyasia\comicCover.jpg" alt="Comic Poster" class="h-[400px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="bg-[#881798] absolute bottom-0 left-0 rounded-bl-lg rounded-tr-lg p-1 px-3 truncate font-bold">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 p-1 rounded-tl-lg rounded-br-lg px-5 font-bold">ID</span>
              </router-link>

            </div>
            <!-- End Content -->

          </section>
          <!-- End Latest Comics 2 -->

          <!-- Latest Comics 3 -->
          <section class="my-16 max-w-[90%] mx-auto">

            <BorderDivider :title="'Latest Comics 3'" :link="'/myponyasia/anime2'" />

            <!-- Content -->
            <div class="grid grid-cols-4 gap-5 mt-10 justify-items-center">

              <router-link v-for="loop in 4" :key="loop" to="/myponyasia/pony/comics" class="relative group h-[400px]">
                <img src="@\assets\images\myponyasia\comicCover.jpg" alt="Comic Poster" class="h-[400px] rounded-lg object-cover group-hover:opacity-50 duration-150">
                <span class="bg-[#881798] absolute bottom-0 left-0 rounded-bl-lg rounded-tr-lg p-1 px-3 truncate font-bold">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 p-1 rounded-tl-lg rounded-br-lg px-5 font-bold">ID</span>
              </router-link>

            </div>
            <!-- End Content -->

          </section>
          <!-- End Latest Comics 3 -->

      </main>
      <!-- End Data State -->
        
      
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import BorderDivider from './parts/BorderDivider.vue'

export default {
  props:{
    loadingState: Boolean
  },
  
  components: {
      VueperSlides,
      VueperSlide,
      BorderDivider
  },

  data() {
  return {
      corouselData: [
        {
          content: {
            title: 'Slide 1.',
            description: 'Ini Slide ke 1',
            link: 'https://pony.myponyasia.com/',
          },
          gambar: require('@/assets/images/myponyasia/landscape1.png')
        },
        {
          content: {
            title: 'Slide 2',
            description: 'Ini Slide ke 2',
            link: '',
          },
          gambar: require('@/assets/images/myponyasia/landscape2.png')
        },
        {
          content: {
            title: 'Slide 3',
            description: 'Ini Slide ke 3',
            link: '',
          },
          gambar: require('@/assets/images/myponyasia/otaku-anime.jpg')
        }
      ],
      CorouselBreakpoints: {
        1024: {
          slideRatio: 1 / 5
        },
        769: {
          slideRatio: 1 / 3
        },
        640: {
          slideRatio: 1 / 2,
          arrows: false,
          bulletsOutside: true
        },
      },
    }
  },

}
</script>