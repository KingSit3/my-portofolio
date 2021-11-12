<template>

  <!-- Loading State -->
  <div v-if="loadingState" class="">Ini loading State</div>
  <!-- Loading State -->

  <!-- Data State -->
  <div v-if="!loadingState" class="max-w-[85rem] mx-auto">

    <!-- Episode Cards -->
    <div class="max-w-[90%] mx-auto py-10 mt-10">

      <!-- Season Header --> 
        <BorderDivider :title="'Friendship Is Magic'" :secondTitle="'Rainbow Rocks Shorts '" />
      <!-- End Season Header -->

      <!-- Episodes Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 px-5 pt-5">
        <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, repellendus!'" :link="'/mpa/pony/season/2'" :subtitleLang="['en']" :thumbnail="require('@/assets/images/myponyasia/landscape2.png')" />
        <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet consectetur adipisicing elit.'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape1.png')" />
        <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor sit amet!'" :link="'/mpa/pony/season/2'" :subtitleLang="['id', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape3.png')" />
        <EpisodeCard1 :episodeTitle="'Lorem ipsum dolor'" :link="'/mpa/pony/season/2'" :subtitleLang="['en', 'id', 'fr']" :thumbnail="require('@/assets/images/myponyasia/landscape3.png')" />
      </div>
      <!-- End Episodes Card -->

    </div>
    <!-- Episode Cards -->

    <!-- Pagination -->
    <Pagination1 />
    <!-- End Pagination -->

    <!-- Episode Cards 2 -->
    <div class="max-w-[90%] mx-auto py-10 mt-10">

      <!-- Season Header --> 
        <h2 class="text-3xl font-semibold text-center">Equestria Girls / Rainbow Rocks Shorts</h2>
      <!-- End Season Header -->

      <!-- Episodes Card -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10 px-5 pt-5">
        <a href="#" class="hover:opacity-60 duration-200" v-for="loop in 5" :key="loop">
          <img src="@/assets/images/myponyasia/landscape3.png" alt="Thumbnail" class="rounded-t-lg">
          <div class="bg-[#881798] flex flex-col items-center justify-center py-3 rounded-b-lg">
            <h4 class="text-lg font-semibold truncate w-full px-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea eveniet modi consequuntur molestias laudantium. Quod aut mollitia eum sequi soluta! </h4>
            <div class="flex space-x-2 mt-1">
              <div class="p-0.5 px-2 border-2 text-sm rounded-md">ID</div>
              <div class="p-0.5 px-2 border-2 text-sm rounded-md">EN</div>
            </div>
          </div>
        </a>
      </div>
      <!-- End Episodes Card -->

    </div>
    <!-- Episode Cards 2 -->

    <!-- Pagination -->
    <Pagination1 />
    <!-- End Pagination -->

  </div>
  <!-- End Data State -->

</template>

<script>
import BorderDivider from './parts/BorderDivider.vue'
import EpisodeCard1 from './parts/EpisodeCard1.vue'
import Pagination1 from './parts/Pagination1.vue'
export default {
  props:{
    loadingState: Boolean,
  },

  components: {
    BorderDivider,
    EpisodeCard1,
    Pagination1
  }
}
</script>

<style>

</style>