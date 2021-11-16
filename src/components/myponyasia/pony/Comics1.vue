<template>
  <div class="max-w-[85rem] mx-auto">

    <!-- Popular & Latest Comics & Corousel -->
    <div class="flex justify-between flex-col lg:flex-row max-w-[90%] mx-auto pb-10">

      <!-- Corousel -->
      <div class="w-full lg:w-[40%] pt-5 lg:pt-0 relative flex items-center justify-center space-x-4">
        
        <!-- Corousel Card -->
        <router-link to="#" :key="loop"  class="relative group">
          <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Corousel Comic Poster" class="h-[500px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
          <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-5 truncate text-lg font-semibold capitalize">Issue #100</span>
          <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-5 text-lg font-semibold uppercase">ID</span>
        </router-link>
        <!-- End Corousel Card -->

        <!-- Bullets -->
        <div class="flex flex-col space-y-4">
          <button class="w-3 h-3 bg-[#881798] rounded-full"></button>
          <button class="w-3 h-3 bg-white rounded-full"></button>
          <button class="w-3 h-3 bg-white rounded-full"></button> 
          <button class="w-3 h-3 bg-white rounded-full"></button>
        </div>
        <!-- Bullets -->

      </div>
      <!-- End Corousel -->
      
      <!-- Popular & Latest Comics -->
      <div class="w-full lg:w-[60%] pt-5 lg:pt-0 space-y-6">

        <!-- Popular Comics Section -->
        <div class="space-y-2">
          
          <!-- Top Popular Section -->
          <div class="flex space-x-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd" />
            </svg>
            <router-link to="#" class="hover:opacity-50 duration-150">
              <h2 class="text-xl font-semibold">Popular Comics</h2>
            </router-link>
          </div>
          <!-- End Top Popular Section -->

          <!-- Container -->
          <div class="relative w-full flex justify-center items-center space-x-2">
            
            <!-- Prev button -->
            <button class="bg-[#881798] rounded-full opacity-75 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <!-- End Prev button -->

            <!-- Comic -->
            <div class="flex justify-center items-center space-x-2 md:space-x-8 lg:space-x-3">
              <router-link to="#" class="relative group">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>

              <router-link to="#" class="relative group hidden md:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
              <router-link to="#" class="relative group hidden md:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
              <router-link to="#" class="relative group hidden lg:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
            </div>
            <!-- Comic -->

            <!-- Next Button -->
            <button class="bg-[#881798] rounded-full opacity-75 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <!-- End Next Button -->

          </div>
          <!-- End Container -->

        </div>
        <!-- Popular Comics Section -->

        <!-- Latest Comics Section -->
        <div class="space-y-2">
          
          <!-- Top Latest Section -->
          <div class="flex space-x-1 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
            </svg>
            <router-link to="#" class="hover:opacity-50 duration-150">
              <h2 class="text-xl font-semibold">Latest Comics</h2>
            </router-link>
          </div>
          <!-- End Top Latest Section -->

          <!-- Container -->
          <div class="relative w-full flex justify-center items-center space-x-2">
            
            <!-- Prev button -->
            <button class="bg-[#881798] rounded-full opacity-75 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <!-- End Prev button -->

            <!-- Comic -->
            <div class="flex justify-center items-center space-x-2 md:space-x-8 lg:space-x-3">
              <router-link to="#" class="relative group">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>

              <router-link to="#" class="relative group hidden md:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
              <router-link to="#" class="relative group hidden md:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
              <router-link to="#" class="relative group hidden lg:inline">
                <img src="@/assets/images/myponyasia/comicCover1.jpg" alt="Comic Poster" class="h-[230px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
                <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs  font-semibold capitalize">Issue #100</span>
                <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 text-xs font-semibold uppercase">ID</span>
              </router-link>
            </div>
            <!-- Comic -->

            <!-- Next Button -->
            <button class="bg-[#881798] rounded-full opacity-75 hover:opacity-100 duration-150">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 p-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <!-- End Next Button -->

          </div>
          <!-- End Container -->

        </div>
        <!-- End Latest Comics Section -->

      </div>
      <!-- Latest & Latest Comics -->

    </div>
    <!-- End Popular & Latest Comics & Corousel -->

    <!-- Latest Comics 2 -->
    <section class="my-16 max-w-[90%] mx-auto">

      <BorderDivider :title="'Other Comics'" />

      <!-- Content -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 justify-items-center">

        <ComicCard2 :title="'issue #100'" :cover="require('@/assets/images/myponyasia/comicCover2.jpg')" :lang="'id'"  :link="'/mpa/pony/comics'" />
        <ComicCard2 :title="'issue #1'" :cover="require('@/assets/images/myponyasia/comicCover1.jpg')" :lang="'EN'"  :link="'/mpa/pony/comics'" />
        <ComicCard2 :title="'issue #5'" :cover="require('@/assets/images/myponyasia/comicCover2.jpg')" :lang="'id'"  :link="'/mpa/pony/comics'" />
        <ComicCard2 :title="'issue #99'" :cover="require('@/assets/images/myponyasia/comicCover1.jpg')" :lang="'en'"  :link="'/mpa/pony/comics'" />

      </div>
      <!-- End Content -->  

    </section>
    <!-- End Latest Comics 2 -->

  </div>
</template>

<script>
import BorderDivider from './parts/BorderDivider.vue'
import ComicCard2 from './parts/ComicCard2.vue'

export default {
  components: { 
    BorderDivider,
    ComicCard2,
  },

}
</script>

<style>

</style>