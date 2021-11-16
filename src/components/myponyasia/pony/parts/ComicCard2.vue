<template>
  <router-link :to="link" class="relative group h-[250px] md:h-[350px]">
    <img :src="cover" alt="Comic Poster" class="h-[250px] md:h-[350px] rounded-lg object-cover group-hover:opacity-50 duration-150">
    <span class="bg-[#881798] absolute bottom-0 w-full text-center rounded-b-lg py-0 md:py-1.5 px-3 font-bold line-clamp-2 capitalize">{{ title }}</span>
    <span class="bg-[#881798] absolute top-0 right-0 text-center rounded-bl-lg rounded-tr-lg py-0 md:py-3 px-3 font-bold line-clamp-2 uppercase ">{{ lang }}</span>
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