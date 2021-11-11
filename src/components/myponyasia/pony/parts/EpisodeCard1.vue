<template>
  <router-link :to="link" class="relative group overflow-hidden">
    <img :src="thumbnail" alt="Episode Thumbnail" class="rounded-3xl object-cover max-h-[337px] group-hover:opacity-50 duration-150">
    <div v-if="subtitleLang" class="bg-[#881798] absolute right-0 top-0 flex space-x-4 p-3 px-4 rounded-bl-3xl rounded-tr-3xl">
      <div v-for="(item, index) in subtitleLang" :key="index" class="ring-2 ring-white px-3 p-0.5 rounded-3xl uppercase font-semibold text-sm"> {{ item }} </div>
    </div>
    <span class="absolute bottom-0 bg-[#881798] p-1 px-3 rounded-tr-3xl rounded-bl-3xl font-semibold truncate max-w-[83%]"> {{ episodeTitle }} </span>
  </router-link>  
</template>

<script>
export default {
  props: {
    link: {
      data: String,
      default: ''
    },
    thumbnail: {
      data: String,
      default: require('@/assets/images/myponyasia/landscape1.png')
    },
    subtitleLang: {
      data: Array,
      default: ''
    },
    episodeTitle: {
      data: String,
      default: ''
    },
  }
}
</script>

<style>

</style>