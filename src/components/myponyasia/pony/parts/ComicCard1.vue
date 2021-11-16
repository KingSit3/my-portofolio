<template>
  <router-link :to="link" class="relative group h-[260px] md:h-[350px] lg:h-[400px]">
    <img :src="cover" alt="Comic Poster" class="h-[260px] md:h-[350px] lg:h-[400px] rounded-3xl object-cover group-hover:opacity-50 duration-150">
    <span class="max-w-[58%] bg-[#881798] absolute bottom-0 left-0 rounded-bl-3xl rounded-tr-3xl p-1 px-3 truncate text-xs md:text-base font-bold capitalize">{{ title }}</span>
    <span class="bg-[#881798] absolute bottom-0 right-0 rounded-tl-3xl rounded-br-3xl p-1 px-4 md:px-5 text-xs md:text-base font-bold uppercase">{{ lang }}</span>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      data: String,
      default: '',
    },
    cover: {
      data: String,
      default: require('@/assets/images/myponyasia/comicCover1.jpg'),
    },
    title: {
      data: String,
      default: '',
    },
    lang: {
      data: String,
      default: '',
    },
  }
}
</script>

<style>

</style>