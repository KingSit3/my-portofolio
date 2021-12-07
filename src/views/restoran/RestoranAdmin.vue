<template>
  <div class="flex justify-between max-w-[1400px] mx-auto bg-[#f1f1f1]">
    <div class="w-1/4 h-screen border-r-2 border-trueGray-200/70">
      <!-- <Sidebar /> -->
    </div>
    <div class="w-full">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Sidebar from '@/components/restoran/admin/parts/Sidebar.vue'

export default {
  components: {
    // Sidebar,
  },

  setup() {
    const numbers = [1, 3, 6, 4, 1, 2]

    numbers.sort().reduce(solution) 

    function solution(prev, next) {
      
      if(next > -1 && next === prev) {
          prev++;
      }
      console.log(prev)
        
    }

  }
}
</script>
