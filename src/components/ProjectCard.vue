<template>
  <a :href="item.link" target="_blank">
    <figure  class="rounded-xl bg-slate-100/10 group overflow-hidden hover:border-purple-500 border-transparent border-b-2 duration-200">

      <!-- Image & Tech -->
      <div class="relative">

        <!-- Image & Description -->
        <div class="flex flex-col md:flex-row gap-1 md:gap-5 pb-10 md:pb-0">
          <img :src="item.image" :alt="`${item.title} Image`" class="rounded-t-xl aspect-video w-full md:w-1/2 h-full md:h-52 object-cover group-hover:opacity-50 group-hover:blur duration-300">
          <div class="w-full md:w-1/2 p-1.5 md:py-4">
            <p class="text-slate-50/90">{{item.description }}</p>
          </div>
        </div>
        <!-- End Image & Description -->

        <!-- Used Tech -->
        <div class="backdrop-blur-sm hover:backdrop-blur-none absolute bottom-0 right-0 p-1.5 px-3 rounded-tl-xl flex gap-3">
          <img v-for="(tech, index) in item.usedTech" :key="index" :src="`/images/tech/${tech}-icon.svg`" :alt="item.title" class="h-6">
        </div>
        <!-- End Used Tech -->

      </div>
      <!-- End Image & Tech -->

      <!-- Title -->
      <figcaption class="p-2 bg-slate-100/5 relative">
        <p class="text-slate-50 font-semibold text-center capitalize">{{ item.title }}</p>
      </figcaption>
      <!-- End Title -->

    </figure>
  </a>
</template>
<script setup lang="ts">
  import type {DataInterface} from '@/interface/GeneralInterfaces';

  defineProps<{
    item: DataInterface
  }>()

</script>