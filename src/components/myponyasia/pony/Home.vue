<template>
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
        <div class="space-y-5 mt-10 px-5">
          <!-- Bar -->
          <div v-for="loop in 3" :key="loop" class="font-semibold">
            <h3 class="text-xs md:text-sm">Friendship Is Magic - Season {{ loop }} </h3>
            <h4 class="text-sm md:text-lg truncate">Episode 0{{ loop }} - Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, libero?</h4>
            <div class="w-full bg-gray-100 rounded-lg">
              <div class="rounded-lg p-1 bg-[#881798] w-[50%]" />
            </div>
          </div>
          <!-- Bar -->
        </div>
        <!-- End Progress Bar -->

      </section>
      <!-- End Subtitle Progress -->

      <!-- Latest Release 1 -->
      <section class="my-16 max-w-[90%] mx-auto">

        <BorderDivider :title="'Latest Release 1'" :link="'/myponyasia/anime2'" />

        <!-- Episode Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5">
          <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus!'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape2.png')" />
          <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id', 'fr']" />
          <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit ametrepellendus!'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape2.png')" />
          <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id']" />
          <EpisodeCard1 :episodeTitle="'Lorem ipsum'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape2.png')" />
          <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur'" :link="'/mpa/pony/season/2'" :subtitleLang="['fr']" />
        </div>
        <!-- End Episode Grid -->
      </section>
      <!-- End Latest Release 1 -->

      <!-- Latest Release 2 -->
      <section class="my-16 max-w-[90%] mx-auto">

        <div class="flex flex-col lg:flex-row justify-between">
          
          <!-- Desktop Header -->
          <div class="w-full lg:w-1/4 text-center hidden lg:contents">
            <h2 class="text-3xl font-semibold"><a href="#">Latest Release 2</a></h2>
          </div>
          <!-- End Desktop Header -->

          <!-- Mobile Header -->
          <div class="lg:hidden contents">
            <BorderDivider :title="'Latest Release 2'" :link="'/myponyasia/anime2'" />
          </div>
          <!-- End Mobile Header -->
              

          <!-- Card -->
          <div class="w-full lg:w-3/4 divide-y divide-[#881798]">
            <div v-for="loop in 3" :key="loop"  class="flex justify-between py-5 px-5 md:space-x-2">
              <div class="w-1/2 md:w-3/4">
                <h4 class="truncate text-xs md:text-sm lg:text-base"><a href="/mpa/pony/season/2">Equestria Girls / Rainbow Rocks Shorts / Nov, 07 - en id</a></h4>
                <h3 class="text-base md:text-lg lg:text-xl font-bold line-clamp-2"><a href="/mpa/pony/season/2">Episode 20 - Lorem ipsum dolor sit amet consectetur adipisicing elit.</a></h3>
              </div>
              <div class="w-1/2 md:w-1/2">
                <img src="@\assets\images\myponyasia\landscape1.png" alt="Poster" class="rounded-xl object-cover w-[200px] md:w-[250px]">
              </div>
            </div>
          </div>
          <!-- End Card -->

        </div>

      </section>
      <!-- End Latest Release 2-->

      <!-- Latest Comics 1 -->
      <section class="my-16 max-w-[90%] mx-auto">

        <BorderDivider :title="'Latest Comics'" :link="'/myponyasia/anime2'" />

        <!-- Content -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 justify-items-center">

          <router-link to="/myponyasia/pony/comics" class="relative group" v-for="loop in 4" :key="loop">
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
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 justify-items-center">
          <ComicCard1 :title="'issue #100'" :cover="require('@/assets/images/myponyasia/comicCover2.jpg')" :lang="'id'"  :link="'/mpa/pony/comics'" />
          <ComicCard1 :title="'issue #99'" :cover="require('@/assets/images/myponyasia/comicCover1.jpg')" :lang="'en'" :link="'/mpa/pony/comics'" />
          <ComicCard1 :title="'issue #98'" :cover="require('@/assets/images/myponyasia/comicCover2.jpg')" :lang="'fr'" :link="'/mpa/pony/comics'" />
          <ComicCard1 :title="'issue #98'" :cover="require('@/assets/images/myponyasia/comicCover2.jpg')" :lang="'fr'" :link="'/mpa/pony/comics'" />
        </div>  
        <!-- End Content -->

      </section>
      <!-- End Latest Comics 2 -->

      <!-- Latest Comics 3 -->
      <section class="my-16 max-w-[90%] mx-auto">

        <BorderDivider :title="'Latest Comics 3'" :link="'/myponyasia/anime2'" />

        <!-- Content -->
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 justify-items-center">

          <router-link v-for="loop in 5" :key="loop" to="/myponyasia/pony/comics" class="relative group h-[250px] md:h-[350px]">
            <img src="@\assets\images\myponyasia\comicCover1.jpg" alt="Comic Poster" class="h-[250px] md:h-[350px] rounded-lg object-cover group-hover:opacity-50 duration-150">
            <span class="bg-[#881798] absolute bottom-0 w-full text-center rounded-b-lg py-0 md:py-3 px-3 font-bold line-clamp-2">Lorem ipsum dolor sit amet consectetur.</span>
          </router-link>

        </div>
        <!-- End Content -->

      </section>
      <!-- End Latest Comics 3 -->

  </main>
  <!-- End Data State -->
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import BorderDivider from './parts/BorderDivider.vue'
import ComicCard1 from './parts/ComicCard1.vue'
import EpisodeCard1 from './parts/EpisodeCard1.vue'

export default {
  props:{
    loadingState: Boolean
  },
  
  components: {
      VueperSlides,
      VueperSlide,
      BorderDivider,
      EpisodeCard1,
      ComicCard1,
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
        3840: {
          slideRatio: 1 / 3
        },
        1024: {
          arrows: false,
          bullets: false
        },
        768: {
          slideRatio: 1 / 2,
          arrows: false,
          bullets: false
        },
      },
    }
  },

}
</script>