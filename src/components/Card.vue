<template>
  <a :href="item.link" target="_blank">
    <figure  class="rounded-xl bg-slate-100/10 group overflow-hidden">

      <!-- Image & Tech -->
      <div class="relative">
        <img :src="item.image" :alt="`${item.title} Image`" class="rounded-t-xl aspect-video h-60 object-cover group-hover:opacity-50 group-hover:blur duration-300">

        <!-- Used Tech -->
        <div class="backdrop-blur-sm hover:backdrop-blur-none absolute bottom-0 right-0 p-1.5 px-3 rounded-tl-xl flex gap-3">
          <img v-for="(tech, index) in item.usedTech" :key="index" :src="`/images/tech/${tech}.png`" :alt="item.title" class="h-6">
        </div>
        <!-- End Used Tech -->

      </div>
      <!-- End Image & Tech -->

      <!-- Caption -->
      <figcaption class="p-2 bg-slate-100/5 relative">
        <p class="text-slate-50 font-semibold text-center capitalize">{{ item.title }}</p>
      </figcaption>
      <!-- End Caption -->

    </figure>
  </a>
</template>
<script setup lang="ts">
  import type {DataInterface} from '@/interface/GeneralInterfaces';

  const props = defineProps<{
    item: DataInterface
  }>()

</script>