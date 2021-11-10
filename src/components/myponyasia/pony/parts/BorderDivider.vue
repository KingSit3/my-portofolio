<template>
<div class="relative justify-center">
  <div class="border border-b-2 border-[#881798]"></div>
  <div class="flex justify-center">
    <router-link :to="link" class="absolute -mt-5 bg-pony-primary text-white hover:text-opacity-50 duration-150 px-5 text-3xl font-semibold rounded-lg">{{ title }}</router-link>
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
    link: {
      data: String,
      default: '',
    }
  }
}
</script>

<style>

</style>