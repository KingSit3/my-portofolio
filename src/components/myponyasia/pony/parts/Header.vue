<template>
  <header class="bg-trueGray-900">
      <div class="flex justify-between items-center px-10 py-1.5 rounded-b shadow-xl max-w-[90rem] mx-auto">
        <router-link to="/myponyasia/pony/home">
          <img class="w-40" src="@/assets/images/myponyasia/logo-myponyasia.png" alt="" />
        </router-link>

        <!-- Loading State button -->
        <div class="mr-0 md:mr-10 flex space-x-3">
          <button @click="$emit('loading-state')" v-text="LoadingStateProps ? 'Normal State' : 'Loading State'" class="bg-trueGray-600 p-1 rounded-lg font-semibold px-3 hover:bg-blue-700 duration-200"></button>
        </div>
        <!-- End Loading State button -->

        <div>
          <ul class="flex space-x-3 items-center font-semibold">
            <li class="navItem"><a href="#">Friendship Is Magic</a></li>
            <li class="navItem"><a href="#">Equestria Girls</a></li>
            <li class="navItem"><a href="#">Pony Life</a></li>
            <li class="navItem"><a href="#">Japanese Dub</a></li>
            <li class="navItem"><a href="#">Generation 5</a></li>
            <li class="navItem"><a href="#">Comics</a></li>
          </ul>
        </div>

      </div>

  </header>
    <!-- End Navbar -->
</template>

<script>
export default {

  props:{
    LoadingStateProps: Boolean
  },

  emits: ['loading-state'],
}
</script>

<style>
.navItem{
  @apply hover:bg-[#881798] p-1.5 rounded-lg px-3 duration-150; 
}
</style>