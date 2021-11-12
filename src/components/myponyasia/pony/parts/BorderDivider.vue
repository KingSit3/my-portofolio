<template>
<div class="relative justify-center items-center">
  <div class="border border-b-2 border-[#881798]"></div>
  <div class="flex justify-center text-center">
    <router-link :to="link" :class="[ secondTitle ? '-mt-10' : '-mt-5' ,'absolute bg-pony-primary text-white hover:text-opacity-50 duration-150 px-5 text-xl md:text-2xl lg:text-3xl font-semibold rounded-lg']">{{ title }} <br> {{ secondTitle }} </router-link>
  </div>
</div>
</template>

<script>
export default {
  props:{
    title: {
      data: String,
      default: '',
    },
    secondTitle: {
      data: String,
      default: '',
    },
    link: {
      data: String,
      default: '',
    }
  }
}
</script>

<style>

</style>